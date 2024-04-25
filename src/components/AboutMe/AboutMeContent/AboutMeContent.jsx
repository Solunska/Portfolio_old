import Button from "../../Button/Button";
import '../../Button/Button.css'
import './AboutMeContent.css';

export default function AboutMeContent() {
    return (
        <div className="about-me-content-container">
            <p>Hello!</p>
            <p>I'm Aneta Solunska</p>
            <p>UX/UI Designer and Developer.</p>
            <div className='btn-container'>
                <Button buttonClass='button-active-big'>Code To My Web Portfolio</Button>
            </div>
        </div>
    );
}