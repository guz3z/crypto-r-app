import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { handleChange } from 'Coin';


export const SearchBar = () => {

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
    }, []);

    return (
        <div className="coin-app">
            <div className="search-coin">
                <h1 className="coin-text">Search a coin</h1>
                <form>
                    <input type="text" placeholder="Search" className="coin-input" onChange={handleChange}/>
                </form>

            </div>

        </div>

    )
}