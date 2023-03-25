import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header';
import { Map } from './components/Map/Map';
import { SearchContext } from './components/contexts/search.context';
import { Route, Routes } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';


export const App = () => {
    const [search, setSearch] = useState<string>('');

  return <>
    <div className="wrapper_">
        <SearchContext.Provider value={{
            search,
            setSearch,
        }}>
            <Header />
            <Routes>
                <Route path="/"    element={<Map />} />
                <Route path="/add" element={<AddForm />} />
            </Routes>

        </SearchContext.Provider>
    </div>
  </>;
};
