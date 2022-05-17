import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';
import Searchbar from './search';

function navbar() {
    return(
        <div className='navbar'>
            <h1 className='logo'>Movies</h1>
            <a className='active'>Home</a>
            <a>Discover</a>
            <Searchbar></Searchbar>
        </div>
    )
}

export default navbar;