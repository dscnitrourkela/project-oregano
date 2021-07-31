import config from '../../../../config/website';
import { faq } from '../../../../config/content';

export const logoData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  url: config.siteUrl,
  logo: `${config.siteUrl}${config.siteLogo}`,
};

export const eventData = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  title: config.siteTitle,
  name: `${config.siteTitle} Hackathon`,
  description: config.siteDescription,
  image: `${config.siteUrl}${config.siteLogo}`,
  url: config.siteUrl,
  startDate: '2021-10-28T17:00+05:30',
  endDate: '2021-10-31T22:00+05:30',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
  location: {
    '@type': 'VirtualLocation',
    url: config.siteUrl,
  },
  // Update Later
  // speaker: [
  //   {
  //     '@type': 'Person',
  //     name: '',
  //   },
  // ],
  organization: {
    '@type': 'Organization',
    title: config.siteTitle,
    url: config.siteUrl,
    logo: {
      src: `${config.siteUrl}${config.siteLogo}`,
      alt: config.siteTitle,
    },
  },
  social: {
    '@type': 'Social',
    fbAppID: config.siteFBAppID,
    twitter: config.twitter,
  },
};

export const breadcrumbsData = [
  { name: 'Register', item: config.register },
  { name: 'Discord', item: config.discord },
  { name: 'Sponsor Us', item: config.sponsor },
].map(({ name, item }) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: '1',
      name: 'Home',
      item: config.siteUrl,
    },
    {
      '@type': 'ListItem',
      position: '2',
      name,
      item,
    },
  ],
}));

export const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: Object.keys(faq.questions).map((key) => ({
    '@type': 'Question',
    name: faq.questions[key].question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.questions[key].answer,
    },
  })),
};
