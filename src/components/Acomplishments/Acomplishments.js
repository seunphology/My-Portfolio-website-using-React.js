import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, } from './AcomplishmentsStyles';

const data = [
 /* { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }*/

  {School:'University of Lagos', text: 'Geography'},
  {School: 'TU München', text: 'Sustainable Resource Management',},
  {School: 'University of Bremen' , text: 'Geosciences',}
];

const Acomplishments = () => (
  <section>
    <SectionTitle>Education</SectionTitle>
    <Boxes>

      {data.map((card, index)=> (
        <Box key={index}>
          <BoxNum>{card.School}</BoxNum>
          <BoxText>{card.text}</BoxText>
          
        


        </Box>
      ))}





    </Boxes>






  </section>
   
   
);

export default Acomplishments;
