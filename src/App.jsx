import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css';

function App() {
    
    const [ coins, setCoins ] = useState([]);

    useEffect(() => {
        async function fetchCryptoAPI() {
            try {
                let options = { headers: {'Accept': 'application/json'} }
                let { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false', options)
                setCoins(data)
            } catch (err) {
                console.warn(err);
                setCoins("Cant fetch coins API")
            }
        }
        fetchCryptoAPI();
    })

    return (
        <>
            <h1>ZeeCrypto Tracker</h1>

            <footer>Zerhjosh Guzman, 2021</footer>
        </>
    )
};

export default App;
