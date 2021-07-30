/* eslint-disable max-len */
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

export default {
  hacknitr: {
    img: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/hkmogkgvx6kpf07xbln8.png',
    alt: 'HackNITR 3.0',
  },
  icons: {
    content1: 'Sit mi, porttitor sapien, morbi id. Arcu,',
    content2: 'nibh In nec pulvinar praesen',
  },
  cards: [
    {
      title: 'About NIT Rourkela',
      text: 'With a total strength of around 7000 students, NIT Rourkela is one of the most coveted institutes for higher studies by future technocrats. With its lush green and humongous area, it indeed makes a pleasant campus impression.',
      id: 'footer-card-1',
      img: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/j1hylhwi5lv6kyaksvbj.png',
        alt: 'NIT Rourkela',
      },
    },
    {
      title: 'About Diamond Jubilee',
      text: 'Established in the year 1961, NIT Rourkela celebrates its 60th anniversary this year (2021). Through the years of the tireless striving of its administration, students, and all stakeholders, it has become a prominent beacon of knowledge.',
      id: 'footer-card-2',
      img: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/qevwkbokfctprtujrfhs.png',
        alt: 'Diamond Jubilee NIT Rourkela',
      },
    },
  ],
  socials: [
    {
      icon: faInstagram,
      link: 'https://www.instagram.com/hacknitr/',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/hacknitr/',
    },
    {
      icon: faDiscord,
      link: 'https://www.facebook.com/hacknitr/',
    },
    {
      icon: faGithubSquare,
      link: 'https://github.com/dscnitrourkela/project-oregano',
    },
    {
      icon: faTwitterSquare,
      link: 'https://twitter.com/hacknitr',
    },
  ],
  organisers: [
    {
      id: 1,
      link: 'https://dscnitrourkela.org/team.html',
      span: true,
      image: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/isjepabdq6poep7lmzxf.png',
        alt: 'Google DSC NIT Rourkela',
      },
    },
    {
      id: 2,
      link: 'https://opencodenitr.herokuapp.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/gcezuprj0neujdhqanr4.png',
        alt: 'Opencode',
      },
    },
    {
      id: 3,
      link: 'https://education.github.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/slbqxtegtcrzwbrni4na.png',
        alt: 'Github Campus Expert',
      },
    },
    {
      id: 4,
      link: 'https://hackclub.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/po6v5ff92trierngzudg.png',
        alt: 'Hackclub NIT Rourkela',
      },
    },
  ],
};
