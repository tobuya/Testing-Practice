const stringLength = require('./stringLength');

test('length of word to be 4', () => {
    expect(stringLength('word')).toBe(4);
});

test('length of repositories to throw an error', () => {
    expect(stringLength('repositories')).toBe('Error');
});