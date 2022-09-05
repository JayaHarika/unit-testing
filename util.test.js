const {generateText}=require('./util');

test('should output name and age', ()=> {
    const text = generateText('ram',29);
    expect(text).toBe('ram (29 years old)');
});