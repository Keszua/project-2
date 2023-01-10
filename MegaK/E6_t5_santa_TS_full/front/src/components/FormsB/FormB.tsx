import React, { useState } from 'react';

// najpopularniejse biblioteki do formularzy:
// https://redux-form.com/
// https://formik.org/

interface PersonObj {
    firstName: string,
    lastName: string,
    age: number,
}

const FormB = () => {
    const [lastName, setLastName] = useState<string>('');
    const [age, setAge] = useState<number>(0);

    const [person, setPerson] = useState<PersonObj>({
        firstName: '',
        lastName: '',
        age: 0,

    });

    const sendForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const person2: PersonObj = {
            firstName: person.firstName,
            lastName: person.lastName,
            age: person.age,
        };
        console.log(person);
    };

    const change = (e: React.ChangeEvent<HTMLInputElement>) => setPerson( person => ({
        ...person,
        [e.target.name]: e.target.value,
    }))

    return (
        <form onSubmit={sendForm}>
            <p>
                <label>
                    Imię: <br/>
                    <input type="text"
                        value={person.firstName}
                        name="firstName"
                        onChange={ change }
                    />
                </label>
            </p>
            <p>
                <label>
                    Nazwisko: <br/>
                    <input type="text"
                        value={person.lastName}
                        name="lastName"
                        onChange={ change }
                    />
                </label>
            </p>
            <p>
                <label>
                    Wiek: <br/>
                    <input type="number"
                        value={person.age}
                        name="age"
                        onChange={ change }
                    />
                </label>
            </p>
            <p>
                <button type="submit">Wyślij</button>
            </p>

        </form>
    )
}

export { FormB }