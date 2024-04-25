import {useState} from 'react';
import './components/Navbar/Navbar.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from './components/AboutMe/AboutMe.jsx';

function App() {

    return (
        <>
            <Navbar/>
            <AboutMe/>
        </>
    )
}

export default App
