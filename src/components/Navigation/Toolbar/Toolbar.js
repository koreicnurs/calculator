import React from 'react';
import './Toolbar.css';
import NavItems from "../NavItems/NavItems";

const Toolbar = () => {
    return (
        <header className='Toolbar'>
            <div className='Logo'>Page Logo</div>
            <nav>
                <NavItems/>
            </nav>
        </header>
    );
};

export default Toolbar;