/* eslint-disable max-len */
import { google, ics } from 'calendar-link';

/**
 * ! Make sure to include all the important links in the description
 * 1. Website link
 * 2. Event link
 *    - Could be hacknitr.live
 *    - Could be zoom or gmeet
 * 3. Add all the necessary details appropriately (use spacing and line gapps in description : \n)
 */
const event = {
  title: 'Roadmap To Compettitive Programming and Career Guidance',
  description:
    'This workshop will help you create a roadmap on how to get started with competitive programming and improve with time to perform well in competitive programming contests. \n\nSpeaker: Shantanu Shubham. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-28 19:00:00 ',
  duration: [0.5, 'hour'],
  location: 'https://hacknitr.tech/live',
};

const event2 = {
  title: 'Codedamn',
  description:
    'Join live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-28 20:00:00',
  end: '2021-10-28 20:45:00',
  location: 'https://hacknitr.tech/live',
};

const event3 = {
  title: 'MiniEvent 1 -Team Building',
  description:
    'Discord Stages Talk Sessions \n\nTopic: \n-Hackathon Stories \n-Team Building \n-Make people come and speak (Sell yourself in 1 min) \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-28 22:00:00',
  end: '2021-10-29 00:00:00',
  location: 'https://hacknitr.tech/live',
};

const event4 = {
  title: 'Koii Network',
  description:
    'Join live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 09:45:00',
  end: '2021-10-29 10:00:00',
  location: 'https://hacknitr.tech/live',
};

const event5 = {
  title: 'Build Your Personal Blog With Next.js, Storyblok, and Layer0',
  description:
    'Join me in this session, and learn how I deployed a performance-first, incrementally static regenerated blogs without compromising my requirements. \n\nSpeaker: Rishi Raj Jain. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 12:00:00',
  end: '2021-10-29 12:00:00',
  location: 'https://hacknitr.tech/live',
};

const event6 = {
  title: 'Introduction to the world of Product Management',
  description:
    'This workshop will help you more about Product Management. Product management is the practice of planning, developing, marketing and continuous improvement of a company’s product or products. \n\nSpeaker: Suhas Motwani and Smarth Vasdev. \n\nJoin live at https://hacknitr.tech/live  \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 16:00:00',
  end: '2021-10-29 17:00:00',
  location: 'https://hacknitr.tech/live',
};

const event7 = {
  title: 'Opening Ceremony | Making a career out of hackathons',
  description:
    'Speakers: Shaswat Lenka, Abel Mathew. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 18:00:00',
  end: '2021-10-29 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event8 = {
  title: 'Consequences of UI/UX in our decisions',
  description:
    ' User Experience and Interface is critical to the success or failure of a product in the market but what do we mean by UI/UX? Join the workshop to know more. \n\nSpeaker: Ayush Bajpai. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech ',
  start: '2021-10-29 21:00:00',
  end: '2021-10-29 21:45:00',
  location: 'https://hacknitr.tech/live',
};

const event9 = {
  title: 'Mini Event 2 - Gaming',
  description:
    ' \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 22:00:00',
  end: '2021-10-30 00:00:00',
  location: 'https://hacknitr.tech/live',
};

const event10 = {
  title: 'How to ML in Hackathons',
  description:
    'The workshop will cover basic concepts of ML, how to use them in hackathons, various resources, and a practical exercise to help you understand better. \n\nSpeaker: Rakshaa Viswanathan. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech ',
  start: '2021-10-30 09:00:00',
  end: '2021-10-30 10:00:00',
  location: 'https://hacknitr.tech/live',
};

const event11 = {
  title: 'Devfolio -workshop',
  description:
    '\n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 10:30:00',
  end: '2021-10-30 11:00:00',
  location: 'https://hacknitr.tech/live',
};

const event12 = {
  title: 'Getting Started with SAWO SDK',
  description:
    'This workshop will help you learn more about SAWO SDK and how to use it in your projects. \n\nSpeaker: Abhishek Chandrasenan. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 12:00:00',
  end: '2021-10-30 01:00:00',
  location: 'https://hacknitr.tech/live',
};

const event13 = {
  title: 'Mini Event-3 -MLH Event',
  description:
    '\n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 16:00:00',
  end: '2021-10-30 16:30:00',
  location: 'https://hacknitr.tech/live',
};

