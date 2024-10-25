namespace OldMcDonald{
    class Animal{
        name: string;
        type: string;
        food: string;
        apetite: number;
        sound: string;
    
        constructor(_name: string, _type: string, _food: string, _apetite: number, _sound: string){

            this.name = _name;
            this.type = _type;
            this.food = _food;
            this.apetite = _apetite;
            this.sound = _sound;

        }

        eat(): void{

        }

        sing(): void{
        
        }

    }

    class Food{
        type: string;
        ammount: number;

        constructor(_type: string, _ammount: number){
            this.type = _type;
            this.ammount = _ammount;
        }

        consumption(): string{
            return "iauef"
        }
    }
}