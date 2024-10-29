namespace OldMcDoof {

    class Animal {
        
        type: string;
        food: number;
        hunger: number;
        noise: string;

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            this.type = _type;
            this.food = _food;
            this.noise = _noise;
            this.hunger = _hunger;
        }

        eat(_food: number[]): number[] {
            if (_food[this.food] > 0) {
                _food[this.food] -= this.hunger;
            }
            return _food;
        }

        alert(){
            console.log(this.noise);
        }

        doSpecialAction() {
            console.log(`${this.type} does a special action`)
        }
    }

    class Cow extends Animal {

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }

        doSpecialAction(){
            console.log(`${this.type} ruminates`);
        }
    }

    class Chicken extends Animal {

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }

        doSpecialAction(){
            console.log(`${this.type} lays an egg`);
        }
    }

    class Pig extends Animal {

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }

        doSpecialAction(){
            console.log(`${this.type} digs in the mud`);
        }
    }

    class Farmer extends Animal {

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }

        doSpecialAction(){
            console.log(`${this.type} smokes a cig`);
        }
    }

    class Sheep extends Animal {

        constructor(_type: string, _food: number, _noise: string, _hunger: number) {
            super(_type, _food, _noise, _hunger); // Call Animal's constructor
        }

        doSpecialAction(){
            console.log(`${this.type} jumps the fence`);
        }
    }

    let Animals: Animal[] = [];
    let food: number[] = [25,25,25]; //crop, seeds, nuts

    let cow = new Cow("cow", 0, "Old", 3);
    let chicken = new Chicken("chicken", 1, "McDonald", 1);
    let pig = new Pig("pig",2, "has", 2);
    let farmer = new Farmer("farmer", 0, "s", 2);
    let sheep = new Sheep("sheep", 0, "Farm", 3);

    Animals.push(cow);
    Animals.push(chicken);
    Animals.push(pig);
    Animals.push(farmer);
    Animals.push(sheep);

    export function simulate(_iterations: number): void {
        for (let j = 0; j < _iterations; j++) {
            console.log("days: " + j);

            for (let i = 0; i < Animals.length; i++) {
                Animals[i].alert();
                food = Animals[i].eat(food);
                Animals[i].doSpecialAction();
            }
        }
    }

}