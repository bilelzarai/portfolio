import { Button, Card, CardActions, CardContent, CardHeader, CardTitle } from 'react-md';
import './style.scss';
import { experience } from "./helper";

const Experience = () => {
  return (
    <div className='experience'>


      {experience.map((el, i) => (

        <div className='card' >

          <Card key={i}>
            <CardHeader>

              <CardTitle className='poste'>{el.poste}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='duration'> <div className='duree'> {el.dateDebut} - {el.dateSortie}</div> <div className='societe'>{el.societe}</div></div>
              <div className='tache-icon'> {el.icon} </div>
              <div key={i} className='tache' >

              {el?.taches?.map((t, numb) => (
                <div key={numb} className='tache-descriptionTache'> {t.tache}  </div>


              ))}
              </div>

            </CardContent>
            <CardActions>
              <Button className='button'>Action 1</Button>
            </CardActions>
          </Card>


        </div>

      )
      )

      }
 

    </div>
  )
}
export default Experience;

experience.defaultProps = {
  elements: [{
    id: 1,
    poste: 'ing info',
    dateDebut: '2019',
    dateSortie: '2020',
    nameSociete: 'anime',

    taches: [{
      id: 1,
      icon: '',
      tache: 'cree script',
    },
    {
      id: 2,
      icon: '',
      tache: 'animation'
    }]

  },
  {
    id: 2,
    poste: 'ing info',
    dateDebut: '2019',
    dateSortie: '2020',
    nameSociete: 'anime',

    taches: [{
      id: 1,
      icon: '',
      tache: 'cree script',
    },
    {
      id: 2,
      icon: '',
      tache: 'animation'
    }]
  }

  ]

}