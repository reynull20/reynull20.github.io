import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Component from './components/layout.ts';

function App() {
  return (
    <div>
      <Component.SideBar/>
      <main className='pages'>
        <Component.Home/>
        <Component.About/>
        <Component.Project/>
        <Component.Contact/>
      </main>
    </div>
  )
}

export default App;