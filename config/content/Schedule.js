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
  title: 'HackNITR Event',
  description: 'Be there!',
  start: '2019-12-29 18:00:00 +0100',
  duration: [3, 'hour'],
};

const event2 = {
  title: 'HackNITR Event 2',
  description: 'Be there!',
  start: '2019-12-29 18:00:00 +0100',
  duration: [3, 'hour'],
};

const event3 = {
  title: 'HackNITR Event 3',
  description: 'Be there!',
  start: '2019-12-29 18:00:00 +0100',
  duration: [3, 'hour'],
};

const event4 = {
  title: 'HackNITR Event 4',
  description: 'Be there!',
  start: '2019-12-29 18:00:00 +0100',
  duration: [3, 'hour'],
};

const event5 = {
  title: 'HackNITR Event 5',
  description: 'Be there!',
  start: '2019-12-29 18:00:00 +0100',
  duration: [3, 'hour'],
};

const url1 = google(event);
const url2 = google(event2);
const url3 = google(event3);
const url4 = google(event4);
const url5 = google(event5);

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
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#71A0CE',
      linkGoogle: url1,
      linkics: link1,
    },
    {
      id: 2,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url2,
      linkics: link2,
    },
    {
      id: 3,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#8FA963',
      linkGoogle: url3,
      linkics: link3,
    },
    {
      id: 4,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#71A0CE',
      linkGoogle: url4,
      linkics: link4,
    },
    {
      id: 5,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url5,
      linkics: link5,
    },
  ],
  day2: [
    {
      id: 1,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#EBB722',
      linkGoogle: url1,
      linkics: link1,
    },
    {
      id: 2,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#8FA963',
      linkGoogle: url2,
      linkics: link2,
    },
    {
      id: 3,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url3,
      linkics: link3,
    },
    {
      id: 4,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#EBB722',
      linkGoogle: url4,
      linkics: link4,
    },
    {
      id: 5,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#8FA963',
      linkGoogle: url5,
      linkics: link5,
    },
  ],
  day3: [
    {
      id: 1,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url1,
      linkics: link1,
    },
    {
      id: 2,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#71A0CE',
      linkGoogle: url2,
      linkics: link2,
    },
    {
      id: 3,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#EBB722',
      linkGoogle: url3,
      linkics: link3,
    },
    {
      id: 4,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#8FA963',
      linkGoogle: url4,
      linkics: link4,
    },
    {
      id: 5,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url5,
      linkics: link5,
    },
  ],
  day4: [
    {
      id: 1,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url1,
      linkics: link1,
    },
    {
      id: 2,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#71A0CE',
      linkGoogle: url2,
      linkics: link2,
    },
    {
      id: 3,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#EBB722',
      linkGoogle: url3,
      linkics: link3,
    },
    {
      id: 4,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#8FA963',
      linkGoogle: url4,
      linkics: link4,
    },
    {
      id: 5,
      head: 'Title of event or the lecture',
      subhead: 'Subheading or name of speaker',
      color: '#E78967',
      linkGoogle: url5,
      linkics: link5,
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
