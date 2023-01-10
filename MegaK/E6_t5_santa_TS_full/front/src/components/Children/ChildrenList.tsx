import React, { useEffect, useState } from 'react';
import { ListChildrenRes } from 'types';
import { Spinner } from '../common/Spinner/Spinner';
import { ChildrenTable } from './ChildrenTable';

export const ChildrenList = () => {
    const [data, setData] = useState<ListChildrenRes | null>(null);

    const refreshGifts = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/child');
        //const data = await res.json();
        //setData(data);
        setData(await res.json());
    };


    useEffect( () => {
        refreshGifts();
    },[])

    if (data === null) {
        return <Spinner />
    }

    return <>
        <h1>Dzieci</h1>
        <ChildrenTable childrenList={data.childrenList} giftsList={data.giftsList}/>
    </>;
};