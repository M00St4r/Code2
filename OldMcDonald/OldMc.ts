namespace OldMcDoof {

    let Animals: Animal[] = [];
    let food: number[] = [25,25,25]; //crop, seeds, nuts

    let Cow = new Animal("cow", 0, "moo", 3);
    let Chicken = new Animal("chicken", 1, "chirp", 1);
    let Pig = new Animal("pig",2, "oink", 2);
    let Farmer = new Animal("farmer", 0, "OIII", 2);
    let Sheep = new Animal("sheep", 0, "bääähh", 3);

    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    Animals.push(Farmer);
    Animals.push(Sheep);

    export function simulate(_iterations: number): void {
        for (let j = 0; j < _iterations; j++) {
            console.log("days: " + j);

            for (let i = 0; i < Animals.length; i++) {
                console.log(Animals[i].alert());
                //Animals[i].eat(storage);
                console.log(food = Animals[i].eat(food));

            }
        }
    }

}