const stringLength = string => {
    const charLength = [...string].length;
    const output = (charLength >= 1 && charLength <= 10) ? charLength :  'Error';
    return output;
}

module.exports = stringLength;