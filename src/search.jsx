import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function searchbar() {
    return(
        <div className='searchForm'>
            <input type="text" placeholder="Search" className='search'></input>
            <button type="submit"><span class="material-symbols-outlined">search</span></button>
        </div>
    )
}

export default searchbar;