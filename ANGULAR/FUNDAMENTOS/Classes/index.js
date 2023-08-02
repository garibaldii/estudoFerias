"use strict";
class Character {
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    //o constructor é um molde que serve para criar objetos.
    // 
    attack() {
        console.log(`Attack with ${this.strenght} points`);
    }
}
const warrior = new Character('john', 33, 23);
warrior.attack();
