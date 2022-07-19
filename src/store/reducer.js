const initialStore = {
    counter: 0,
};

const reducer =  (state = initialStore, action) => {
    if (action.type === 'INC') {
        return {...state, counter: state.counter + 10}
    }

    return state;
};

export default reducer;