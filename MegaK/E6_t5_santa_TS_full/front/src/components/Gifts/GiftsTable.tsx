import React, { useEffect, useState } from 'react';
import { GiftEntity } from 'types';
import { GiftsTableRow } from './GiftsTableRow';

interface  Props {
    gifts: GiftEntity[];
    onGiftChange: () =>  void;
}

export const GiftsTable = (props: Props) => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {
            props.gifts.map( (gift) => ( 
                <GiftsTableRow gift={gift} key={gift.id} onGiftChange={props.onGiftChange}/> 
            ))         
        }
        </tbody>
    </table>
    
);