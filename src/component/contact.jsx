import '../style/Contact.css';

function Contact() {
  return (
    <>
      <div id='contact'>
        <span id='heading'>Get in touch</span>
      </div>
      <div className="c-main">
        <div className="main-1">
          <span className='color'>Lets'talk</span>
          <p className="opentowork">
            With a strong foundation in HTML, CSS, JavaScript, PHP, MySQL, and ReactJS, I enjoy turning ideas into clean, responsive, and user-friendly interfaces. I am enthusiastic about learning, improving, and taking on meaningful projects. I am currently open to work and actively seeking opportunities where I can contribute my skills and grow as a frontend developer.
          </p>
          <div className="icons">
            <div className="sub-icon">
              <div className="icon">
                <a href="mailto:amitdubal2005@gmail.com"><img src="../public/gmail.png" alt="email" /></a>
                <p className='email'>amitdubal2005@gmail.com</p>
              </div>
              <div className="icon">
                <a href="tel:+918879325268"><img src="../public/contact.svg" alt="contact" /></a>
                <p>+91 8879325268</p>
              </div>
              <div className="icon">
                <a href=""><img src="../public/location.png" alt="location" /></a>
                <p>Navi Mumbai, India, 410 218</p>
              </div>
            </div>
            <div className="sub-icon">
              <div className="icon">
                <a href="https://github.com/amitdubal-09"><img src="../public/github.png" alt="github" /></a>
                <p>amitdubal_09</p>
              </div>
              <div className="icon">
                <a href="https://instagram.com/amit_dubal_96k"><img src="../public/instagram.png" alt="instagram" /></a>
                <p>amit_dubal_96k</p>
              </div>
              <div className="icon">
                <a href="https://wa.me/918879325268"><img src="../public/whatsapp.png" alt="whatsapp" /></a>
                <p>+91 8879325268</p>
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