import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
      <SectionTitle main center>
        Hello,I'm Seun Salu, <br />
        A Geoscientist and a self-taught FrontEnd Engineer.


      </SectionTitle>
      <SectionText>
        My full name is Salu Oluwaseun Oladipupo, but some friends call me Gravity. <br />
        I learnt programming by the motivation to simplify day-to-day tasks and more importantly,solving scientific problems.
        


      </SectionText>

      <Button onClick={()=> window.location = 'https://tu-empower-africa.org/researchers'}>Learn More</Button>
    

    
        






      </LeftSection>
    </Section>
      
  </div>
);

export default Hero;