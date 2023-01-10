import React, { useState } from 'react';

const FormA = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [borderColor, setBorderColor] = useState<string>('#bbb');
    const borderColor2 = firstName[0] === '@' ? 'green' : 'red';
    const sendForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(firstName);
    };
    const [gender, setGender] = useState<string>('');
    const [agreementChecked, setAgreementChecked] = useState<boolean>(false);

    return (
        <form onSubmit={sendForm}>
            <select 
                name="gender"
                value={gender}
                onChange={ e => setGender(e.target.value)}
            >
                <option value="">-wybierz-</option>
                <option value="W">Kobieta</option>
                <option value="M">Mężczyzna</option>
            </select>


            <input type="text" 
                name="firstName"
                value={firstName}
                onChange={ e => setFirstName(e.target.value) }
                placeholder="Wpisz tekst"
                style={{border: `3px solid ${borderColor2}`}}
            />

            <br />
            <label>
                <input 
                    type="checkbox" 
                    checked={agreementChecked}
                    onChange={ e => setAgreementChecked(e.target.checked)}
                /> Przysyłaj mi maila...
            </label>
            <p>
                {
                    agreementChecked 
                        ? 'Będziesz otrzymywał informację' 
                        : 'Zachęcamy do pobierania newsletera'

                }
            </p>



            <button type="submit">Save</button>
        </form>
    )
}

export { FormA }