import '../style/projects.css';

const Projects = () => {
    return (
        <>
            <div id='Projects'>
                <span id='heading'>Project Work</span>
            </div>
            <div className="project-container">
                <a href="https://www.msrealtyproject.in/" target='_blank'><img src="../public/msrealty.png" alt="" /></a>
                <a href="https://github.com/amitdubal09/SkillScan-AI.git" target='_blank'><img src="" alt="SkillScan" /></a>
                <a href="https://github.com/amitdubal09/online-auction-system.git" target='_blank'><img src="" alt="online auction system" /></a>
                <a href="https://github.com/amitdubal09/weather-web-application.git" target='_blank'><img src="" alt="Weather web-application" /></a>
                <a href="https://github.com/amitdubal09/currency-converter.git" target='_blank'><img src="" alt="currency converter" /></a>
                <a href="https://github.com/amitdubal09/tic-tac-toe.git" target='_blank'><img src="" alt="tic-tac-toe" /></a>
            </div>
        </>
    );
};

export default Projects;