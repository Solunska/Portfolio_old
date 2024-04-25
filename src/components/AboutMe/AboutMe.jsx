import AboutMeContent from "./AboutMeContent/AboutMeContent";
import AboutMeSidebar from "./AboutMeSidebar/AboutMeSidebar";
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <AboutMeSidebar />
            <AboutMeContent />
        </div>
    );
}