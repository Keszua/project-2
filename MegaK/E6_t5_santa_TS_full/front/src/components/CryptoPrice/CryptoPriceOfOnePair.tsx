import React from 'react';
import { BinanceOneCryptoPairData } from '../../types/crypto-data';

interface Props {
    onePair: BinanceOneCryptoPairData;
}

export const CryptoPriceOfOnePair = (props: Props) => (
    <p 
        style={{backgroundColor: Number(props.onePair.priceChangePercent) > 0 ? 'green' : 'red'}}
    >
        {props.onePair.symbol} aktualnie jest warte średnio: {props.onePair.weightedAvgPrice}
    </p>
);
