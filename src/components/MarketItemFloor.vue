<template>
    <div class="item-footer">
        <div class="item-footer-pledge">
            <span class="item-content-source-title">Total pledge：</span>
            <span class="card-item-content" style="color: #9D9D9D;"> {{ toAe }} (AE)</span>
        </div>
        <div v-if="!isOver" class="item-footer-time-group">
            <div class="item-footer-time-group-left-group">
                <svg-icon class="icon item-footer-time-group-left-group-icon" name='icon_dice'></svg-icon>
                <span class="item-footer-time-group-left-group-text">Start Prediction</span>
            </div>
            <div class="item-footer-time-group-right-group">
                <span class="item-footer-time-group-right-group-text">{{ toAe }} AE/Amount</span>
                <svg-icon class="icon item-footer-time-group-right-group-icon" name='icon_ae'></svg-icon>
            </div>
        </div>

        <div v-if="isOver" :class="state">
            <div class="item-footer-time-group-left-group-state">
                <svg-icon class="icon item-footer-time-group-left-group-icon-state" :name='state_icon'></svg-icon>
                <span class="item-footer-time-group-left-group-text-state">STATE:</span>
            </div>
            <div class="item-footer-time-group-right-group-state">
                <span class="item-footer-time-group-right-group-text-state">{{ state_text }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MarketItemFloor',
    props: {
        isOver: {},
        model: {},
        toAe: {},
        state: {},
        state_text: {},
        state_icon: {},

    },

    methods: {
    },


}
</script>
<style lang="scss" scoped>


.icon {
  width: 18px;
  fill: #ffffff;
  height: 18px;
}


.item-content-source-title {
  font-size: 14px;
  color: #9D9D9D;
}

.card-item-content {
  font-size: 14px;
  color: #fff;
}


.item-footer {
  color: #000000;
  background: #000000;
  border-radius: 5px;
  height: 40px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px
}

.item-footer-pledge {
  text-align: left;
  padding-left: 15px;
  padding-right: 15px;
  float: left;
  display: inline-block;
  line-height: 40px
}

.item-footer-time-group {
  text-align: left;
  float: right;
  display: flex;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px
}

.item-footer-time-group-left-group {
  background: rgb(49, 91, 247);
  height: 24px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-left-group-icon {
  display: inline-block;
  margin: 3px 3px 3px 5px;
  float: left
}

.item-footer-time-group-left-group-text {
  font-size: 12px;
  display: inline;
  padding-left: 2px;
  padding-right: 10px;
  height: 24px
}

.item-footer-time-group-state-progress {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(247, 191, 49);
}

.item-footer-time-group-state-failure {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(160, 164, 179);
}

.item-footer-time-group-state-success-no {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(49, 91, 247);
}

.item-footer-time-group-state-success-yes {
  text-align: left;
  float: right;
  display: flex;
  background: rgba(247, 41, 110, 0);
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(88, 160, 0);
}

.item-footer-time-group-right-group {
  background: rgba(0, 255, 157, 0);
  height: 26px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-right-group-text {
  font-size: 12px;
  display: inline;
  padding-left: 5px;
  padding-right: 0;
  height: 24px
}

.item-footer-time-group-right-group-icon {
  display: inline-block;
  margin: 3px 10px 3px 5px;
  float: right;

  fill: #F7296E;
  border-radius: 50px
}

.item-footer-time-group-state {
  text-align: left;
  float: right;
  display: flex;
  height: 30px;
  border-radius: 5px;
  margin-top: 5px;
  margin-right: 10px;
  background: rgb(49, 91, 247);
}

.item-footer-time-group-left-group-state {
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-left-group-icon-state {
  display: inline-block;
  margin: 6px 3px 3px 10px;
  float: left
}

.item-footer-time-group-left-group-text-state {
  font-size: 12px;
  display: inline;
  padding-left: 2px;
  padding-right: 2px;
  font-weight: bold;
  height: 24px
}

.item-footer-time-group-right-group-state {
  background: rgba(0, 255, 157, 0);
  height: 26px;
  margin: 2px;
  line-height: 26px;
  color: #ffffff;
  border-radius: 3px;
  display: flex;
}

.item-footer-time-group-right-group-text-state {
  font-size: 12px;
  display: inline;
  padding-left: 0px;
  padding-right: 10px;
  height: 24px
}

</style>
