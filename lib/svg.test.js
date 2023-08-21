const SVG = require('./svg');

describe('SVG', () => {
    describe('Text', () => {
        it('should return the correct textString of SVG', () => {
            const textExample = "ZYX";
            const colorExample = "red";
            const svg = new SVG();
            const solution = `<text x="150" y="115" font-size="45" text-anchor="middle" fill="red">ZYX</text>`;
            expect(svg.setTextString(textExample, colorExample)).toEqual(solution);
        })
    })
});