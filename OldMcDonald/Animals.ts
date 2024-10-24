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
        // if (storage >= this.food) {
        //     storage -= this.food;
        //     console.log(storage);
        // } else {
        //     alert("no more food left!!!");
        // }
    }

    alert(): void {
        console.log(this.noise);
    }
}