import logo from '../../assets/logo.png';

export default function Header(){
    return (
        <nav className='navbar'>
            <img src={logo}/>
            <ul className='navbar-items'>
                <li className='navbar-item'>About me</li>
                <li className='navbar-item'>Projects</li>
                <li className='navbar-item'>Contact</li>
            </ul>
            <a>other content</a>
        </nav>
    );
}