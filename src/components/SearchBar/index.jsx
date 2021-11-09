import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Coin } from '../Coin';
import CoinHeader from '../../layout/CoinHeader';
import '../../style.css';



export const SearchBar = () => {

    const [ coins, setCoins ] = useState([]);
    const [ search, setSearch ] = useState('');

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
        } fetchCryptoAPI();
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => 
        coin.name.toLowerCase().includes(search.toLowerCase())    
    )

    return (
        <div className="coin-app">
            <div className="search-coin">
                <form>
                    <input type="text" placeholder="Search a coin" className="coin-input" onChange={handleChange}/>
                </form>

            </div>
            <CoinHeader />
            {filteredCoins.map(coin => {
                return (
                    <Coin 
                    key={coin.id} 
                    coinname={coin.name} 
                    image={coin.image}
                    symbol={coin.symbol} 
                    marketcap={coin.market_cap}
                    price={coin.current_price}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                     /> 
                )
            })}

        </div>

    )
}