const event14 = {
  title: 'Ploomber Workshop',
  description:
    '\n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 17:00:00',
  end: '2021-10-30 17:30:00',
  location: 'https://hacknitr.tech/live',
};

const event15 = {
  title: 'Solving Deep Tech Problems  with Open Source',
  description:
    'Get ready for the great wave—the next big surge of innovation powered by emerging technologies and the approach of deep tech entrepreneurs. Its economic, business, and social impact will be felt everywhere because deep tech ventures aim to solve many of our most complex problems. \n\nSpeaker: Roshini Biswas and Anurag Saha Roy. \n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 19:00:00',
  end: '2021-10-30 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event16 = {
  title: 'Coding Contest - Coding Ninjas',
  description:
    '\n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-31 16:00:00',
  end: '2021-10-31 17:00:00',
  location: 'https://hacknitr.tech/live',
};

const event17 = {
  title: 'Pitching Presentation of Top 15',
  description:
    ' \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-31 17:00:00',
  end: '2021-10-31 18:00:00',
  location: 'https://hacknitr.tech/live',
};

const event18 = {
  title: 'Mini Event 4 - Raahee',
  description:
    '\n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-31 19:30:00',
  end: '2021-10-31 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event19 = {
  title: 'Closing Ceremony',
  description:
    '\n\nJoin live at https://hacknitr.tech/live \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-31 20:00:00',
  end: '2021-10-31 21:00:00',
  location: 'https://hacknitr.tech/live',
};

const event20 = {
  title: 'Hacking Hour Starts',
  description:
    ' \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 20:00:00',
  end: '2021-10-31 09:00:00',
  location: 'https://hacknitr.tech',
};

const event21 = {
  title: 'Hacking Hour Ends',
  description:
    ' \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-29 20:00:00',
  end: '2021-10-31 09:00:00',
  location: 'https://hacknitr.tech',
};

const event22 = {
  title: 'Initial Evaluation Starts',
  description:
    '\n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  start: '2021-10-30 20:00:00',
  end: '2021-10-31 00:00:00',
  location: 'https://hacknitr.tech',
};

const event23 = {
  title:
    ' \n\nDive deep into your innovation journey with HackNITR 3.0 and manifest your skills. Re-envision whats conceivable with hack and turn your fanatical ideas into reality. Calling out all innovators, its your time to showcase your skills and creativity. \n\nRegister at: https://hacknitr.tech',
  description: 'hacknitr.tech',
  start: '2021-10-30 20:00:00',
  end: '2021-10-31 00:00:00',
  location: 'https://hacknitr.tech',
};

const link1 = ics(event);
const link2 = ics(event2);
const link3 = ics(event3);
const link4 = ics(event4);
const link5 = ics(event5);

