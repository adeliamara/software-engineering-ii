class Dog implements Soundable {
    private animal: Soundable;

    constructor(animal: Soundable) {
        this.animal = animal;
    }

    makeSound() {
        console.log("Woof! Woof!");
        this.animal.makeSound();
    }

    fetch() {
        console.log("Fetching");
    }
}

class Bird implements Soundable {
    private animal: Soundable;

    constructor(animal: Soundable) {
        this.animal = animal;
    }

    makeSound() {
        console.log("Tweet! Tweet!");
        this.animal.makeSound();
    }

    fly() {
        console.log("Flying");
    }
}

// Uso
const genericAnimal = new Animal();
const dog = new Dog(genericAnimal);
const bird = new Bird(genericAnimal);
