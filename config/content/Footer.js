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
      text: 'Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.',
      id: 'footer-card-1',
      img: {
        src: 'https://res.cloudinary.com/dalqfvowk/image/upload/project-oregano/assets/j1hylhwi5lv6kyaksvbj.png',
        alt: 'NIT Rourkela',
      },
    },
    {
      title: 'About Diamond Jubilee',
      text: 'Sit mi, porttitor sapien, morbi id. Arcu, nibh facilisis ac nec. In nec pulvinar praesent neque eget velit nunc sit potenti. Diam dignissim.',
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
