/* eslint-disable max-len */
const TrackPrizesPolygon = [
  '₹10,000 for the best hack built on Ethereum',
  '₹15,000 for the best hack built on Ethereum + Polygon',
  'Eligibilty to apply for internship/full-time roles and seed funding of up to 5000 USD for winners!',
];
const TrackPrizesFilecoin = [
  'Filecoin is an open-source cloud storage marketplace, protocol, and cryptocurrency.',
  '₹20000 for best use of IPFS and/or Filecoin',
];
const TrackPrizesSolana = [
  'Young gun - $USDC 100 for the best project beginners just starting out on Solana and/or',
  'Rising teknoking - $USDC 250 for the best project that goes into depth, demonstrating higher-order code and/or',
  'Master glasseater - $USDC 500 for the best advanced project that is almost ready for full-time development.',
];
const TrackPrizesReplit = [
  '5,000 INR to winning project of the hackathon (must be deployed on Replit)',
  'Replit schwags to 5 eligible submissions deployed on Replit.',
  'Eligibility to apply for internship/full-time roles at Replit',
];
const TrackPrizesGoDaddy = [
  'Register your domain name with GoDaddy Registry for a chance to win a Hack from Home Kit!',
  'Each Kit contains wireless earbuds, blue light glasses, selfie ring light and a pouch for easy transport.',
];
const TrackPrizesTwilio = [
  'Build a hack that simplifies your life using any Twilio API for a chance to win some awesome prizes!',
  'Get started with $50 in free credit!',
  'GameGo Console and more!',
];
const TrackPrizesCockRoachDB = [
  'CockroachDB, the cloud-native, distributed SQL database that provides next-level consistency, ultra-resilience, data locality, and massive scale to modern cloud applications.',
];
const TrackPrizesQuillAudits = [
  'Smart Contract Audit is a comprehensive process to scrutinize a smart contract’s code that is used to interact with a cryptocurrency or blockchain.',
];
const TrackPrizesVelo = [
  'We know how difficult it can be to create a phenomenal website in a short period of time, especially when it comes to hackathons. Velo by Wix cuts down your development without sacrificing on functionality!',
];
const TrackPrizesAuth0 = [
  'Why spend hours building features like social sign-in, Multi-Factor Authentication, and passwordless log-in when you can enable them through Auth0 straight out of the box? ',
  "-Exclusive Auth0 Swag made for MLH including a 12oz tumbler, Rubik's Cube, and sticker!",
];

