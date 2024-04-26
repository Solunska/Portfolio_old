import Introduction from '../AboutMe/AboutMeContent/Introduction';
import Education from './Education/Education';
import Skill from './Skill/Skill';
import cssImg from '../../assets/css.png';
import figmaImg from '../../assets/figma.png';
import githubImg from '../../assets/github.png';
import htmlImg from '../../assets/html.png';
import javaScriptImg from '../../assets/javaScript.png';
import bootstrapImg from '../../assets/bootstrap.png';
import reactImg from '../../assets/react.png';
import '../AboutMe/AboutMeContent/AboutMeContent.css';
import './Resume.css';
import AdditionalSkill from './Skill/AdditionalSkill';


const content = 'Hardworking, ambitious, and creative college student with a keen interest in UX/UI design and development. Equipped with a solid understanding of web technologies, including HTML, CSS, JavaScript, and Figma, I specialize in crafting visually pleasing web applications. As a quick learner, I am ready to take on any challenge and eager to increase my knowledge while gaining practical experience. Seeking an opportunity to apply my skills and committed to becoming a dependable and valuable team member, I aim to contribute effectively to projects, deliver innovative solutions, and further develop my expertise in UX/UI design and development.';

export default function Resume() {
    return <div className="resume-container">
        <div className='resume-introduction'>
            <Introduction />
            <div className='resume-content'>{content}</div>
        </div>
        <div className='education-and-skills-container'>
            <p className='label'>Education</p>
            <Education school='Faculty of Computer Science and Engineering, Skopje'
                year='2020 - Present' />
            <Education school='Gymnasium Kocho Racin, Veles'
                year='2016 - 2020' />
            <div className='skills'>
                <Skill image={htmlImg} alt='html' />
                <Skill image={cssImg} alt='css' />
                <Skill image={javaScriptImg} alt='java script' />
                <Skill image={bootstrapImg} alt='bootstrap' />
                <Skill image={figmaImg} alt='figma' />
                <Skill image={reactImg} alt='react' />
                <Skill image={githubImg} alt='github' />
            </div>
            <div className='aditional-skills-container'>
                <p className='label'>Additional Skills</p>
                <div className='aditional-skills'>
                    <AdditionalSkill skill='Teamwork Skills' />
                    <AdditionalSkill skill='Colaboration' />
                    <AdditionalSkill skill='Creativity' />
                    <AdditionalSkill skill='Organized' />
                    <AdditionalSkill skill='Hardworking' />
                </div>
            </div>
        </div>
    </div>
}