/**
 * 
 * @param {*} width px
 * @param {*} height px
 * @param {*} text string (optional)
 * @param {*} color name, hex, hsl (optional)
 * @returns 
 */
function pimgenGenerate(width, height, text, color) {
    // Creates canvas html element
    const element = document.createElement('canvas');
    const context = element.getContext('2d');
    // Define canvas dimensions
    element.width = width;
    element.height = height;
    // Fill in the background
    if(!color) {
        context.fillStyle = '#444444';
    } else {
        context.fillStyle = color;
    }
    context.fillRect(0, 0, element.width, element.height);
    // Place the text
    context.font = '400 1.75rem system-ui';
    context.fillStyle = '#cccccc';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    if(!text) {
        context?.fillText(
            `${element.width}x${element.height}`,
            element.width / 2,
            element.height / 2
        );
    } else {
        context?.fillText(
            `${text}`,
            element.width / 2,
            element.height / 2
        );
    }
    // Set img from canvas
    const imgFromCanvas = element.toDataURL('image/png', 1.0);
    // return element;
    return imgFromCanvas;
}
export default { pimgenGenerate }
// module.exports = pimgenGenerate