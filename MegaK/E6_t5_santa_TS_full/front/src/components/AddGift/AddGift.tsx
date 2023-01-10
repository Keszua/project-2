import React, { FormEvent, useState } from 'react';
import { CreateGiftReq, GiftEntity } from 'types';
import { Spinner } from '../common/Spinner/Spinner';

export const AddGift = () => {
    const [form, setForm] = useState<CreateGiftReq>({
        name: '',
        count: 1,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [resultInfo, setResultInfo] = useState<string | null>(null);

    const updateForm = (key: string, value: any) => {
        setForm( form => ({
            ...form,
            [key]: value,
        }));
    };

    const sendForm = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/gift', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form)
            });
            const data: GiftEntity = await res.json();
            
            //console.log('data', data);
            setResultInfo(`${data.name} dodany do listy z id: ${data.id}`);
        } finally {
            setLoading(false);
        }

    };

    if (loading) {
        return <Spinner />;
    };

    if (resultInfo !== null) {
        return <div>
            <p><strong>{resultInfo}</strong> </p>
            <button onClick={ () => setResultInfo(null) }>Dodaj kolejną zabawkę</button>
        </div>;
    };

    return <form onSubmit={sendForm}>
        <h2>Dodaj prezent</h2>
        <p>
            <label>
                Nazwa: <br/>
                <input 
                    type="text" 
                    value={form.name} 
                    onChange={ e => updateForm('name', e.target.value)} 
                /> 
            </label>
        </p>
        <p>
            <label>
                Ilość: <br/>
                <input 
                    type="number" 
                    value={form.count} 
                    onChange={ e => updateForm('count', Number(e.target.value))} 
                /> 
            </label>
        </p>
        <button type="submit">Dodaj</button>
    </form> 
};