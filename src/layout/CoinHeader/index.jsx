import React from 'react'

const CoinHeader = () => {
    return (
        <div className="coin-header">
        
            <p className="coin-title">Coin</p>
            <p className="ticker">Ticker</p>
            <p className="title-price">Price</p>
            <p className="title-change">Change (24h)</p>
            <p className="title-volume">Volume (24h)</p>
            <p className="title-marketcap">Mkt cap</p>
      
            
        </div>
    )
}

export default CoinHeader;
