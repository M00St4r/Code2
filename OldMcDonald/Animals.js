"use strict";
var OldMcDoof;
(function (OldMcDoof) {
    class Animal {
        constructor(_type, _food, _noise, _hunger) {
            this.set(_type, _food, _noise, _hunger);
        }
        set(_type, _food, _noise, _hunger) {
            this.type = _type;
            this.food = _food;
            this.noise = _noise;
            this.hunger = _hunger;
        }
        eat(_food) {
            if (_food[this.food] > 0) {
                _food[this.food] -= this.hunger;
            }
            return _food;
        }
        alert() {
            return this.noise;
        }
    }
    OldMcDoof.Animal = Animal;
})(OldMcDoof || (OldMcDoof = {}));
