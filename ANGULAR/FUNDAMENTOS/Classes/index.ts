class Character {
    name: String;
    strenght: Number;
    skill: Number;

    constructor(name:String, strenght:Number, skill: Number ){  
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }

    
    //o constructor é um molde que serve para criar objetos.
    // 

    attack(): void{
        console.log(`Attack with ${this.strenght} points`);
    }
    
}

const warrior = new Character('john', 33, 23)

warrior.attack()
