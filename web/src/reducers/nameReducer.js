
module.exports = (state, action) => {
    return Object.assign({}, state, {name: action.name});
};