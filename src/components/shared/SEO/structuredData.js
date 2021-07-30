export const eventData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  title: 'HackNITR 3.0',
  description:
    "One of the largest hackathons in the eastern India region, HackNITR is organised by GDSC NIT Rourkela in collaboration with Opencode.",
  image: ' ',
  url: 'https://hacknitr.tech/',
  startDate: '2021-03-13T17:00+05:30', //Needs to be changed
  endDate: '2021-03-14T17:00+05:30',   //Needs to be changed
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: 'https://hacknitr.tech/',
  },
  speaker: [
    {
      '@type': 'Person',
      name: '',
    },
    {
      '@type': 'Person',
      name: '',
    },
    {
      '@type': 'Person',
      name: '',
    },
    {
      '@type': 'Person',
      name: '',
    }
  ],
  organization: {
    '@type': 'Organization',
    title: 'HackNITR 3.0',
    url: 'https://hacknitr.tech/',
    logo: {
      src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png',
      alt: 'HackNITR 3.0',
    }
  },
  social: {
    '@type': 'Social',
    fbAppID: '100644471452393',
    twitter: 'https://twitter.com/hacknitr/'
  }
};

export const breadcrumbsData = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'About',
        item: 'https://hacknitr.tech/about',
      },
      {
        '@type': 'ListItem',
        position: '3',
        name: 'Register',
        item: 'https://devfolio.co/hackathons',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'Tracks',
        item: 'https://hacknitr.tech/tracks',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'Sponsors',
        item: 'https://hacknitr.tech/sponsors',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'Prizes',
        item: 'https://hacknitr.tech/prizes',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'FAQ',
        item: 'https://hacknitr.tech/faq',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: '1',
        name: 'Home',
        item: 'https://hacknitr.tech/',
      },
      {
        '@type': 'ListItem',
        position: '2',
        name: 'Contact',
        item: 'https://hacknitr.tech/contact',
      },
    ],
  },
];

export const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      title: 'What is a Hackathon? How different is Online Hackathon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans a: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: 'How to register?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans b: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: 'Who can participate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans c: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: 'What if I haven’t been to a Hackathon before?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans d: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: "What if I don't have a team or idea?",
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans e: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: 'How can I attend the event?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans f: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    },
    {
      '@type': 'Question',
      title: 'what could be the size of a team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          'Ans g: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis.',
      },
    }
  ],
};
