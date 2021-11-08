import React, { useState } from 'react'

export const Coin = ({image, coinname, symbol, price, volume}) => {

    const [ search, setSearch ] = useState('');

    const handleChange = e => {
        setSearch(e.target.value)
    }


    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{coinname}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">${price}</p>
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                </div>
            </div>
            
        </div>
    )
}


