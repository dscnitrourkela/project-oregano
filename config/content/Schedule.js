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
  title:
    'Roadmap To Compettitive Programming and Career Guidance -Shantanu Shubham (Coding Ninjas)',
  description: 'Be there!',
  start: '2021-10-28 19:00:00 ',
  duration: [0.5, 'hour'],
  location: 'https://hacknitr.tech/live',
};

const event2 = {
  title: 'Codedamn',
  description: 'Be there!',
  start: '2021-10-28 20:00:00',
  end: '2021-10-28 20:45:00',
  location: 'https://hacknitr.tech/live',
};

const event3 = {
  title: 'MiniEvent 1 -Team Building',
  description: 'Be there!',
  start: '2021-10-28 22:00:00',
  end: '2021-10-29 00:00:00',
  location: 'https://hacknitr.tech/live',
};

const event4 = {
  title: 'Koii Network',
  description: 'Be there!',
  start: '2021-10-29 09:45:00',
  end: '2021-10-29 10:00:00',
  location: 'https://hacknitr.tech/live',
};

const event5 = {
  title: 'Build Your Personal Blog With Next.js, Storyblok, and Layer0 -Rishi Raj Jain',
  description: 'Be there!',
  start: '2021-10-29 12:00:00',
  end: '2021-10-29 12:00:00',
  location: 'https://hacknitr.tech/live',
};

const event6 = {
  title: 'Introduction to the world of Product Management -Suhaas & Smarth',
  description: 'Be there!',
  start: '2021-10-29 16:00:00',
  end: '2021-10-29 17:00:00',
  location: 'https://hacknitr.tech/live',
};

const event7 = {
  title: 'Opening Ceremony | Making a career out of hackathons - Shaswat Lenka, Abel Mathew',
  description: 'Be there!',
  start: '2021-10-29 18:00:00',
  end: '2021-10-29 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event8 = {
  title: 'Consequences of UI/UX in our decisions -Ayush Bajpai',
  description: 'Be there!',
  start: '2021-10-29 21:00:00',
  end: '2021-10-29 21:45:00',
  location: 'https://hacknitr.tech/live',
};

const event9 = {
  title: 'Mini Event 2 - Gaming',
  description: 'Be there!',
  start: '2021-10-29 22:00:00',
  end: '2021-10-30 00:00:00',
  location: 'https://hacknitr.tech/live',
};

const event10 = {
  title: 'How to ML in Hackathons -Rakshaa Viswanathan',
  description: 'Be there!',
  start: '2021-10-30 09:00:00',
  end: '2021-10-30 10:00:00',
  location: 'https://hacknitr.tech/live',
};

const event11 = {
  title: 'Devfolio -workshop',
  description: 'Be there!',
  start: '2021-10-30 10:30:00',
  end: '2021-10-30 11:00:00',
  location: 'https://hacknitr.tech/live',
};

const event12 = {
  title: 'Getting Started with SAWO SDK, Abhishek Chandrasenan - SAWO',
  description: 'Be there!',
  start: '2021-10-30 12:00:00',
  end: '2021-10-30 01:00:00',
  location: 'https://hacknitr.tech/live',
};

const event13 = {
  title: 'Mini Event-3 -MLH Event',
  description: 'Be there!',
  start: '2021-10-30 16:00:00',
  end: '2021-10-30 16:30:00',
  location: 'https://hacknitr.tech/live',
};

const event14 = {
  title: 'Ploomber Workshop',
  description: 'Be there!',
  start: '2021-10-30 17:00:00',
  end: '2021-10-30 17:30:00',
  location: 'https://hacknitr.tech/live',
};

const event15 = {
  title: 'Solving Deep Tech Problems  with Open Source -Roshini & Anurag',
  description: 'Be there!',
  start: '2021-10-30 19:00:00',
  end: '2021-10-30 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event16 = {
  title: 'Coding Contest - Coding Ninjas',
  description: 'Be there!',
  start: '2021-10-31 16:00:00',
  end: '2021-10-31 17:00:00',
  location: 'https://hacknitr.tech/live',
};

const event17 = {
  title: 'Pitching Presentation of Top 15',
  description: 'Be there!',
  start: '2021-10-31 17:00:00',
  end: '2021-10-31 18:00:00',
  location: 'https://hacknitr.tech/live',
};

const event18 = {
  title: 'Mini Event 4 - Raahee',
  description: 'Be there!',
  start: '2021-10-31 19:30:00',
  end: '2021-10-31 20:00:00',
  location: 'https://hacknitr.tech/live',
};

const event19 = {
  title: 'Closing Ceremony',
  description: 'Be there!',
  start: '2021-10-31 20:00:00',
  end: '2021-10-31 21:00:00',
  location: 'https://hacknitr.tech/live',
};

const event20 = {
  title: 'Hacking Hour Starts',
  description: 'Be there!',
  start: '2021-10-29 20:00:00',
  end: '2021-10-31 09:00:00',
  location: 'https://hacknitr.tech',
};

const event21 = {
  title: 'Hacking Hour Ends',
  description: 'Be there!',
  start: '2021-10-29 20:00:00',
  end: '2021-10-31 09:00:00',
  location: 'https://hacknitr.tech',
};

const event22 = {
  title: 'Initial Evaluation Starts',
  description: 'Be there!',
  start: '2021-10-30 20:00:00',
  end: '2021-10-31 00:00:00',
  location: 'https://hacknitr.tech',
};

const event23 = {
  title: 'Initial Evaluation Ends',
  description: 'Be there!',
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
