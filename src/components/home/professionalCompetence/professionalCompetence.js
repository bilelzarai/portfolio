import { Button } from 'react-md';
import { profComp } from './helper'
import './professionalCompetence.scss';

const ProfessionalCompetence = () => {
  return (
    <div>
    <div className='professionalTech'>
   Professional Competence :   {profComp.map((el, i) => (


<div key={i} className ='motCle'>
<Button id="outlined-button-5" theme="clear" themeType="outline">
          {el.motCle}
            </Button>
  </div>

    ))}
    </div>
    
    </div>)
}

export default ProfessionalCompetence;