import React from 'react';
import { Dialog } from './Dialog';
import './Dialog.css';

interface Props {
    title?: string;
    children: React.ReactNode;
}

export const ConfirmDialog = (props: Props) => (
    <Dialog title={props.title}>
        {props.children}
        <hr/>
        <button>Yes</button>
        <button>No</button>
    </Dialog>
);