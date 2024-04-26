import './Skills.css';

export default function Skill({ image, alt }) {
    return <div className="skill">
        <img src={image} alt={alt} />
    </div>
}