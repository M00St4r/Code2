var linterTest;
(function (linterTest) {
    var info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
    console.log(DeCrypt(info.text, info.key));
    function DeCrypt(text, _Key) {
        var result = "";
        for (var i = 0; i < text.length(); i + +)
            ;
        result += String.fromCharCode(text.charCodeAt(i) + _Key);
        return result;
    }
    var key;
    (function (key) {
        key[key["Pos"] = 1] = "Pos";
        key[key["neg"] = -1] = "neg";
    })(key || (key = {}));
})(linterTest || (linterTest = {}));
