import React from 'react';
import {useDispatch, useSelector} from "react-redux";


const Calculator = () => {
    const history = useSelector(state => state.numbers);
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const addNumber = (number) => dispatch({type: 'ADD_NUMBER', payload: number});
    const result = () => dispatch({type: 'RES_NUMBER'});
    const del = () => dispatch({type: 'DEL_NUMBER'});
    const clear = () => dispatch({type: 'CLEAR_NUMBER'});

    return (
        <>
            <div className="enter">
                <div className="top">
                    <div className='screen'>{counter}</div>
                    <div className='screen'>{history}</div>
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
                    <button onClick={() => addNumber('*')}>*</button>
                    <button onClick={() => addNumber(0)}>0</button>
                    <button onClick={() => addNumber('/')}>/</button>
                    <button onClick={() => addNumber('-')}>-</button>
                    <button className='clear' onClick={del}>&lt;</button>
                    <button onClick={() => addNumber('+')}>+</button>
                    <button className='clear' onClick={clear}>C</button>
                    <button className='eval' onClick={result}>=</button>
                </div>
            </div>
        </>
    );
};

export default Calculator;