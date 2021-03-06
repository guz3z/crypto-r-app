import React, { useState } from 'react'

export const Coin = ({image, coinname, symbol, price, volume, priceChange, marketcap}) => {

    return (
        <div className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{coinname}</h1>
                    <p className="coin-symbol">{symbol}</p>
                </div> 
                <div className="coin-data">
                    <p className="coin-price">${price.toLocaleString(undefined, {minimumFractionDigits: 2})}</p> 
                    {priceChange < 0 ? (
                        <p className="coin-percent red">{priceChange.toFixed(2)}%</p>    //put % to 2 decimal places and to red if less than 0
                    ) : (<p className="coin-percent green">{priceChange.toFixed(2)}%</p> )
                }
                    <p className="coin-volume">${volume.toLocaleString()}</p>
                    
                
                <p className="coin-marketcap">${marketcap.toLocaleString()}</p>
                </div>
            </div>
            
        </div>
    )
}




