import Button from "../Button/Button";
import { useState } from "react";

export default function Navbar({ buttonStyles, aboutMeClick, resumeClick, contactClick, projectsClick }) {



    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <li className='navbar-item'><Button handleClick={aboutMeClick} buttonClass={buttonStyles.aboutMe}>About me</Button></li>
                <li className='navbar-item'><Button handleClick={resumeClick} buttonClass={buttonStyles.resume}>Resume</Button></li>
                <li className='navbar-item'><Button handleClick={projectsClick} buttonClass={buttonStyles.projects}>Projects</Button></li>
                <li className='navbar-item'><Button handleClick={contactClick} buttonClass={buttonStyles.contact}>Contact</Button></li>
            </ul>
        </nav>
    );
}