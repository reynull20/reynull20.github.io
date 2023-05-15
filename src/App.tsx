import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Component from './components/layout.ts';

function App() {
  return (
    <div className='App'>
      <Component.NavBar />
      <Component.Banner />
      <Component.Skills />
      <Component.Project/>
      <Component.Contact/>
       
      {/* <Component.SideBar/> */}
      {/* <main className='pages'>
        <Component.Home/>
        <Component.About/>
      </main> */}
    </div>
  )
}

export default App;