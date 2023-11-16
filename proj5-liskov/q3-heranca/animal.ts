class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log("Som generico");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Au Au");
    }

    fetch() {
        console.log(`${this.name} encontrado.`);
    }
}

class Bird extends Animal {
    makeSound() {
        console.log("piu!");
    }

    fly() {
        console.log(`${this.name} está voando.`);
    }
}

const myDog = new Dog("Buddy");
myDog.makeSound(); 
myDog.fetch();     

const myBird = new Bird("Robin");
myBird.makeSound(); 
myBird.fly();       
