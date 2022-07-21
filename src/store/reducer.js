const initialStore = {
    numbers: '',
    pass: '2222',
    status: false,
};

const reducer =  (state = initialStore, action) => {
    if (action.type === 'ADD') {
        if(state.numbers.length < 4){

            return {...state, numbers: state.numbers + action.payload};
        } else {
            return state;
        }
    }

    // if (action.type === 'OP') {
    //     return {...state, numbers: state.numbers + action.payload};
    // }

    if (action.type === 'RES') {
        if(state.numbers === state.pass) {
            return {...state, status: true};
        } else {
            return state;
        }

    }

    if (action.type === 'DEL') {
        return {...state, numbers: state.numbers.substring( 0, state.numbers.length -1 ), status: false};
    }

    return state;
};

export default reducer;