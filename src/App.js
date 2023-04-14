import React from 'react';
import ContactForm from './components/ContactForm';
import {CrudApi} from './components/CrudApi';
import { CrudApp } from "./components/CrudApp";
import Modals from './components/Modals';
//import SongSearch from './components/SongSearch';
//import SelectsAnidados from './components/SelectsAnidados';
//import SelectCesar from './components/SelectCesar';

function App() {
  return (
    <>
      <h1>Ejercicio con React</h1>
      {/* <Modals/> */}
      <hr/>
      {/* <ContactForm/> */}
      {/* <SelectCesar /> */}
      {/* <SelectsAnidados/> */}
      {/* <hr/> */}
      {/* <SongSearch/> */}
      {/* <hr/> */}
      <CrudApi/>
      {/* <hr/> */}
      {/* <CrudApp/> */}
    </>
  );
}

export default App;
