import '../style/about.css';

const About = () => {
    return (
        <>
            <div id="about"><span>About me</span></div>
            <div className="main-about">
                <div className="section-1">
                    <img src="./amit.jpeg" alt="photo" />
                    <div className="sub-section-1">
                        <div className="intro">
                            <p>I am a passionate and dedicated Frontend Developer with strong skills in HTML, CSS, JavaScript, PHP, MySQL, and ReactJS. I enjoy creating clean, responsive, and user-friendly interfaces that provide smooth and engaging user experiences. With a solid foundation in modern web technologies, I constantly explore new ways to improve my craft and stay updated with the latest trends in frontend development.</p>
                            <p>As a fresher, I bring enthusiasm, curiosity, and a strong willingness to learn. I am actively open to work and eager to contribute to real-world projects where I can apply my skills and grow professionally. My goal is to work with a collaborative team, face practical challenges, and build meaningful digital solutions while shaping a successful career as a frontend developer.</p>
                        </div>
                        <div className="all-skills">
                            <div className="skills">
                                <p>HTML & CSS</p><div></div>
                            </div>
                            <div className="skills">
                                <p>Javascript</p><div></div>
                            </div>
                            <div className="skills">
                                <p>Tailwind CSS</p><div></div>
                            </div>
                            <div className="skills">
                                <p>ReactJS</p><div></div>
                            </div>
                            <div className="skills">
                                <p>MySQL</p><div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;