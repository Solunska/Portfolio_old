import { useState } from 'react';
import './components/Navbar/Navbar.css';
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import AboutMe from './components/AboutMe/AboutMe.jsx';
import Resume from './components/Resume/Resume.jsx';

function App() {
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

    let content = '';

    if (buttonStyles.aboutMe === 'button-active') {
        content = <AboutMe />;
    } else if (buttonStyles.resume === 'button-active') {
        content = <Resume />
    } else if (buttonStyles.projects === 'button-active') {
        content = <AboutMe />;
    } else if (buttonStyles.contact === 'button-active') {
        content = <AboutMe />;
    }

    return (
        <>
            <Navbar
                buttonStyles={buttonStyles}
                aboutMeClick={handleAboutMeClick}
                projectsClick={handleProjectsClick}
                contactClick={handleContactClick}
                resumeClick={handleResumeClick} />
            {content}
        </>
    )
}

export default App
