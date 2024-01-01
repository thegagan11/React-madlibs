function addCommas(number) {
    let numberStr = number.toString();

    const isNegative = number < 0;
    if (isNegative) {
        numberStr = numberStr.substring(1);
    }

    const parts = numberStr.split('.');
    let integerPart = parts[0];
    const decimalPart = parts[1];
}
    integerPart = integerPart
    .split('')
    .reverse()
    .join('')
    .replace(/(\d{3})(?=\d)/g, '$1,')
    .split(',')
    .reverse()
    .join(',');


    let result = integerPart;
    if (decimalPart !== undefined) {
        result += '.' + decimalPart;
    }

    if (isNegative) {
        result = '-' + result;
        return result;
    }
module.exports = addCommas;