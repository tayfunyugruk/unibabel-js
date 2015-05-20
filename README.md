utf8-typed
==========

Base64, TypedArrays, and UTF-8 / Unicode conversions in Browser (and Node) JavaScript

This is based wholly on the work by good folks at the MDN.
See <https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding>

API
===

```javascript
// TypedArray <--> UTF8
var uint8Array = Unibabel.strToUtf8Arr(str);
var str = Unibabel.utf8ArrToStr(uint8Array);

// TypedArray <--> Base64
var base64 = Unibabel.arrToBase64(uint8Array)
var uint8Array = Unibabel.base64ToArr(base64)
```

Examples
========

```javascript
// Base64

var myArray = Unibabel.base64ToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw=="); // "Base 64 \u2014 Mozilla Developer Network"
var myBuffer = Unibabel.base64ToArr("QmFzZSA2NCDigJQgTW96aWxsYSBEZXZlbG9wZXIgTmV0d29yaw==").buffer; // "Base 64 \u2014 Mozilla Developer Network"

console.log(myBuffer.byteLength);

// Crazy Unicode

var sMyInput = "I'm a ☢ ☃ that plays 𝄢 guitar and spea̧͈͖ks Ar̽̾̈́͒͑ ̶̧̨̱̹̭̯ͧ̾ͬC̷̙̲̝͖ͭ̏ͥͮ͟Oͮ͏̮̪̝͍M̲̖͊̒ͪͩͬ̚̚͜!";
var aMyUTF8Input = Unibabel.strToUtf8Arr(sMyInput);
var sMyBase64 = Unibabel.arrToBase64(aMyUTF8Input);

alert(sMyBase64);

var aMyUTF8Output = Unibabel.base64ToArr(sMyBase64);
var sMyOutput = Unibabel.utf8ArrToStr(aMyUTF8Output);

alert(sMyOutput);
```

License
=======

Mozilla has licensed this code in the Public Domain, which means that I am at liberty to re-license my copy
under the Apache 2, which is something that, general speaking, your legal department will feel more comfortable with.

See <https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses>
