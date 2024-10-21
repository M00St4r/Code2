var LinterTest;
(function (LinterTest) {
    var KEY;
    (function (KEY) {
        KEY[KEY["POS"] = 1] = "POS";
        KEY[KEY["NEG"] = -1] = "NEG";
    })(KEY || (KEY = {}));
    var info = { text: "G`udetmvhsgBncd1 ", KEY: KEY.POS };
    console.log(deCrypt(info.text, info.KEY));
    function deCrypt(_text, _key) {
        var result = "";
        for (var i = 0; i < _text.length; i++) {
            result += String.fromCharCode(_text.charCodeAt(i) + _key);
        }
        return result;
    }
})(LinterTest || (LinterTest = {}));
