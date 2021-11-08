import React from 'react';
import { SearchBar } from './components/SearchBar/index.jsx';
import { Coin } from './components/Coin/index.jsx'
import './style.css';

function App() {

    return (
        <>
            <h1>ZeeCrypto Tracker</h1>
            <SearchBar />
            <Coin />


            <footer>Zerhjosh Guzman, 2021</footer>
        </>
    )
};



