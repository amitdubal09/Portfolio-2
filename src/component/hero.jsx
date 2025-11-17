import '../style/hero.css';

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className='image'>
          <img src="./amitimg.jpeg" alt="photo" />
        </div><div className="name">
          <h1 className='color'>I'm Amit Dubal,<br></br> <span> Web Developer Based in India.</span></h1>
          <p>I am a fresher web developer skilled in HTML, CSS, JavaScript, MySQL, PHP, and ReactJS. I enjoy building responsive websites and am eager to learn and grow in real projects.</p>
          <div className="buttons">
            <div className="first"><a href="#contact">Connect With Me</a></div>
            <div className="second"><a href="https://drive.google.com/file/d/1bkmRwoRQ1bRUIYtKoVy28t1gflm9wpjl/view?usp=drive_link" target='_blank'>My Resume</a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;