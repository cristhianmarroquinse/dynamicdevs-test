const algorithmTestB = array => {
    const max = Math.max(...array);
    return Array.from({length: max}, (_, index) => index + 1);
}

module.exports = algorithmTestB;