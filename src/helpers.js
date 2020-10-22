const isEmptyString = (str) => {
    return (!str || /^\s*$/.test(str));
}


module.exports = {
    isEmptyString,
};
