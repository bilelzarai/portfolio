import { Button } from 'react-md';
import Certification from './certification/certification';
import Education from './education/education';
import Experience from './experience/experience';
// import ProfessionalCompetence from './professionalcompetence/professionalcompetence';
import Projects from './projects/projects.js';
// import TechnicalCompetence from './technicalcompetence/technicalcompetance';
import cv from '../../assets/Zarai_Bilel_CV_JS.pdf';
import Competence from './competence/competence';
import PersonalInformation from './personalInformation/personalInformation';


import './home.scss';


const downloadFile = () => {
  window.location.target= '_blank';

  window.open( cv, "_blank")
}
const Home = () => {
  return (<>
    <div className='home'>
      <div >
        <div><PersonalInformation/></div>
        <div className='home-cvBtn'>
          <Button  id="contained-button-5" theme="clear" themeType="contained"   onClick={downloadFile} >
            View My CV
          </Button>
          <a href={cv} download="MY CV" target='_blank' rel="noreferrer" >
          <Button id="contained-button-5" theme="clear" themeType="contained"  >
              Download CV
            </Button>
            
          </a>

        </div>
        <div className='ft'>
          <div className='leftSideBody'>
            <div className='experienceHome'>
              <Experience />

            </div>
            <div className='certificationHome'>
             <Certification />
            </div>
          </div>
          <div className='rightSideBody'>
            <div className='educationHome'>
               <Education />
            </div>
            <div className='projectHome'>
              <Projects />
            </div>


          </div>
        </div>
      </div>
      <div className='competence'>
        <Competence/>
      </div>
    </div>
   
  </>)
}
export default Home;