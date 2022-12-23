/* eslint-disable max-len */
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import config from '../website';

export default {
  hacknitr: {
    img: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/logo1_rg97i6.png',
    alt: 'HackNITR 4.0',
  },
  icons: {
    content1: 'For more updates,',
    content2: 'follow us on all social media.',
  },
  copyright: {
    content: `Architected with ❤️ \nby HackNITR Team`,
  },
  cards: [
    {
      title: 'About NIT Rourkela',
      text: 'With a total strength of around 7000 students, NIT Rourkela is one of the most coveted institutes for higher studies by future technocrats. With its lush green and humongous area, it indeed makes a pleasant campus impression.',
      id: 'footer-card-1',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/nitr_huzgbq.png',
        alt: 'NIT Rourkela',
      },
    },
    // {
    //   title: 'About Diamond Jubilee',
    //   text: 'Established in the year 1961, NIT Rourkela celebrates its 60th anniversary this year. Through the years of the tireless striving of its administration, students, and all stakeholders, it has become a beacon of knowledge.',
    //   id: 'footer-card-2',
    //   img: {
    //     src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/diamond_nrpehm.png',
    //     alt: 'Diamond Jubilee NIT Rourkela',
    //   },
    // },
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
    // {
    //   icon: faDiscord,
    //   link: 'https://hacknitr.com/discord',
    // },
    {
      icon: faFacebook,
      link: 'https://facebook.com/hacknitr',
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
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/DSC_NIT_Rourkela_Dark_Horizontal-Logo_1_3_smh3je.png',
        alt: 'Google DSC NIT Rourkela',
      },
    },
    {
      id: 2,
      link: 'https://opencodenitr.herokuapp.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/logo_plus_wordmark_white_ulz4wt.png',
        alt: 'Opencode',
      },
    },
    {
      id: 3,
      link: 'https://education.github.com/',
      span: false,
      image: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/GitHub_CE_2_u8jaum.png',
        alt: 'Github Campus Expert',
      },
    },
  ],
  impLinks: [
    {
      text: 'MLH Code of Conduct',
      href: config.codeOfConduct,
    },
    {
      text: 'Terms and Conditions',
      href: config.termsConditions,
    },
    {
      text: 'Privacy Policy',
      href: config.privacyPolicy,
    },
    {
      text: 'Sponsor Us',
      href: config.sponsor,
    },
  ],
};
