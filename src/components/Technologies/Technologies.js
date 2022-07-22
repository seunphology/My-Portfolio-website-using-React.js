import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>

      I've worked with a range of technologies from the world of Data analytics to web development.
      From Design all the way to Back-end.


    </SectionText>
    <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Currently building stuff with <br/> 
          Javascript and React.js.
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiFirebase size="3rem" />
      <ListContainer>
        <ListTitle>Back-End</ListTitle>
        <ListParagraph>
          I've done a few projects with <br/> 
          Node and Databases
        </ListParagraph>
      </ListContainer>
    </ListItem>

    <ListItem>
      <DiZend size="3rem" />
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Experience with <br/> 
          AdobeXD,Illustrator and Figma
        </ListParagraph>
      </ListContainer>
    </ListItem>
    </List>



  </Section>
);

export default Technologies;
