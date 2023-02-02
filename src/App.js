import React, {useState} from 'react';
import SortingVisualizer  from './Visualizer/SortingVisualizer';
import {Navbar} from "./navBar/nav-bar";
import './App.css';
import {GlobalsContext} from "./Context/GlobalContext";

function App() {
    const [speed,setSpeed] = useState("3")
    const [len,setLen] = useState("70")
  return (
    <GlobalsContext.Provider
    value={{setSpeed,speed,len,setLen}}>
        <Navbar />
        <SortingVisualizer/>
    </GlobalsContext.Provider>
  );
}

export default App;
