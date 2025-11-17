import '../style/projects.css';

const Projects = () => {
    return (
        <>
            <div id='Projects'>
                <span className='tag-head'>Project Work</span>
            </div>
            <div className="project-container">
                <a href="https://www.msrealtyproject.in/" target='_blank'><img src="./msrealty.jpeg" alt="" /></a>
                <a href="https://github.com/amitdubal09/SkillScan-AI.git" target='_blank'><img src="./skillscan.jpeg" alt="SkillScan" /></a>
                <a href="https://github.com/amitdubal09/online-auction-system.git" target='_blank'><img src="./auction.jpeg" alt="online auction system" /></a>
                <a href="https://github.com/amitdubal09/weather-web-application.git" target='_blank'><img src="./weather.jpeg" alt="Weather web-application" /></a>
                <a href="https://github.com/amitdubal09/tic-tac-toe.git" target='_blank'><img src="./tic-tac-toe.jpeg" alt="tic-tac-toe" /></a>
            </div>
        </>
    );
};

export default Projects;