import React, { useEffect, useState } from 'react';

interface Props {
    name: string,
}


//export const AgeGuesserAnswer: React.FC = (props: any) => {
export const AgeGuesserAnswer = (props: Props) => {
    const [age, setAge] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        (async () => {
            try {
                setError(null);
                const res = await fetch(`https://api.agify.io/?name=${props.name}`);
                const data = await res.json();
                console.log(data);
                setAge(data.age);
            } catch(e) {
                setError("Błąd wczytywania");
                console.log("Błąd wczytywania!", e);
            }
        })();
    }, []);

    if (error) {
        return <p>{error}</p>
    }

    if (age === null) {
        return <p>Wczytywanie...</p>
    }

    return <>
        <p>Twój wiek: {age}</p>
        <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
    </>
};