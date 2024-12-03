import React from 'react';
import style from './App.module.css';
import Header from './components/header.js';
import Content from './components/content.js';
import SearchResultsPage from './components/searchResultsPage.jsx';
import CreateAdvertPage from './components/createAdvertPage.jsx';
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className={style.desktop}>
      <Header />
      <Content />
      {/* <Outlet /> */}
    </div>


// <div class="color_bar">
//   Colors: 
//   <div class="color1"></div>
//   <div class="color2"></div>
//   <div class="color3"></div>
//   <div class="color4"></div>
//   <div class="color5"></div>
//   <div class="color6"></div>
//   <div class="color7"></div>
//   <div class="color8"></div>
// </div>


  );
}

export default App;