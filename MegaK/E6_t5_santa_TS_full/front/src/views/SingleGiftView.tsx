import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GetSingleGiftRes } from 'types';

export const SingleGiftView = () => {
    const {giftId} = useParams();
    const [giftInfo, setGiftInfo] = useState<GetSingleGiftRes | null>(null);

    useEffect( () => {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/gift/${giftId}`);
                setGiftInfo(await res.json());
            } catch(e) {
                console.log("Błąd wczytywania!", e);
            }
        })();
    }, [])

    if (giftInfo === null) {
        return null;
    }

    return <>
        <h1>{giftInfo.gift.name}</h1>
        <p>To jest prezent o id: <strong>{giftInfo.gift.id}</strong></p>
        <p>W ilości: {giftInfo.gift.count}</p>
        <p>Rozdane {giftInfo.givenCount}</p>
        <p> <Link to="/gift">Powrót do listy</Link> </p>
    </>;
};