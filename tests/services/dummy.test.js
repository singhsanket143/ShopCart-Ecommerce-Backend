const { multiply, sum } = require('../../src/services/dummy_service');

describe('Testing sum function', () => {
    test('sum should add up 1 and 3 to give 4', () => {
        // Real logic of the test will go here
        const result = sum(1, 3);
        expect(result).toBe(4);
    });
    
    
    test('sum should add up 1 and -2 to give -1', () => {
        // Real logic of the test will go here
        const result = sum(1, -2);
        expect(result).toBe(-1);
    });
    
});

describe('Test multiply function', () => {

    test('multiply should make multiplacation of 1 and -2 to give -2', () => {
        // Real logic of the test will go here
        const result = multiply(1, -2);
        expect(result).toBe(-2);
    });
    
    
    test('multiply should make multiplacation of 1 and 0 to give 0', () => {
        // Real logic of the test will go here
        const result = multiply(1, 0);
        expect(result).toBe(0);
    });
    
    test('multiply should make multiplacation of 5 and 3 to give 15', () => {
        // Real logic of the test will go here
        const result = multiply(5, 3);
        expect(result).toBe(15);
    });
    
    
    test('multiply should make multiplacation of -5 and -3 to give 15', () => {
        // Real logic of the test will go here
        const result = multiply(-5, -3);
        expect(result).toBe(15);
    });
})
