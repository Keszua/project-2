import React, { useEffect, useState } from 'react';
import { AgeGuesserAnswer } from './AgeGuesserAnswer';


export const AgeGuesser = () => {
    const [name, setName] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);
    
    const sendForm = (e:any) => {
        e.preventDefault();
        setCheck(true);
    };

    if (check) {
        return <AgeGuesserAnswer name={name}/>;
    }

    return <form onSubmit={sendForm}>
        <label>
            Podaj imię: <br/>
            <input type="text"
                value={name}
                onChange={ e => setName(e.target.value)}
            />
            <button type="submit">Zgadnij mój wiek</button>
        </label>
    </form>
};