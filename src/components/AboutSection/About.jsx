import React from 'react';

// Components
import { SectionLayout } from '..';

// Assets
import { about } from '../../../config/content';

function About() {
  return <SectionLayout id='about' title={about.title} description={about.content} />;
}

export default About;
