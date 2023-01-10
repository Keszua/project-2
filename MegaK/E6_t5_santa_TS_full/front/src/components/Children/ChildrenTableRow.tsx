import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChildEntity, GiftEntity } from 'types';
import { ChildGiftSelect } from '../ChildGiftSelect/ChildGiftSelect';

interface Props {
    child: ChildEntity;
    giftsList: GiftEntity[];
}

export const ChildrenTableRow = (props: Props) => {

    return (
        <tr>
            <th> {props.child.name} </th>
            <td>
                <ChildGiftSelect 
                    giftsList={props.giftsList} 
                    selectedId={props.child.gift_id ?? ""} 
                    childId={props.child.id as string}
                />
            </td>
        </tr>
    );
};