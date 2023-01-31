// import { images } from "./helper";
// import { Button } from "react-md";
import ProfessionalCompetence from "../professionalCompetence/professionalCompetence";
import TechnicalCompetence from "../technicalCompetence/technicalCompetance";



import './style.scss';

const Competence = () => {
  return (
    <div className="competence">
      <div className="">
      <div className='technicalCompetence'> <TechnicalCompetence /></div>
      <div className='professionalCompetence'><ProfessionalCompetence /></div> 

      </div>

  
    </div>
  )
}
export default Competence;