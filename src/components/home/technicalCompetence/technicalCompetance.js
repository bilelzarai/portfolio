import './style.scss';
import { Button } from 'react-md';

const TechnicalCompetence = (props) => {
  return (
  <div className='divix'>
   {props.title}:  
  <div className='divix-tech'>

    {props.table.map((el, i) => (
      <div key={i} className ='motCle'>
          <Button  id="outlined-button-5" theme="clear" themeType="outline">
          {el.motCle}
            </Button>
       

      </div>
    ))}
  </div>
  
  </div>
  )
} 

export default TechnicalCompetence;