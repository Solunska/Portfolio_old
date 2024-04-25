import Button from "../Button/Button";
import { useState } from "react";

export default function Navbar() {

    const [buttonStyles, setButtonStyles] = useState({
        aboutMe: 'button-active',
        resume: 'button-unactive',
        projects: 'button-unactive',
        contact: 'button-unactive',
    })


    function handleAboutMeClick() {
        setButtonStyles({
            aboutMe: 'button-active',
            resume: 'button-unactive',
            projects: 'button-unactive',
            contact: 'button-unactive',
        })
    }

    function handleResumeClick() {
        setButtonStyles({
            aboutMe: 'button-unactive',
            resume: 'button-active',
            projects: 'button-unactive',
            contact: 'button-unactive',
        })
    }

    function handleProjectsClick() {
        setButtonStyles({
            aboutMe: 'button-unactive',
            resume: 'button-unactive',
            projects: 'button-active',
            contact: 'button-unactive',
        })
    }

    function handleContactClick() {
        setButtonStyles({
            aboutMe: 'button-unactive',
            resume: 'button-unactive',
            projects: 'button-unactive',
            contact: 'button-active',
        })
    }

    return (
        <nav className='navbar'>
            <ul className='navbar-items'>
                <li className='navbar-item'><Button handleClick={handleAboutMeClick} buttonClass={buttonStyles.aboutMe}>About me</Button></li>
                <li className='navbar-item'><Button handleClick={handleResumeClick} buttonClass={buttonStyles.resume}>Resume</Button></li>
                <li className='navbar-item'><Button handleClick={handleProjectsClick} buttonClass={buttonStyles.projects}>Projects</Button></li>
                <li className='navbar-item'><Button handleClick={handleContactClick} buttonClass={buttonStyles.contact}>Contact</Button></li>
            </ul>
        </nav>
    );
}