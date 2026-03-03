let reduxState = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 0
};
function reducer(state, action) {
    if (action.type === "post/increment") return {
        ...state,
        salary: state.salary + 1
    };
    else if (action.type === "post/decrement") return {
        ...state,
        salary: state.salary - 1
    };
    else if (action.type === "post/incrementby") return {
        ...state,
        salary: state.salary + action.payload
    };
    return state;
}
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/increment"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/decrement"
});
console.log(reduxState);
reduxState = reducer(reduxState, {
    type: "post/incrementby",
    payload: 10
});
console.log(reduxState);

//# sourceMappingURL=Redux.c36f364e.js.map
