import '../style/contact.css';

function Contact() {
  return (
    <>
      <div id='contact'>
        <span className='tag-head'>Get in touch</span>
      </div>
      <div className="c-main">
        <div className="main-1">
          <p className="opentowork">
            With a strong foundation in HTML, CSS, JavaScript, PHP, MySQL, and ReactJS, I enjoy turning ideas into clean, responsive, and user-friendly interfaces. I am enthusiastic about learning, improving, and taking on meaningful projects. I am currently open to work and actively seeking opportunities where I can contribute my skills and grow as a frontend developer.
          </p><br />
          <span className='color'>Lets'talk</span><br />
          <div className="icons">
            <div className="sub-icon">
              <div className="icon">
                <a href="mailto:amitdubal2005@gmail.com" className="icon-link">
                  <img src="./gmail.png" alt="gmail" />
                  <p>amitdubal2005@gmail.com</p>
                </a>
              </div>


              <div className="icon">
                <a href="tel:+918879325268" target='_blank' className="icon-link">
                  <img src="./contact.svg" alt="contact" />
                  <p>+91 8879325268</p>
                </a>
              </div>

              <div className="icon">
                <a href="#" className="icon-link">
                  <img src="./location.png" alt="location" />
                  <p>Navi Mumbai, India, 410 218</p>
                </a>
              </div>
              <div className="icon">
                <a href="https://linkedin.com/in/amitdubal" target='_blank' className="icon-link">
                  <img src="./linkedin.png" alt="linkedin" />
                  <p>Amit Dubal</p>
                </a>
              </div>
            </div>
            <div className="sub-icon">

              <div className="icon">
                <a href="https://github.com/amitdubal09" target='_blank' className="icon-link">
                  <img src="./github.png" alt="github" />
                  <p>amitdubal_09</p>
                </a>
              </div>

              <div className="icon">
                <a href="https://instagram.com/amit_dubal_96k" target='_blank' className="icon-link">
                  <img src="./instagram.png" alt="instagram" />
                  <p>amit_dubal_96k</p>
                </a>
              </div>

              <div className="icon">
                <a href="https://wa.me/918879325268" target='_blank' className="icon-link">
                  <img src="./whatsapp.png" alt="whatsapp" />
                  <p>+91 8879325268</p>
                </a>
              </div>
            </div>

          </div>
        </div>
        <div className="main-2"></div>
      </div >
    </>
  );
}

export default Contact;
