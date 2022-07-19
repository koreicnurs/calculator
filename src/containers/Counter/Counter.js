import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Counter.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const inc = () => dispatch({type: 'INC'});

    return (
        <div className='Counter'>
            <h1>{counter}</h1>
            <button onClick={inc}>inc</button>
        </div>
    );
};

export default Counter;