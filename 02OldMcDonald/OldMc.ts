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

        alert(): string {
            return this.noise;
        }
    }

    // class Food {
    //     type: string;
    //     stock: number;
    //     hunger: number;

    //     constructor(_type: string, _stock: number, _hunger: number){
    //         this.type = _type;
    //         this.stock = _stock;
    //         this.hunger = _hunger;
    //     }
    // }

    let Animals: Animal[] = [];
    let food: number[] = [25,25,25]; //crop, seeds, nuts

    let Cow = new Animal("cow", 0, "Old", 3);
    let Chicken = new Animal("chicken", 1, "McDonald", 1);
    let Pig = new Animal("pig",2, "has", 2);
    let Farmer = new Animal("farmer", 0, "s", 2);
    let Sheep = new Animal("sheep", 0, "Farm", 3);

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
                console.log(food = Animals[i].eat(food));

            }
        }
    }

}