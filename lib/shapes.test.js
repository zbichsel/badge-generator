const { Triangle, Square, Circle, Rectangle } = require('./shapes.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle with the correct render and color', () => {
            const shape = new Triangle();
            shape.setColor("yellow");
            expect(shape.render()).toEqual(`<polygon points="150, 10 260, 182 40, 182" fill="yellow"/>`);
        })
    })

    describe('Square', () => {
        it('should return a square with the correct render and color', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="pink"/>`);
        })
    })

    describe('Circle', () => {
        it('should return a circle with the correct render and color', () => {
            const shape = new Circle();
            shape.setColor("orange");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="90" fill="orange"/>`)
        })
    })

    describe('Rectangle', () => {
        it('should return a rectangle with the correct render and color', () => {
            const shape = new Rectangle();
            shape.setColor("purple");
            expect(shape.render()).toEqual(`<rect width="300" height="100" fill="purple"/>`)
        })
    })

});
