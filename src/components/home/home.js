import { Button } from 'react-md';
import Certification from './certification/certification';
import Education from './education/education';
import Experience from './experience/experience';
import ProfessionalCompetence from './professionalcompetence/professionalcompetence';
import Projects from './projects/projects.js';
import './style.scss';
import TechnicalCompetence from './technicalcompetence/technicalcompetance';

const Home = () => {
  return (
    <div>
      <div className='home'>

        <div className='home-cvBtn'> 
        
        <Button  id="contained-button-5" theme="clear" themeType="contained">
        Download CV
      </Button>
        </div>
        <div>
          <div className='leftSideBody'>
            <div className='experience'>
              <Experience />

            </div>
            <div className='education'>
              <Education />
            </div>
          </div>
          <div className='rightSideBody'>
            <div className='certification'>
              <Certification />
            </div>
            <div className='project'>
              <Projects />
            </div>


          </div>
        </div>
      </div>
      <div className='technicalCompetence'> <TechnicalCompetence/></div>
      <div className='professionalCompetence'><ProfessionalCompetence/></div>
    </div>
  )
}
export default Home;