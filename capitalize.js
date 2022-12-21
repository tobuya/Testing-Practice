const capitalize = string => {
    return (typeof(string) !== 'string' || string.length === 0) ? 'Error! Not a string.' : string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;