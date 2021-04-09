import React from 'react';
import Provider from './context/AppProvider';

import DateTimeContainer from './components/DateTimeContainer';
import Drawer from './components/Drawer';
import Banner from './components/Banner';
import Videos from './components/Videos';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './app.css';

function App() {
  return (
    <Provider>
      <main className="app">
        <Navigation />
        <Drawer />
        <Banner />
        <DateTimeContainer />
        <Videos />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
