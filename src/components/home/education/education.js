// import { Avatar, Card, CardHeader, CardSubtitle, CardTitle, DateRangeSVGIcon, DescriptionSVGIcon, EmailSVGIcon, List, ListItem, MediaContainer, PhoneSVGIcon } from 'react-md';
import { Card } from 'react-md';
import {education} from './helper'

import './education.scss';

const Education  = () => {
  return (
    <div>
    <div className='titleEduc'> Education </div>
 
  < div className='education'>
{education.map((el,i)=>(
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

export default Education;