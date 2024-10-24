namespace OldMcDoof {

    import { Animal } from "./Animals";

    let Animals: Animal[] = [];
    let storage: number = 100;

    // class Animal {
    //     type: string;
    //     food: number;
    //     noise: string;

    //     constructor(_type: string, _food: number, _noise: string) {
    //         this.set(_type, _food, _noise);
    //     }

    //     set(_type: string, _food: number, _noise: string) {
    //         this.type = _type;
    //         this.food = _food;
    //         this.noise = _noise;
    //     }

    //     eat(): void {
    //         if (storage >= this.food) {
    //             storage -= this.food;
    //             console.log(storage);
    //         } else {
    //             alert("no more food left!!!");
    //         }
    //     }

    //     alert(): void {
    //         console.log(this.noise);
    //     }
    // }

    let Cow = new Animal("cow", 3, "moo");
    let Chicken = new Animal("chicken", 1, "chirp");
    let Pig = new Animal("pig", 4, "oink");
    let Farmer = new Animal("farmer", 10, "OIII");
    let Sheep = new Animal("sheep", 2, "bääähh");


    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);
    Animals.push(Farmer);
    Animals.push(Sheep);

    export function simulate(_iterations: number): void {
        for (let j = 0; j < _iterations; j++) {
            console.log("days: " + j);
            for (let i = 0; i < Animals.length; i++) {
                Animals[i].alert();
                Animals[i].eat();
            }
        }
    }

}