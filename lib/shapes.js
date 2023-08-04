// Shapes.js file creates a parent class of Shapes which have 4 children classes including: Triangle, Circle, Square, and Rectangle



class Shapes {
    constructor(color) {
        this.color = color;
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

class Rectangle extends Shapes {
    constructor(color) {
        super(color)
    }
    render() {
        return `<rect width="300" height="100" fill="${this.color}" />`;
    }
}

module.exports = { Triangle, Circle, Square, Rectangle };