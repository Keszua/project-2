import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { reduceEachLeadingCommentRange } from 'typescript';
import { FormA } from './components/Forms1/FormA';
import { ColorBox } from './components/ColorBox/ColorBox';
import { FormB } from './components/FormsB/FormB';
import { Dialog } from './components/common/Dialog/Dialog';
import { ConfirmDialog } from './components/common/Dialog/ConfirmDialog';
import { AgeGuesser } from './components/AgeGuesser/AgeGuesser';
import { AgeGuesserAnswer } from './components/AgeGuesser/AgeGuesserAnswer';
import { CryptoPrice } from './components/CryptoPrice/CryptoPrice';
import { GiftsView } from './views/GiftsView';
import { Link, Route, Routes } from 'react-router-dom';
import { ChildView } from './views/ChildView';
import { Header } from './components/Header/Header';
import { NotFoundView } from './views/NotFoundView';
import { SingleGiftView } from './views/SingleGiftView';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        {/* <FormA /> */}
        {/* <FormB /> */}
        {/* <ColorBox /> */}

        {/* <p>   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, officia magnam rerum adipisci rem et vero harum incidunt quia voluptatem vel eius, numquam doloremque laudantium libero nostrum, quae commodi ratione.    </p> */}
        {/* <Dialog title="">
            Treść
        </Dialog> */}
        {/* <ConfirmDialog title="Pytanko">
            Jesteś pewien?
        </ConfirmDialog> */}
        {/* <AgeGuesser/> */}
        {/* <CryptoPrice /> */}
        <Header />
        <Routes >
            <Route path="/gift" element={<GiftsView />} />
            <Route path="/gift/:giftId" element={<SingleGiftView />} />
            <Route path="/child" element={<ChildView />} />
            <Route path="*" element={<NotFoundView />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;


// Skończyłem na 25:38