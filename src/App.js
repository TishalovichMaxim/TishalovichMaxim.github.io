import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar.js'
import MainPage from './Components/MainPage';
import Writers from './Components/Writers';
import SearchListPage from './Components/SearchListPage';

function App() {
  let Component;

  switch (window.location.pathname){
    case "/":
      Component = MainPage;
      break;
    case "/writers":
      Component = SearchListPage;
      break;
  }

  return (
    <> 
      <Navibar/>
      <Component/>
    </>
  );
}

export default App;