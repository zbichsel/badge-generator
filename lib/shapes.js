// Shapes.js file creates a parent class of Shapes which have 4 children classes including: Triangle, Circle, Square, and Rectangle



class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = color;
    }
};

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 10 260, 182 40, 182" fill="${this.color}" />`;
    }
};

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`;
    }
};

class Square extends Shapes {
    render() {
        return `<rect x="75" y="25" width="150" height="150" fill="${this.color}"/>`;
    }
};

class Rectangle extends Shapes {
    render() {
        return `<rect width="300" height="100" fill="${this.color}"/>`;
    }
};

module.exports = { Triangle, Circle, Square, Rectangle };