export default {
  id: 'prizes',
  title: 'Win Exciting Prizes and Swags',
  description: 'Click on the tabs to see the various prizes',
  STAGES: {
    OVERALL: 'Prizes',
    TRACKS: 'Sponsored Tracks',
    SWAGS: 'Swags for all',
    ALL: 'Prizes for all',
  },

  PRIZES: [
    {
      id: 'overall-prize-1',
      medal: {
        color1: '#F7971E',
        color2: '#FFD200',
        text: '1st',
      },
      amount: '₹20,000',
      title: 'Overall 1st Prize',
      prizes: ['₹20,000'],
    },
    {
      id: 'overall-prize-2',
      medal: {
        color1: '#757F9A',
        color2: '#D7DDE8',
        text: '2nd',
      },
      amount: '₹15,000',
      title: 'Overall 2nd Prize',
      prizes: ['₹15,000'],
    },
    {
      id: 'overall-prize-3',
      medal: {
        color1: '#232526',
        color2: '#414345',
        text: '3rd',
      },
      amount: '₹10,000',
      title: 'Overall 3rd Prize',
      prizes: ['₹10,000'],
    },
  ],

  TRACK_DETAILS: {
    title: 'Tracks',
    content:
      'We’ll be suggesting the below four themes or impact areas to help spark your ideas. Remember that you’re welcome to build with the technologies of your choice, across any areas that you think would drive impact for these issues, so feel free to think outside the box too!',
    tracks: [
      {
        id: 'track-1',
        title: 'POLYGON',
        content:
          'This track is a reminder of the beauty of inclusion and equality. Base your hacks on altering the social norms and build for the society on the lines of women empowerment, gender emancipation and societal justice.',
        alt: 'Polygon logo',
        img: {
          src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/polygon_vvmhvg.png',
          width: '60%',
        },
        color1: '#FFC41D',
        color2: '#B98C0A',
        prizes: TrackPrizesPolygon,
      },
      {
        id: 'track-2',
        title: 'FILECOIN',
        content:
          'This track serves to build for the community. Build for solving the problems of the society. Find solutions for the problems in healthcare, education etc. Each and every project that makes our lives better will adore this track.',
        alt: 'FILECOIN LOGO',
        img: {
          src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667588043/hn/Filecoin_Coloured_White_Text-1_q7q08w.png',
          width: '65%',
        },
        color1: '#71A0CE',
        color2: '#3A7BD5',
        prizes: TrackPrizesFilecoin,
      },
      {
        id: 'track-3',
        title: 'SOLANA',
        content:
          'This track will seek to build projects that will make our lives more sustainable, including but not limited to teaching others how to ethically consume and creating greener technologies for the future.',
        alt: 'SOLANA LOGO',
        img: {
          src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667587758/hn/Solana_Dark_wmguj1.svg',
          width: '50%',
        },
        color1: '#8FA963',
        color2: '#648B23',
        prizes: TrackPrizesSolana,
      },
      {
        id: 'track-4',
        title: 'REPLIT',
        content:
          "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
        alt: 'REPLIT LOGO',
        img: {
          src: 'https://res.cloudinary.com/ratnakar5938/image/upload/v1667588167/hn/replit_fpppab.svg',
          width: '65%',
        },
        color1: '#E78967',
        color2: '#CA5024',
        prizes: TrackPrizesReplit,
      },
    ],
    additionalTracks: [
      {
        id: 'track-5',
        title: 'TWILIO',
        content:
          "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
        alt: 'Twilio Logo',
        img: {
          src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1672148510/Sponsors/twilio_xahhqf.png',
          width: '50%',
        },
        color1: '#D290FD',
        color2: '#7209B7',
        prizes: TrackPrizesTwilio,
      },
      {
        id: 'track-6',
        title: 'GoDaddy Registry',
        content:
          "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
        alt: 'GoDaddy Registry Logo',
        img: {
          src: 'https://res.cloudinary.com/dme9vltjf/image/upload/v1672148509/Sponsors/GoDaddy_uhfn0e.png',
          width: '50%',
        },
        color1: '#8D8D8C',
        color2: '#3F3F3F',
        prizes: TrackPrizesGoDaddy,
      },
      {
        id: 'track-7',
        title: 'Auth0',
        alt: 'Auth0 Logo',
        img: {
          src: 'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672146559/HackNITR/brand_evolution_logo_Auth0_white_m8hcor.svg',
          width: '50%',
        },
        color1: '#8D8D8C',
        color2: '#3F3F3F',
        prizes: TrackPrizesAuth0,
      },
      {
        id: 'track-8',
        title: 'CockRoach DB',
        alt: 'CockRoach DB Logo',
        img: {
          src: 'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672145667/HackNITR/Screenshot_from_2022-12-27_18-20-16_zuupj6.png',
          width: '50%',
        },
        color1: '#FFC41D',
        color2: '#B98C0A',
        prizes: TrackPrizesCockRoachDB,
      },
      {
        id: 'track-9',
        title: 'QuillAudits',
        content:
          'Smart Contract Audit is a comprehensive process to scrutinize a smart contract’s code that is used to interact with a cryptocurrency or blockchain.',
        alt: 'QuillAudits Logo',
        img: {
          src: 'data:image/png;base64,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',
          width: '50%',
        },
        color1: '#E78967',
        color2: '#CA5024',
        prizes: TrackPrizesQuillAudits,
      },
      {
        id: 'track-10',
        title: 'Velo',
        alt: 'Velo Logo',
        img: {
          src: 'https://res.cloudinary.com/dmutbjmoo/image/upload/v1672147160/HackNITR/download_qjusxz.png',
          width: '50%',
        },
        color1: '#D290FD',
        color2: '#7209B7',
        prizes: TrackPrizesVelo,
      },
    ],
  },

  SWAGS: [
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/WhatsApp_Image_2021-10-09_at_12.36_1_nf9ntu.png',
      alt: 'HackNITR 4.0 Tshirt',
      width: '150px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/stickers_pack_1_882x882_pzavkm.png',
      alt: 'Github Stickers',
      width: '20  0px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Exp_1_1_czmu88.png',
      alt: 'HackNITR Pizza Sticker',
      width: '150px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/macintosh_1_w0qhqt.png',
      alt: 'Hackintosh Sticker',
      width: '130px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_131_ztdbg4.png',
      alt: 'Github Tshirts',
      width: '250px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_gmhy2o.png',
      alt: 'Hack the future sticker',
      width: '150px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Exp_2_1_ldibf8.png',
      alt: 'POOP Sticker',
      width: '200px',
    },
    {
      src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Small_Octocat_600x600_crop_center_1_owztsy.png',
      alt: 'Github Octocat Figurine',
      width: '150px',
    },
  ],
  ALL_PRIZES: [
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/echoAR_-_Logo_2020_-_Knockout_c9smwf.png',
        width: '70%',
      },
      title: 'EchoAR Credits',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/lincode_y9pcdh.png',
        width: '70%',
      },
      title: 'Linode Credits',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/Untitled_nqdjaf.png',
        width: '70%',
      },
      title: 'Repl.it Subscription',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/sashido_xiu6is.png',
        width: '75%',
      },
      title: 'Shashido Subscription',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/taskade-circle-logo-full-white_iakfy1.png',
        width: '70%',
      },
      title: 'Taskade 1yr Subscription',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/Voiceflow_White_iczupf.png',
        width: '70%',
      },
      title: 'Voiceflow Subscription',
    },
    {
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/sponsors/xyz_ldytud.png',
        width: '70%',
      },
      title: 'XYZ Domains',
    },
  ],
};
