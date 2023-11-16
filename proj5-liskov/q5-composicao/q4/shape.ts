interface Drawable {
    draw(): void;
}

class Shape implements Drawable {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle implements Drawable {
    private shape: Drawable;

    constructor() {
        this.shape = new Shape();
    }

    draw() {
        console.log("Drawing a circle");
        this.shape.draw();
    }
}

class Square implements Drawable {
    private shape: Drawable;

    constructor() {
        this.shape = new Shape();
    }

    draw() {
        console.log("Drawing a square");
        this.shape.draw();
    }
}

class ColoredSquare implements Drawable {
    private square: Drawable;

    constructor() {
        this.square = new Square();
    }

    draw() {
        console.log("Drawing a colored square");
        this.square.draw();
    }
}


class ThreeDimensionalShape implements Drawable {
    draw() {
        console.log("Drawing a 3D shape");
    }
}

class Sphere implements Drawable {
    private threeDShape: Drawable;

    constructor() {
        this.threeDShape = new ThreeDimensionalShape();
    }

    draw() {
        console.log("Drawing a sphere");
        this.threeDShape.draw();
    }
}

class Cube implements Drawable {
    private threeDShape: Drawable;

    constructor() {
        this.threeDShape = new ThreeDimensionalShape();
    }

    draw() {
        console.log("Drawing a cube");
        this.threeDShape.draw();
    }
}

const sphere = new Sphere();
sphere.draw(); 
const cube = new Cube();
cube.draw();    


// ao inves de implementar uma classe pai, apenas adicionamos uma atributo ao que seira a classe filha