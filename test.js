(function () {
'use strict';

var Unibabel = window.Unibabel;

//UTF-8
var pass = true;
var str = "I ½ ♥ 𩶘";
var buf = Unibabel.utf8ToBuffer(str);
var base64 = Unibabel.bufferToBase64(buf);
var hex = Unibabel.bufferToHex(buf);

function buffersAreEqual(buf1, buf2) {
  if (buf1.length !== buf2.length) {
    return false;
  }
  return Array.prototype.every.call(buf1, function (byte, i) {
    if (byte === buf2[i]) {
      return true;
    }
  });
}

console.log('buffer', buf);
// TODO compare buffer
var reference = [ 73, 32, 194, 189, 32, 226, 153, 165, 32, 240, 169, 182, 152 ];
if (!buffersAreEqual(buf, reference)) {
  pass = false;
  console.log('[FAIL] utf8 -> buffer', buf);
}
if (base64 !== "SSDCvSDimaUg8Km2mA==") {
  pass = false;
  console.log('[FAIL] utf8 -> base64', base64);
}
if (hex !== "4920c2bd20e299a520f0a9b698") {
  pass = false;
  console.log('[FAIL] utf8 -> hex', hex);
}


// binary
var bytes = [ 255, 226, 26, 243, 134, 206, 147, 107 ];
buf = new Uint8Array(bytes);
str = Unibabel.bufferToBinaryString(buf);
base64 = Unibabel.bufferToBase64(buf);
hex = Unibabel.bufferToHex(buf);

// This can't be properly tested because binary strings can't be parsed
// if (str !== "ÿâóÎk") {
//   pass = false;
//   console.log('[FAIL] binary -> str', str);
// }
if ("/+Ia84bOk2s=" !== base64) {
  pass = false;
  console.log('[FAIL] binary -> base64', base64);
}
if (hex !== "ffe21af386ce936b") {
  pass = false;
  console.log('[FAIL] binary -> hex', hex);
}

if (pass) {
  console.log('[PASS] :-D');
}

}());
