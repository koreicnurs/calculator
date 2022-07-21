const initialStore = {
    counter: 0,
    numbers: '',
    pass: '2222',
    status: '',
    hide: true,
};

const reducer = (state = initialStore, action) => {
    if (action.type === 'ADD') {
        if (state.numbers.length < 4) {

            return {...state, numbers: state.numbers + action.payload};
        } else {
            return state;
        }
    }

    if (action.type === 'ADD_NUMBER') {
        return {...state, numbers: state.numbers + action.payload};
    }

    if (action.type === 'RES') {
        if (state.numbers === state.pass) {
            return {...state, status: 'correct', hide: false, numbers: 'Access Granted'};
        } else {
            return {...state, status: 'incorrect', hide: false, numbers: 'Access Denied'};
        }
    }

    if (action.type === 'RES_NUMBER') {
        return {...state, status: true, counter: eval(state.numbers)};
    }

    if (action.type === 'DEL') {
        if(state.numbers === 'Access Granted' || state.numbers === 'Access Denied'){
            return {...state, numbers: '', status: ''};
        }
        return {...state, numbers: state.numbers.substring(0, state.numbers.length - 1), status: ''};
    }

    if (action.type === 'DEL_NUMBER') {
        return {...state, numbers: state.numbers.substring(0, state.numbers.length - 1)};
    }

    if (action.type === 'CLEAR_NUMBER') {
        return {...state, numbers: '', counter: 0};
    }

    return state;
};

export default reducer;