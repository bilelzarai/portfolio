import './style.scss';

import { techComp } from './helper'
import { Button } from 'react-md';

const TechnicalCompetence = () => {
  return (
  <div className='divix'>
    Technical Competence : 
  <div className='divix-tech'>
    {techComp.map((el, i) => (
      <div key={i} className ='motCle'>
          <Button id="outlined-button-5" theme="clear" themeType="outline">
          {el.motCle}
            </Button>
       

      </div>
    ))}
  </div>
  
  </div>
  )
}

export default TechnicalCompetence;