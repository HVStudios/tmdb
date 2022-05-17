import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function navbar() {
    return(
        <div className='navbar'>
            <h1 className='logo'>Movies</h1>
            <a className='home'>Home</a>
            <a className='discover'>Discover</a>
        </div>
    )
}

export default navbar;