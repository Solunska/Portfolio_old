import Button from "../../Button/Button";
import '../../Button/Button.css'
import './AboutMeContent.css';
import Introduction from "./Introduction";

export default function AboutMeContent() {
    return (
        <div className="about-me-content-container">
            <Introduction />
            <div className='btn-container'>
                <Button buttonClass='button-active-big'>Code To My Web Portfolio</Button>
            </div>
        </div>
    );
}