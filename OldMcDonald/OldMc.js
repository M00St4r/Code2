var OldMcDoof;
(function (OldMcDoof) {
    var Animals = [];
    var food = [25, 25, 25]; //crop, seeds, nuts
    var Cow = new Animal("cow", 0, "moo", 3);
    var Chicken = new Animal("chicken", 1, "chirp", 1);
    var Pig = new Animal("pig", 2, "oink", 2);
    var Farmer = new Animal("farmer", 0, "OIII", 2);
    var Sheep = new Animal("sheep", 0, "bääähh", 3);
    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    Animals.push(Farmer);
    Animals.push(Sheep);
    function simulate(_iterations) {
        for (var j = 0; j < _iterations; j++) {
            console.log("days: " + j);
            for (var i = 0; i < Animals.length; i++) {
                console.log(Animals[i].alert());
                //Animals[i].eat(storage);
                console.log(food = Animals[i].eat(food));
            }
        }
    }
    OldMcDoof.simulate = simulate;
})(OldMcDoof || (OldMcDoof = {}));
