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


    function handleClick(aboutMeState, resumeState, projectsState, contactState) {
        setButtonStyles({
            aboutMe: aboutMeState,
            resume: resumeState,
            projects: projectsState,
            contact: contactState,
        });
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
                aboutMeClick={() => handleClick('button-active', 'button-unactive', 'button-unactive', 'button-unactive')}
                resumeClick={() => handleClick('button-unactive', 'button-active', 'button-unactive', 'button-unactive')}
                projectsClick={() => handleClick('button-unactive', 'button-unactive', 'button-active', 'button-unactive')}
                contactClick={() => handleClick('button-unactive', 'button-unactive', 'button-unactive', 'button-active')}
            />
            {content}
        </>
    )
}

export default App
