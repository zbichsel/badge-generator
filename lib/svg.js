class Svg {
    constructor() {
        this.textString = '';
        this.shapeType = '';
    }
    render() {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="https://www.w3.org/2000/svg">
        
        ${this.shapeType}
        ${this.textString}
    </svg>`
    }

    setTextString(text, color) {
        this.textString = `<text x="150" y="115" font-size="45" text-anchor="middle" fill="${color}">${text}</text>`
        return this.textString;
    }
    setShapeType(shape) {
        this.shapeType = shape.render();
        return this.shapeType;
    }
};

module.exports = Svg;