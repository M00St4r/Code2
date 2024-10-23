namespace OldMcDoof {

    let Animals: Animal[] = [];

    class Animal {
        type: string;
        food: string;
        amount: number;
        noise: string;

        constructor(_type: string, _food: string, _amount: number, _noise: string) {
            this.set(_type, _food, _amount, _noise);
        }

        set(_type: string, _food: string, _amount: number, _noise: string) {
            this.type = _type;
            this.food = _food;
            this.amount = _amount;
            this.noise = _noise;
        }

        eat(_amount: number): void {
            this.amount -= _amount;
        }

        alert(): void {
            console.log(this.noise);
        }
    }

    let Cow = new Animal("cow", "wheat", 10, "moo");

    let Chicken = new Animal("chicken", "seeds", 10, "chirp");

    let Pig = new Animal("pig", "wheat", 10, "oink");


    Animals.push(Cow);
    Animals.push(Chicken);
    Animals.push(Pig);

    export function simulate(): void {
        for (let i = 0; i < Animals.length; i++) {
            Animals[i].alert();
            Animals[i].eat(1);
        }
    }

}