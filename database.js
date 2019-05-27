
const data = {};

module.exports = {
    get : (key) => data[key],
    set: (key, object) => {
        data[key] = object;
    },
    query: (f) => Object.keys(data).filter(key => f(data[key]))
}