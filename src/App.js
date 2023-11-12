import React from 'react';
import './css/styles.css';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Services from './Components/Services';
import Portfolios from './Components/Portfolios';
import Abouts from './Components/Abouts';
import Teams from './Components/Teams';
import Clients from './Components/Clients';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Services/>
      <Portfolios/>
      <Abouts/>
      <Teams/>
      <Clients/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

