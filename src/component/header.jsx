import '../style/header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">Amit Dubal</div>
        <div className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About me</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        <div className="button">
            <button><a href="#contact">Contact Me</a></button>
        </div>
    </div>
  );
};

export default Header;