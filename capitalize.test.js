const capitalize = require('./capitalize');

test('the letter T in thomas to be capitalized', () => {
    expect(capitalize('thomas')).toBe('Thomas');
});
  
test('the parameter passed should be a string', () => {
    expect(capitalize(1018)).toBe('Error! Not a string.');
});