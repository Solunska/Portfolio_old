import './AboutMeSidebar.css';
import profilePhoto from '../../../assets/profile.jpg';
import Info from './Info';
export default function AboutMeSidebar() {
    return (
        <div className="about-me-side-bar-container">
            {/* <img src={profilePhoto} alt="Profile Photo" /> */}
            <div className='profile-photo-container'>
                <div className='profile-photo'></div>
            </div>
            <div className='info-container'>
                <Info text='UX/UI Designer and Developer' />
                <Info text='Studying at Faculty of Computer Science and Engineering ' />
            </div>
        </div>
    );
}