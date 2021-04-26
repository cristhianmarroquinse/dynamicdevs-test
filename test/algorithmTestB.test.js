const algorithmTestB = require('../src/algorithmTestB');

// Generates an array of intregers from 1 to n with the form [1, 2, 3, 4, ..., n-1, n]
// Use ony for long arrays
const generateArray = n => {
    return Array.from({length: n}, (_, index) => index + 1);
}

describe('algorithmTestB', () => {

    //Test empty array
    it('should return an empty array', () => {
        expect(algorithmTestB([])).toStrictEqual([])
    })

    //Test long array
    it('should return an array of integers from 1 to 1000', () => {
        expect(algorithmTestB([51, 77, 333, 1000, 1, 10, 999])).toStrictEqual(generateArray(1000))
    })

    //Test basic example 1
    it('should return an array of integers from 1 to 5', () => {
        expect(algorithmTestB([2, 1, 4, 5])).toStrictEqual([1, 2, 3, 4, 5])
    })

    //Test basic example 2
    it('should return an array of integers from 1 to 9', () => {
        expect(algorithmTestB([4, 2, 9])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    //Test basic example 3
    it('should return an array of integers from 1 to 60', () => {
        expect(algorithmTestB([58, 60, 55])).toStrictEqual(generateArray(60))
    })

})