const reverseString = string => {
    let splitString = string.split('');
    let reversedArray = splitString.reverse();
    let joinString = reversedArray.join('');
    return joinString;
}

module.exports = reverseString;