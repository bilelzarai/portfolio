import { Card } from 'react-md';
import {projects} from './helper'

import './style.scss';

const Projects  = () => {
  return (
    <div>
    <div className='projectScss-titleProj'> Projects </div>
 
  < div className='projectScss'>
{projects.map((el,i)=>(
      <Card key={i} className='card'>
        {/* <MediaContainer fullWidth>
          <img src={el.imgSchool} alt="" className='card-img' />
        </MediaContainer>
        <CardHeader  dHeader
          beforeChildren={
            <Avatar>
              <img src={el.imgSchool} alt="" />
            </Avatar>
          }
        
        >
          <CardTitle>{el.nameUniversity}</CardTitle>
          <CardSubtitle>{el.certificate}</CardSubtitle>
         
        </CardHeader>
        <List>
            <ListItem leftAddon={<DateRangeSVGIcon />}>
             {el.dateDebut} - {el.dateFin}
            </ListItem>
            <ListItem leftAddon={<DescriptionSVGIcon />}>
              {el.description}
            </ListItem>
          </List> */}
      </Card>
  ))}
  </div>  
  </div>
    )
}

export default Projects;