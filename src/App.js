import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navibar from './Components/Navibar.js'
import MainPage from './Components/MainPage';
import Writers from './Components/Writers';
import SearchListPage from './Components/SearchListPage';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function App() {
  let Component;

  switch (window.location.pathname){
    case "/":
      Component = MainPage;
      break;
    case "/writers":
      Component = SearchListPage;
          break;
      case "/writerPage/0":
          Component = Writers;
          break;
  }

  return (
      <>
          <div>
              <BrowserRouter>
                  <Navibar />
                  <Routes>
                      <Route path="/" element={<MainPage />} />
                      <Route path="/writers" element={<SearchListPage />} />
                      <Route path="/writerPage/:id" element={<Writers />} />
                  </Routes>
              </BrowserRouter>

              </div>
    </>
  );
}

export default App;