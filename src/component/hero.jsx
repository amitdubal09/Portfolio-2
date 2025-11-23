import '../style/hero.css';
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <div className="main">
        <div className='image'>
          <img src="./amitimg.jpeg" alt="photo" />
        </div>
        <div className="name">
          <Typewriter className="typewriter"
            options={{
              strings: ["I'm Amit Dubal"], autoStart: true, loop: true, delay: 100,
            }}
          />
          <span> Web Developer Based in India.</span>
          <p>I am a fresher web developer skilled in HTML, CSS, JavaScript, MySQL, PHP, and ReactJS. I enjoy building responsive websites and am eager to learn and grow in real projects.</p>
          <div className="buttons">
            <div><a className="first click" href="#contact">Connect With Me</a></div>
            <div><a className="click second" href="https://drive.google.com/file/d/1bkmRwoRQ1bRUIYtKoVy28t1gflm9wpjl/view?usp=drive_link" target='_blank'>My Resume</a></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;