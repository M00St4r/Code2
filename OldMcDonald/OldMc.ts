namespace OldMcDoof {

    let Animals: Animal[] = [];
    let iterations: number = 0;
    let storage: number = 100;

    class Animal {
        type: string;
        food: number;
        noise: string;

        constructor(_type: string, _food: number, _noise: string) {
            this.set(_type, _food, _noise);
        }

        set(_type: string, _food: number, _noise: string) {
            this.type = _type;
            this.food = _food;
            this.noise = _noise;
        }

        eat(): void {
            this.food--;
        }

        alert(): void {
            console.log(this.noise);
        }
    }

    let Cow = new Animal("cow", 3, "moo");

    let Chicken = new Animal("chicken", 1, "chirp");

    let Pig = new Animal("pig", 4, "oink");


    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);

    export function simulate(_iterations: number): void {
        for (let j = 0; j < _iterations; j++) {
            for (let i = 0; i < Animals.length; i++) {
                Animals[i].alert();
                Animals[i].eat();
            }
        }
    }

}