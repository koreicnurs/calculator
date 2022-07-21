import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import './Counter.css';

const Counter = () => {
    const history = useSelector(state => state.numbers);
    const status = useSelector(state => state.status);
    const dispatch = useDispatch();

    const addNumber = (number) => dispatch({type: 'ADD', payload: number});
    const result = () => dispatch({type: 'RES'});
    const del = () => dispatch({type: 'DEL'});


    return (
        <div className="enter">
            <div className="top">
                <div className={status ? 'screen green' : 'screen'}>{history.replace(/./gm, '*')}</div>
            </div>

            <div className="keys">
                <button onClick={() => addNumber(1)}>1</button>
                <button onClick={() => addNumber(2)}>2</button>
                <button onClick={() => addNumber(3)}>3</button>
                <button onClick={() => addNumber(4)}>4</button>
                <button onClick={() => addNumber(5)}>5</button>
                <button onClick={() => addNumber(6)}>6</button>
                <button onClick={() => addNumber(7)}>7</button>
                <button onClick={() => addNumber(8)}>8</button>
                <button onClick={() => addNumber(9)}>9</button>
                <button className='clear' onClick={del}>&lt;</button>
                <button onClick={() => addNumber(0)}>0</button>
                <button className='eval' onClick={result}>=</button>
            </div>
        </div>
    );
};

export default Counter;