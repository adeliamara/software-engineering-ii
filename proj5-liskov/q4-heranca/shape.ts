class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Square extends Shape {
    draw() {
        console.log("Drawing a square");
    }
}

class ColoredSquare extends Square {
    draw() {
        console.log("Drawing a colored square");
    }
}


// Neste exemplo, temos uma hierarquia de classes que representam formas geométricas. 
//No entanto, suponha que, no futuro, desejemos adicionar formas tridimensionais à hierarquia. 
//Se decidirmos criar uma classe Cube derivada de Square para representar cubos,
// podemos perceber que não é uma extensão natural. Um cubo não é realmente um tipo de quadrado.
// Essa hierarquia pode comprometer futuras expansões, pois a estrutura de herança não reflete adequadamente 
//a relação entre as novas classes. Além disso, se precisarmos adicionar uma propriedade como cor às formas tridimensionais, poderíamos acabar com uma hierarquia ainda mais complexa e difícil de manter.