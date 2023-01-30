// import { images } from "./helper";
import { Button } from "react-md";
import ProfessionalCompetence from "../home/professionalcompetence/professionalcompetence";
import TechnicalCompetence from "../home/technicalcompetence/technicalcompetance";



import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="">
      <div className='technicalCompetence'> <TechnicalCompetence /></div>
      <div className='professionalCompetence'><ProfessionalCompetence /></div> 

      </div>

  
    </div>
  )
}
export default Footer;