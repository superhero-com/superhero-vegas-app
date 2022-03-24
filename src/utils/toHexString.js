const toHexString = arr => Array.from(arr, i => i.toString(16).padStart(2, "0")).join("");
const fromHexString = hexString => new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));
export {toHexString,fromHexString}
