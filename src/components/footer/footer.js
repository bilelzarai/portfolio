// import { images } from "./helper";
// import { Button } from "react-md";
// import ProfessionalCompetence from "../home/professionalCompetence/professionalCompetence";
import TechnicalCompetence from "../home/technicalCompetence/technicalCompetance";



import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
      <div className='technicalCompetence'> <TechnicalCompetence /></div>
      {/* <div className='professionalCompetence'><ProfessionalCompetence /></div>  */}

      </div>

  
    </div>
  )
}
export default Footer;