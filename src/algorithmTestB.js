const algorithmTestB = array => {
    const max = Math.max(...array);
    return Array.from({length: max}, (_, index) => index + 1);
}

//console.log(algorithmTestB([2, 1, 4, 5]))
//export default algorithmTestB;
module.exports = algorithmTestB;