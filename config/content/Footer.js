/* eslint-disable max-len */
import {
  faTwitterSquare,
  faInstagram,
  faLinkedin,
  faGithubSquare,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

export default {
  links: [
    {
      title: 'About Us',
      id: 'about-us',
      url: '/#About',
    },
    {
      title: 'Contact Us',
      id: 'contact-us',
      url: 'mailto:hacknitr@gmail.com',
    },
    {
      title: 'Sponsor Us',
      id: 'sponsor-us',
      url: 'https://tally.so/r/3jl2za',
    },
  ],
  Nitr: {
    imgSrc: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/nitr_logo_vdj3aw.png',
  },

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
      text: 'With a strength of around 7000 students, NIT Rourkela is one of the most coveted institutes for higher studies by future technocrats. With its lush green and humongous area, it indeed makes a pleasant campus impression.',
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
      name: 'fb',
      icon: faFacebook,
      link: 'https://facebook.com/hacknitr',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/fb_zzl91w.png',
    },
    {
      name: 'insta',
      icon: faInstagram,
      link: 'https://www.instagram.com/hacknitr/',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/insta_aktzjs.png',
    },
    {
      name: 'li',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/company/hacknitr/',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/linkedin_eoenzs.png',
    },
    // {
    //   icon: faDiscord,
    //   link: 'https://hacknitr.com/discord',
    // },
    {
      name: 'gh',
      icon: faGithubSquare,
      link: 'https://github.com/dscnitrourkela/project-oregano',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/github_ve2kbe.png',
    },
    {
      name: 'twitter',
      icon: faTwitterSquare,
      link: 'https://twitter.com/hacknitr',
      imgLink: 'https://res.cloudinary.com/dxsyc4p2j/image/upload/v1699473996/TwitterX_uua6eg.png',
    },
  ],
  organisers: [
    {
      id: 1,
      link: 'https://dscnitrourkela.org/team.html',
      span: true,
      image: {
        src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027911/HackNITR/Frame_11_ilwmzh_nugoqr.png',
        alt: 'Google DSC NIT Rourkela',
      },
      column: 'span 2',
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
      text: 'Terms and Conditions',
      href: 'https://drive.google.com/file/d/18w9fE4ZhUrugPAlXH7tqxbKQ16Cr6lqn/view?pli=1',
    },
    {
      text: 'Privacy Policy',
      href: 'https://drive.google.com/file/d/18w9fE4ZhUrugPAlXH7tqxbKQ16Cr6lqn/view?pli=1',
    },
  ],
};
