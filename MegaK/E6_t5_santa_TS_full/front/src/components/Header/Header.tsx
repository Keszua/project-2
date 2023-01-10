import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
    const colorOfLink = ({isActive}: {isActive: boolean}) => ({color: isActive ? 'green' : 'white'})

    

    return <>
        <h1> Sanata App - magazyn prezentów</h1>
        Menu:
        <NavLink to="/gift" style={colorOfLink}>Lista prezentów</NavLink>
        <NavLink to="/child" style={colorOfLink}>Dzieci</NavLink>
        <hr/>
    </>;
};