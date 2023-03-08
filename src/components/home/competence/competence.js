import TechnicalCompetence from "../technicalCompetence/technicalCompetance";

import { techComp, profComp } from '../technicalCompetence/helper';
import './style.scss';

const Competence = () => {

  return (
    <div className="competence">
      <div className="">
        <div className='technicalCompetence'>
          <TechnicalCompetence title="Technical Competence " table={techComp} />
        </div>

        <div className='technicalCompetence'>
          <TechnicalCompetence title="Professional Competence " table={profComp} />
        </div>
      </div>
    </div>
  )
}
export default Competence;