import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GiftEntity } from 'types';

interface Props {
    gift: GiftEntity;
    onGiftChange: () => void;
}

export const GiftsTableRow = (props: Props) => {
    const deleteGif = async (e: React.MouseEvent) => {
        e.preventDefault();

        if (!window.confirm(`Are you sure you want to remove ${props.gift.name}?`)) {
            return;
        }

        const res = await fetch(`http://localhost:3001/gift/${props.gift.id}`, {
            method: 'DELETE',
        });

        console.log('res', res);

        //if (res.status === 400 || res.status === 500) {
        if ([400, 500].includes(res.status)) {
            const error = await res.json();
            alert(`Error occured: ${error.message}`);
            return;
        }

        props.onGiftChange();

    };

    return (
        <tr>
            <th>
                <Link to={`/gift/${props.gift.id}`}> 
                    {props.gift.name}
                </Link>
            </th>
            <td>{props.gift.count}</td>
            <td>
                <a href="#" onClick={deleteGif}>X</a>
                
            </td>
        </tr>
    );
};