module.exports = (fn, delay) => async (...args) => {
    const fna = async () => fn(...args); // eslint-disable-line
    const [[error, result]] = await Promise.all([
        fna(...args).then(r => [null, r], e => [e]),
        new Promise(resolve => setTimeout(resolve, delay)),
    ]);
    if(error) throw error;
    return result;
};
