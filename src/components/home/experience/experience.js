// import { images } from "./helper";
// import { Button } from "react-md";



import './style.scss';

const Experience = (experience) => {
  return (
    <div className='experience'>
    <div className='poste'> {experience.poste}</div>

    <div className='duration'> <div className='duree'> {experience.dateDebut} - {experience.dateSortie}</div> <div className='societe'>{experience.societe}</div></div>

    <div>
      <div>
        {experience?.taches?.map((el, i) => (
          <>
            <div key={i} className='tache' >

              <div className='tache-icon'> {el.icon} </div>
              <div className='tache-descriptionTache'> {el.tache}    </div>
              
            </div>
          </>

        )


        )}
        {experience.poste}

      </div>

    </div>

  </div>
    )
  }
  export default Experience;
  Experience.defaultProps = {
    experience: {
      poste: 'ing info',
      dateDebut: '2019',
      dateSortie: '2020',
      nameSociete: 'anime',
  
      taches: [{
        id: 1,
        icon:'',
        tache: 'cree script',
      },
      {
        id: 2,
        icon:'',
        tache: 'animation'
      }]
  
    }
  
  }