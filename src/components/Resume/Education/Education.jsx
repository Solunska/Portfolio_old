import './Education.css';

export default function Education({ school, year }) {
    return <div className="education-container">
        <p className="school">{school}</p>
        <p className="year">{year}</p>
    </div>
}