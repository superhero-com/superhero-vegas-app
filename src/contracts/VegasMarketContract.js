export default
`
@compiler >= 6

include "String.aes"
include "List.aes"

payable contract VegasMarketContact =


    datatype event =
        AddMarket(address, hash, int)
        | SubmitAnswer(address, hash, int)
        | ReceiveReward(address, int,int)
        | ContractBalance(int)


    /**
     * Vegas的合约状态
     * - markets: 存放所有用户发起的投注信息
     * - user_markets_record: 已参与过投注的历史记录
     * - oracle_market:小型预言机，超管提供的数据
     * - oracle_market_count:某个预测已经投票过的次数
     * - oracle_market_record:管理员投票后的历史记录
     * - owner: 合约归属者
     * - aggregator_user: 合约的管理账户
     */
    record state = {
        //预测的全部内容，哪个用户预测的id的预测内容(用户, map(预测id, 预测细节))，详情页可以直接使用address+id访问
        markets                     : map(address, map(hash, market)),
        //进行中的预测，可以理解为是全部预测中的一个缓存分类，用于在首页展示和个人预测的我发起的页面展示
        markets_start               : map(address, map(hash, market)),
        //等待预言机的预测，在提供数据的页面展示
        markets_wait               : map(address, map(hash, market)),
        //已结束的预测，提供完数据后在已结束的页面展示
        markets_over               : map(address, map(hash, market)),
        //我参与过的预测激励，我自己参与过那个预测并且是哪个人的
        markets_record             : map(address, list(market_rocord)),

        //用户投票记录，用于检测当前用户是否投票过的判断，哪个账户发布的哪个预测的那个用户投票的第几个结果
        user_markets_record         : map(address, map(hash, map(address,int))),
        //用户领奖记录，哪个账户发布的哪个预测的那个用户领取的金额
        user_markets_receive_record : map(address, map(hash, map(address,int))),
        //某个预测的结果合集
        oracle_market               : map(hash, list(int)),
         //已经预测的次数
        oracle_market_count         : map(hash, int),
        //法官投票的记录，用于后期审查
        oracle_market_record        : map(hash, map(address, int)),
        //合约归属者
        owner                       : address,
        //法官账户
        aggregator_user             : map(address, string),
        //配置文件
        config                      : config}

    //预言记录对象，用于存储用户竞猜后临时保存的记录，在页面展示
    record market_rocord = {
        //预言id sha256（地址+时间戳）
        market_id      : hash,
        //预测发布者地址
        market_address : address}

    record config = {
        //触发预测完成的次数
        oracle_trigger_count : int,
        //预测最低的时间限制
        market_min_height      : int,
        //预测最高的时间限制
        market_max_height     : int,
         //交易记录最多缓存条数
        record_max_count     : int}


    /**
     * 预测详情信息
     * - content: 预测的内容
     * - source_url: 预测的结果查询url地址
     * - answers: 预测的答案选项
     * - create_height: 发布预测时候的创建的高度
     * - create_time: 创建预测的时间
     * - min_amount: 最小的投注金额
     * - total_amount: 当前预测已经投注的总金额
     * - result: 该预测的答案是什么
     * - progress: 当前预测的进度（0）进行中的状态，（1）等待结果状态，（2）已结束的状态 (999)作废状态，只有合约合约归属者可用
     * - market_type: 当前预测的类型（0）聚合器模式，（1）私有模式
     */
    record market = {
        //预言id sha256（地址+时间戳）
        market_id      : hash,
        //发布者
        owner          : address,
        //内容，用于展示给用户的
        content        : string,
        //获取结果的地址，用于查看的
        source_url     : string,
        //可能产生的结果
        answers        : list(answer),
        //创建的高度
        create_height  : int,
        //创建的时间
        create_time    : int,
        //结束的时间
        over_height      : int,
        //最小投注数量
        min_amount     : int,
        //当前主题一共投注了多少
        total_amount   : int,
        //当前主题一共被领取了多少
        receive_amount : int,
        //多少人进行了投注
        put_count      : int,
        //多少人领取了奖金
        receive_count  : int,
        //最终产生的结果
        result         : int,
        //当前属于什么进度
        progress       : int,
        //预测的类型
        market_type    : int}


    /**
     * 预测的答案
     * - content: 预测答案的内容
     * - accounts: 已经投注的用户
     */
    record answer = {
        //答案的内容
        content  : string,
        //选择答案的次数
        count    : int}


    stateful entrypoint
        init : (config) => state
        init (config) =
            let owner                     = Call.caller
            { markets                     = {},
              markets_start               = {},
              markets_wait                = {},
              markets_over                = {},
              markets_record              = {},
              user_markets_record         = {},
              user_markets_receive_record = {},
              oracle_market               = {},
              oracle_market_count         = {},
              oracle_market_record        = {},
              owner                       = Call.caller,
              aggregator_user             = {},
              config                      = config}


    /**
     * 发布一个预测，只有聚合器用户才可以发布 status=(0) 的预测
     * - content: 主题
     * - source_url: 获取结果的地址
     * - min_amount: 最小支付数量
     * - over_time: 结束时间戳，从当前时间开始相加
     * - answers: 答案结果
     */
    stateful entrypoint
        add_market : (string,string,int,int,list(answer)) => market
        add_market (content,source_url,min_amount,over_height,answers) =
            //最低结束时间也要大于配置中的时间，比如大于当前时间1天和小于30天
            require((over_height - Chain.block_height) >= state.config.market_min_height, "OVER TIME MORE THAN MIN REQUIRED")
            require((over_height - Chain.block_height) =< state.config.market_max_height ,"OVER TIME MORE THAN MAX REQUIRED")
            //生成预测ID
            let market_id = generate_market_id()
            //检测是否有重复的id
            restrict_repeat_market(Call.caller,market_id)
            //验证答案的次数不等于默认状态抛出错误
            List.foreach(answers, (item) => require(item.count == 0 ,"ANSWER COUNT ERROR"))
            //构建主题
            let market = {
                market_id      = market_id,
                owner          = Call.caller,
                content        = content,
                source_url     = source_url,
                answers        = answers,
                create_height  = Chain.block_height,
                create_time    = Chain.timestamp,
                over_height    = over_height,
                min_amount     = min_amount,
                total_amount   = 0,
                receive_amount = 0,
                put_count      = 0,
                receive_count  = 0,
                result         = -1,
                progress       = 0,
                market_type    = get_market_type()}
            put(state {markets[Call.caller = {}][market_id] = market})
            put(state {markets_start[Call.caller = {}][market_id] = market})
            market



    /**
     * 用户提交问题
     * - address: 发布的用户
     * - hash: 预测id
     * - int: 第几个答案
     */
    payable stateful entrypoint
        submit_answer : (address,hash,int) => bool
        submit_answer (market_address,market_id,answer_index) =
            //获取预测
            let market = get_market(market_address,market_id)
            //如果预测结束时间小于当前时间，提示错误
            require(market.over_height > Chain.block_height,"MARKET TIME OUT")
            //如果当前支付数量小于预测规定的金额，提示错误
            require(Call.value == market.min_amount,"MARKET AMOUNT LOW OUT")
            //如果当前的进度不是 START状态，提示错误
            require(market.progress == 0,"MARKET PROGRESS IS NOT START")
            //如果当前用户已经参与过提问的，提示错误
            require(!is_user_markets_record(market_address,market_id),"USER MARKETS REPEAT")
            //获取要提交的答案
            let answer = get_market_answer(market_address,market_id,answer_index)
            //构建新的答案对象，并将已投注次数+1操作
            let new_answer  = {
                content = answer.content,
                count = answer.count + 1}
            //将旧的答案对象替换为新的
            let new_answers = List.replace_at(answer_index, new_answer, state.markets[market_address][market_id].answers)
            put(state {markets[market_address][market_id].answers = new_answers})
            //更新保存当前投注的总额
            put(state {markets[market_address][market_id].total_amount @n = n + Call.value})
            //更新投注的次数
            put(state {markets[market_address][market_id].put_count @n = n + 1})
            //记录当前预测已经投票
            put(state {user_markets_record[market_address = {}][market_id  = {}][Call.caller] = answer_index})
            //更新进行中的预测为最新状态
            put(state {markets_start[market_address = {}][market_id] = state.markets[market_address][market_id]})

            let market_rocord = {market_id = market_id,market_address = market_address}

            let records = get_market_records(Call.caller)

            if(List.length(records) >= state.config.record_max_count)
                let market_records = List.drop(List.length(records), records)
                let market_records = List.insert_at(0, market_rocord, market_records)
                put(state{ markets_record[Call.caller] = market_records})
            else
                let market_records = List.insert_at(0, market_rocord, records)
                put(state{ markets_record[Call.caller] = market_records})

            Chain.event(SubmitAnswer(market_address,market_id,answer_index))
            true


    /**
     * 更新预测到下一步，更改完后的状态用于获取场外结果，
     * 同时也插入等待中的预测，便于UI展示
     * - address: 发布的用户
     * - hash: 预测id
     */
    stateful entrypoint
        update_market_progress_to_wait : (address,hash)=>bool
        update_market_progress_to_wait (market_address,market_id) =
            //获取当前预测
            let market = get_market(market_address,market_id)
            //如果没有到达预测的结束时间，提示错误
            require(market.over_height < Chain.block_height,"MARKET TIME NOT OUT")
            //如果如果状态不是需要预言机的结果，提示错误
            require(market.market_type  == 1 ,"MARKET TYPE ERROR")
            //如果进度 不是 START状态，提示错误
            require(market.progress == 0,"MARKET PROGRESS IS NOT START")
            //require(is_aggregator_user(),"AGGREGATOR ERROR")
            //将预测状态更改为等待结果中
            put(state {markets[market_address][market_id].progress = 1})

            //删除进行中的预测，因为已经进入等待状态了
            put(state {markets_start[market_address] = Map.delete(market_id,state.markets_start[market_address])})
            //将预测添加进入等待结果的数据中
            put(state {markets_wait[market_address = {}][market_id] = state.markets[market_address][market_id]})


            put(state {oracle_market[market.market_id] = []})
            true



    /**
     * 收集数据，提供结果
     */
    stateful entrypoint
        provide_answer : (address,hash,int) =>bool
        provide_answer (market_address,market_id,market_index) =
            //获取当前的预测
            let market = get_market(market_address,market_id)
            //如果提供的结果大于了答案的总数，提示错误
            require(market_index < List.length(market.answers),"INDEX OUT ERROR")
            //如果提供的结果是负数提示错误
            require(market_index >= 0, "INDEX OUT ERROR 0")
            //如果如果状态不是需要预言机的结果，提示错误
            require(market.market_type  == 1 ,"MARKET TYPE ERROR")
            //如果不是有权限的人提供结果，提示错误
            require(is_aggregator_user(),"AGGREGATOR ERROR")
            //如果当前的进度不是等待结果 WAIT 状态，提示错误
            require(market.progress == 1,"MARKET PROGRESS IS NOT WAIT")
            //如果当前用于已经对这个预测提供过结果，提示错误
            require(!is_oracle_market_record(market_id),"PROVIDE COUNT MARE")
            //插入提供的结果数据
            let provide_data = List.insert_at(0,market_index,state.oracle_market[market_id])
            //保存提供的结果
            put(state{oracle_market[market_id] = provide_data})
            //保存当前用户提供预测的结果记录
            put(state{oracle_market_record[market_id = {}][Call.caller] = market_index})
            //保存预测结果数据次数
            put(state{oracle_market_count[market_id = 0] @ n = n + 1})
            true


   /**
     * 更新预测到下一步，更改完后的状态用结束状态，领取奖金，
     * 同时也插入等待中的预测，便于UI展示
     * - address: 发布的用户
     * - hash: 预测id
     */
    stateful entrypoint
        update_market_progress_to_over : (address,hash)=>bool
        update_market_progress_to_over (market_address,market_id) =
            //获取当前预测
            let market = get_market(market_address,market_id)
            //如果没有到达预测的结束时间，提示错误
            require(market.over_height < Chain.block_height,"MARKET TIME NOT OUT")
            //如果如果状态不是需要预言机的结果，提示错误
            require(market.market_type  == 1 ,"MARKET TYPE ERROR")
            //如果进度 不是 WAIT状态，提示错误
            require(market.progress == 1,"MARKET PROGRESS IS NOT START")
            //如果提供者提供的数据不足以达到设置的标准，提示错误
            require(get_oracle_market_provide_count(market_id) >= state.config.oracle_trigger_count,"MARKET PROVIDE COUNT LOW")

            //更新状态到已结束状态
            put(state {markets[market_address][market_id].progress = 2})
            //计算哪个投票最多，然后设置最终结果
            let reward_num = most_of(state.oracle_market[market_id])
            //设置最终领奖结果
            put(state {markets[market_address][market_id].result = reward_num})

            //删除进行中的预测，因为已经进入等待状态了
            put(state {markets_wait[market_address] = Map.delete(market_id,state.markets_wait[market_address])})
            //将预测添加进入等待结果的数据中
            put(state {markets_over[market_address = {}][market_id] = state.markets[market_address][market_id]})

            true




    /**
     * 私有预测更新到下一步，更改完后的状态用结束状态，领取奖金，
     * 同时也插入等待中的预测，便于UI展示
     * - address: 发布的用户
     * - hash: 预测id
     */
    stateful entrypoint
        private_update_market_progress_to_over : (address,hash,int)=>bool
        private_update_market_progress_to_over (market_address,market_id,result_index) =
            //获取当前预测
            let market = get_market(market_address,market_id)
            //如果不是发布者本人调用方法，提示错误
            require(market.owner == Call.caller,"MARKET TIME NOT OUT")
            //如果提供的结果大于了答案的总数，提示错误
            require(result_index < List.length(market.answers),"INDEX OUT ERROR")
            //如果没有到达预测的结束时间，提示错误
            require(market.over_height < Chain.block_height,"MARKET TIME NOT OUT")
            //如果如果状态不是需要预言机的结果，提示错误
            require(market.market_type  == 1 ,"MARKET TYPE ERROR")
            //如果进度 不是 START状态，提示错误
            require(market.progress == 0,"MARKET PROGRESS IS NOT START")
            //如果提供者提供的数据不足以达到设置的标准，提示错误
            put(state {markets[market_address][market_id].progress = 2})
            //计算哪个投票最多，然后设置最终结果
            put(state {markets[market_address][market_id].result = result_index})
            true



    /**
     * 领取奖金，
     */
    stateful entrypoint
        receive_reward : (address,hash)=>int
        receive_reward (market_address,market_id) =
            //获取当前预测
            let market = get_market(market_address,market_id)
            //如果进度 不是 OVER状态，提示错误
            require(market.progress == 2,"MARKET OVER IS NOT START")
            //如果当前用户已经参与过提问的，提示错误
            require(!is_user_markets_receive_record(market_address,market_id),"USER MARKETS REPEAT")
            //如果当前用户没有参与过提问的，提示错误
            require(is_user_markets_record(market_address,market_id),"USER RECORD MARKETS ERROR")
            //如果当前用户投票和最终结果不对，提示错误
            require(market.result == get_user_markets_record_result(market_address,market_id),"USER RECORD MARKETS RESULT ERROR")
            // //获取正确的答案
            let answer = get_market_answer(market_address,market_id,market.result)
            // //计算应该发放的金额
            let amount = market.total_amount / answer.count
            // 记录当前预测已经领过奖
            put(state {user_markets_receive_record[market_address = {}][market_id  = {}][Call.caller] = amount})

            //设置已经领取的了多少数量
            put(state {markets[market_address][market_id].receive_amount  @ n = n + amount})
            put(state {markets[market_address][market_id].receive_count  @ n = n + 1})
            put(state {markets_over[market_address][market_id].receive_amount  @ n = n + amount})
            put(state {markets_over[market_address][market_id].receive_count  @ n = n + 1})
            //提取奖金
            Chain.spend(Call.caller,amount)

            Chain.event(ReceiveReward(Call.caller ,amount, market.total_amount))

            amount




    /**
     * 获取预测已经有几个人提供了结果
     */
    entrypoint
        get_oracle_market_provide_count : (hash) =>int
        get_oracle_market_provide_count (market_id) =
            state.oracle_market_count[market_id]




    /**
     * add调用者是否属于可发布聚合器账户列表中
     */
    stateful entrypoint
        add_aggregator_user : (address,string) => bool
        add_aggregator_user(account,name) =
            protocol_restrict()
            put(state {aggregator_user[account]= name})
            true


    /**
     * 获取公共具体预测
     * - market_address: 发布者的地址
     * - market_id: 发布者的具体预测
     */
    entrypoint
        get_market_public : (address) => map(hash, market)
        get_market_public(market_address) =
            switch(Map.lookup(market_address, state.markets))
                Some(market_map) => market_map
                None => abort("DNT FIND THE MARKET")

    /**
     * 获取具体预测
     * - market_address: 发布者的地址
     * - market_id: 发布者的具体预测
     */
    entrypoint
        get_market : (address,hash) => market
        get_market(market_address,market_id) =
            switch(Map.lookup(market_address, state.markets))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(market) =>  market
                        None => abort("DNT FIND THE MARKET")
                None => abort("DNT FIND THE MARKET")


    /**
     * 当前用户是否领取过奖金
     */
    entrypoint
        is_user_markets_receive_record : (address,hash) => bool
        is_user_markets_receive_record(market_address,market_id) =
            switch(Map.lookup(market_address, state.user_markets_receive_record))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(account) =>
                            switch(Map.lookup(Call.caller, account))
                                Some(account) =>  true
                                None => false
                        None => false
                None => false

    /**
     * 当前用户是否参与过预测
     */
    entrypoint
        is_user_markets_record : (address,hash) => bool
        is_user_markets_record(market_address,market_id) =
            switch(Map.lookup(market_address, state.user_markets_record))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(account) =>
                            switch(Map.lookup(Call.caller, account))
                                Some(account) =>  true
                                None => false
                        None => false
                None => false


    /**
     * 获取当前用于预测投票的结果
     */
    entrypoint
        get_user_markets_record_result : (address,hash) => int
        get_user_markets_record_result(market_address,market_id) =
            switch(Map.lookup(market_address, state.user_markets_record))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(account) =>
                            switch(Map.lookup(Call.caller, account))
                                Some(result) =>  result
                                None => -1
                        None => -1
                None => -1

    /**
     * 获取预测下面所有人参与的预测结果
     */
    entrypoint
        get_user_markets_record : (address,hash) => map(address,int)
        get_user_markets_record(market_address,market_id) =
            switch(Map.lookup(market_address, state.user_markets_record))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(account) => account
                        None => {}
                None => {}

    /**
     * 获取进行中的预测
     */
    entrypoint
        get_markets_start : (address) => map(hash, market)
        get_markets_start(market_address) =
            switch(Map.lookup(market_address, state.markets_start))
                Some(market_map) =>
                    market_map
                None => {}

    /**
     * 获取等待结果的预测
     */
    entrypoint
        get_markets_wait : (address) => map(hash, market)
        get_markets_wait(market_address) =
            switch(Map.lookup(market_address, state.markets_wait))
                Some(market_map) =>
                    market_map
                None => {}

    /**
     * 获取等待结果的预测
     */
    entrypoint
        get_markets_over : (address) => map(hash, market)
        get_markets_over(market_address) =
            switch(Map.lookup(market_address, state.markets_over))
                Some(market_map) =>
                    market_map
                None => {}


    /**
     * 管理员是否投票过
     */
    entrypoint
        is_oracle_market_record : (hash) => bool
        is_oracle_market_record(market_id) =
            switch(Map.lookup(market_id, state.oracle_market_record))
                Some(market_record_user) =>
                    switch(Map.lookup(Call.caller, market_record_user))
                        Some(result) =>  true
                        None => false
                None => false




    /**
     * 检测是否有重复的预测
     * - market_address: 发布者的地址
     * - market_id: 发布者的具体预测
     */
    function
        restrict_repeat_market : (address,hash) => bool
        restrict_repeat_market(market_address,market_id) =
            switch(Map.lookup(market_address, state.markets))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(market) => abort("REPEAT MARKET")
                        None => true
                None => true
    /**
     * 当前调用者是否属于可发布聚合器账户列表中
     */
    function
        is_aggregator_user : () => bool
        is_aggregator_user() =
            switch(Map.lookup(Call.caller, state.aggregator_user))
                Some(user) => true
                None => false

    /**
     * 当前调用者是否属于可发布聚合器账户列表中
     */
    function
        get_market_type : () => int
        get_market_type() =
            if(state.owner == Call.caller) 1
            else 0
    

    /**
     * 获取交易记录数据
     */
    function
        get_market_records : (address) => list(market_rocord)
        get_market_records(addr) =
            switch(Map.lookup(addr, state.markets_record))
                Some(records) => records
                None => []

    /**
     * 获取具体预测的答案
     * - market_address: 发布者的地址
     * - market_id: 发布者的具体预测
     * - answer_index: 答案中的第几个答案
     */
    function
        get_market_answer : (address,hash,int) => answer
        get_market_answer(market_address,market_id,answer_index) =
            switch(Map.lookup(market_address, state.markets))
                Some(market_map) =>
                    switch(Map.lookup(market_id, market_map))
                        Some(market) =>  List.get(answer_index, market.answers)
                        None => abort("DNT FIND THE ANSWER")
                None => abort("DNT FIND THE ANSWER")
    /**
     * 当前调用者是否是合约归属者
     */
    function
        protocol_restrict : () => unit
        protocol_restrict() =
            require(Call.caller == state.owner, "PROTOCOL_RESTRICTED")

    /**
     * 生成预测ID
     */
    function
        generate_market_id : () => hash
        generate_market_id() =
            Crypto.sha256(String.concat(Address.to_str(Call.caller), Int.to_str(Chain.timestamp)))


    //获取最多投票的结果
    entrypoint most_of((x :: xs) : list('a )) : 'a  =
        most_of_(x, {[x] = 1}, xs)

    function most_of_(most : 'a, counts : map('a, int), xs : list('a)) =
        switch(xs)
            [] => (most)
            (x :: xs) =>
                let counts' = counts{ [x = 0] @ n = n + 1 }
                if (counts'[x] >= counts'[most])
                    most_of_(x, counts', xs)
                else
                    most_of_(most, counts', xs)

    entrypoint
        get_config:() => config
        get_config () =
            state.config
    
    entrypoint
        get_state:()=>state
        get_state () =
            state




















`
