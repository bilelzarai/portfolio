import { Avatar, Card, CardHeader, CardSubtitle, CardTitle, EmailSVGIcon, List, ListItem, MediaContainer, PhoneSVGIcon } from 'react-md';
import education from './helper'

import './style.scss';

const Education  = () => {
  return (< div className='education'>
{education.map((el,i)=>(
      <Card key={i} className='card'>
        <MediaContainer fullWidth>
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
            <ListItem leftAddon={<PhoneSVGIcon />} secondaryText="Mobile">
             {el.dateDebut} - {el.dateFin}
            </ListItem>
            <ListItem leftAddon={<EmailSVGIcon />} secondaryText="Work">
              {el.description}
            </ListItem>
          </List>
      </Card>
  ))}
  </div>)
}

export default Education;