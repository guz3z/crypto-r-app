import React from 'react';
import { SearchBar } from './components/SearchBar/index.jsx';
import CoinHeader from './layout/CoinHeader/index.jsx';
import './style.css';

function App() {

    return (
        <>
            <h1>ZeeCrypto Tracker</h1>
            <CoinHeader />
            <SearchBar />
            


            <footer>Zerhjosh Guzman, 2021</footer>
        </>
    )
};

export default App;


