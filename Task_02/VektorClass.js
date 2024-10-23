"use strict";
var VectorClass;
(function (VectorClass) {
    class Vector {
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    let v1 = new Vector();
    v1.scale(2);
    console.log(v1);
})(VectorClass || (VectorClass = {}));
