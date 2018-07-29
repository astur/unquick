module.exports = (fn, delay) => async (...args) => {
    const [[error, result]] = await Promise.all([
        fn(...args).then(r => [null, r], e => [e]),
        new Promise(resolve => setTimeout(resolve, delay)),
    ]);
    if(error) throw error;
    return result;
};