export default {
  title: 'Mark Your Calenders!',
  content:
    'We have prepared a list of simple steps one needs to follow to become a true hacker. The person who attains all these abilities will yield the power to hack anything.',
  day1: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
    {
      id: 10,
    },
    {
      id: 11,
      head: 'Roadmap To Compettitive Programming and Career Guidance',
      subhead: 'Shantanu Shubham -Coding Ninjas ',
      color: '#E78967',
      linkGoogle: google(event),
      linkics: link1,
    },
    {
      id: 12,
      head: 'Codedamn',
      subhead: 'Codedamn',
      color: '#8FA963',
      linkGoogle: google(event2),
      linkics: link5,
    },
    {
      id: 13,
    },
    {
      id: 14,
      head: 'MiniEvent 1 -Team Building',
      subhead: 'Mini Event',
      color: '#E78967',
      linkGoogle: google(event3),
      linkics: link5,
    },
    {
      id: 15,
      head: 'MiniEvent 1 -Team Building',
      subhead: 'Mini Event',
      color: '#8FA963',
      linkGoogle: google(event3),
      linkics: link5,
    },
  ],
  day2: [
    {
      id: 1,
      head: 'Koii Network',
      subhead: 'API Demo',
      color: '#EBB722',
      linkGoogle: google(event4),
      linkics: link1,
    },
    {
      id: 2,
    },
    {
      id: 3,
      head: 'Build Your Personal Blog With Next.js, Storyblok, and Layer0',
      subhead: 'Rishi Raj Jain',
      color: '#E78967',
      linkGoogle: google(event5),
      linkics: link3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
      head: 'Introduction to the world of Product Management',
      subhead: 'Suhaas & Smarth',
      color: '#8FA963',
      linkGoogle: google(event6),
      linkics: link5,
    },
    {
      id: 9,
    },
    {
      id: 10,
      head: 'Opening Ceremony | Making a career out of hackathons',
      subhead: 'Shaswat Lenka, Abel Mathew',
      color: '#EBB722',
      linkGoogle: google(event7),
      linkics: link4,
    },
    {
      id: 11,
      head: 'Opening Ceremony | Making a career out of hackathons',
      subhead: 'Shaswat Lenka, Abel Mathew',
      color: '#8FA963',
      linkGoogle: google(event7),
      linkics: link5,
    },
    {
      id: 12,
      head: 'Hacking Hour Starts',
      color: '#E78967',
      linkGoogle: google(event20),
      linkics: link3,
    },
    {
      id: 13,
      head: 'Consequences of UI/UX in our decisions',
      subhead: 'Ayush Bajpai',
      color: '#EBB722',
      linkGoogle: google(event8),
      linkics: link4,
    },
    {
      id: 14,
      head: 'Mini Event 2 - Gaming',
      subhead: 'Mini Event',
      color: '#8FA963',
      linkGoogle: google(event9),
      linkics: link5,
    },
    {
      id: 15,
      head: 'Mini Event 2 - Gaming',
      subhead: 'Mini Event',
      color: '#E78967',
      linkGoogle: google(event9),
      linkics: link3,
    },
  ],
  day3: [
    {
      id: 1,
      head: 'How to ML in Hackathons',
      subhead: 'Rakshaa Viswanathan',
      color: '#E78967',
      linkGoogle: google(event10),
      linkics: link1,
    },
    {
      id: 2,
      head: 'Devfolio',
      subhead: 'Workshop',
      color: '#71A0CE',
      linkGoogle: google(event11),
      linkics: link2,
    },
    {
      id: 3,
    },
    {
      id: 4,
      head: 'Getting Started with SAWO SDK',
      subhead: 'Abhishek Chandrasenan - SAWO',
      color: '#8FA963',
      linkGoogle: google(event12),
      linkics: link4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
      head: 'Mini Event 3 - MLH Event',
      subhead: 'Mini Event',
      color: '#8FA963',
      linkGoogle: google(event13),
      linkics: link4,
    },
    {
      id: 9,
      head: 'Ploomber Workshop',
      subhead: 'Workshop',
      color: '#E78967',
      linkGoogle: google(event14),
      linkics: link5,
    },
    {
      id: 10,
      head: 'Solving Deep Tech Problems  with Open Source',
      subhead: 'Roshini & Anurag',
      color: '#EBB722',
      linkGoogle: google(event15),
      linkics: link3,
    },
    {
      id: 11,
    },
    {
      id: 12,
      head: 'Initial Evaluation Starts',
      color: '#8FA963',
      linkGoogle: google(event22),
      linkics: link4,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
    },
  ],
  day4: [
    {
      id: 1,
      head: 'Hacking Hour Ends',

      color: '#E78967',
      linkGoogle: google(event21),
      linkics: link1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
      head: 'Coding Contest - Coding Ninjas',
      subhead: 'Contest',
      color: '#8FA963',
      linkGoogle: google(event16),
      linkics: link4,
    },
    {
      id: 9,
      head: 'Pitching Presentation of Top 15',
      subhead: 'Overall',
      color: '#E78967',
      linkGoogle: google(event17),
      linkics: link5,
    },
    {
      id: 10,
    },
    {
      id: 11,
      head: 'Mini Event 4 - Raahee',
      subhead: 'Mini Event',
      color: '#EBB722',
      linkGoogle: google(event18),
      linkics: link3,
    },
    {
      id: 12,
      head: 'Closing Ceremony',
      subhead: 'Overall',
      color: '#8FA963',
      linkGoogle: google(event19),
      linkics: link4,
    },
    {
      id: 13,
    },
    {
      id: 14,
    },
    {
      id: 15,
      head: 'Initial Evaluation Ends',
      color: '#EBB722',
      linkGoogle: google(event23),
      linkics: link3,
    },
  ],

  date: [
    {
      id: 1,
      day: '28th',
    },
    {
      id: 2,
      day: '29th',
    },
    {
      id: 3,
      day: '30th',
    },
    {
      id: 4,
      day: '31st',
    },
  ],
};
