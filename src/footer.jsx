import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import { render } from '@testing-library/react';

function footer() {
    return(
        <div className='footer'>
            <p className='tmbdLogo'>TMDB</p>
            <p className='footerText'>This product uses the TMDb API but is not endorsed or certified by TMDb</p>
        </div>
    )
}

export default footer;