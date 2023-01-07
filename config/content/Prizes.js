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
const TrackPrizesVelo = [
  'We know how difficult it can be to create a phenomenal website in a short period of time, especially when it comes to hackathons. Velo by Wix cuts down your development without sacrificing on functionality!',
];
const TrackPrizesAuth0 = [
  'Why spend hours building features like social sign-in, Multi-Factor Authentication, and passwordless log-in when you can enable them through Auth0 straight out of the box? ',
  "-Exclusive Auth0 Swag made for MLH including a 12oz tumbler, Rubik's Cube, and sticker!",
];
const TrackPrizesEarthHacks = [
  'Cash prize of a total of ₹40,000 INR ( ~$480 USD) to be split equally amongst members of one winning team, decided by Earth Hacks.',
];
const TrackPrizesShardeum = [
  'Shardeum is an EVM-based, linearly scalable blockchain that provides low gas fees forever while maintaining true decentralization and solid security through dynamic state sharding.',
  'Total $500',
  '-First($250) -Runnerup($100) -Pool ($50*3)',
];
const TrackPrizesTezos = [
  'Tezos is an open-source platform for assets and applications that can evolve by upgrading itself. Stakeholders govern upgrades to the core protocol, including upgrades to the amendment process itself.',
  '1st prize : 7k INR to team',
];
const TrackPrizesApyHub = [
  'ApyHub is a platform designed by developers for developers used for the discovery and consumption of software utility services (Apy’s) with the ultimate goal of building leaner applications faster.',
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
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027909/HackNITR/brand_evolution_logo_Auth0_white_m8hcor_rl1thh.svg',
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
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028465/HackNITR/Screenshot_from_2022-12-27_18-20-16_zuupj6_nu8pzj.png',
          width: '50%',
        },
        color1: '#FFC41D',
        color2: '#B98C0A',
        prizes: TrackPrizesCockRoachDB,
      },
      {
        id: 'track-9',
        title: 'Velo',
        alt: 'Velo Logo',
        img: {
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027910/HackNITR/download_qjusxz_dccnpa.png',
          width: '50%',
        },
        color1: '#D290FD',
        color2: '#7209B7',
        prizes: TrackPrizesVelo,
      },
      {
        id: 'track-10',
        title: 'EarthHacks',
        alt: 'EarthHacks Logo',
        img: {
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027910/HackNITR/download_6_ooswsx_d9idrb.png',
          width: '50%',
        },
        color1: '#8FA963',
        color2: '#648B23',
        prizes: TrackPrizesEarthHacks,
      },
      {
        id: 'track-11',
        title: 'Shardeum',
        alt: 'Shardeum Logo',
        img: {
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673028465/HackNITR/Shardeum_Logo_Light_thajcd_zsfpax.svg',
          width: '50%',
        },
        color1: '#8D8D8C',
        color2: '#3F3F3F',
        prizes: TrackPrizesShardeum,
      },
      {
        id: 'track-12',
        title: 'ApyHub',
        alt: 'ApyHub Logo',
        img: {
          src: 'https://res.cloudinary.com/dujqfyato/image/upload/v1673027909/HackNITR/apyhub-logo-negative-tm_hncnyj_m2segf.svg',
          width: '50%',
        },
        color1: '#E78967',
        color2: '#CA5024',
        prizes: TrackPrizesApyHub,
      },
      {
        id: 'track-13',
        title: 'Tezos',
        alt: 'Tezos Logo',
        img: {
          src: 'https://assets.devfolio.co/hackathons/63b3a379347c43328212ef6618c1aaa3/sponsors/2989606dfb894c4b8df46a5e7f71a24f/202.jpeg',
          width: '50%',
        },
        color1: '#71A0CE',
        color2: '#3A7BD5',
        prizes: TrackPrizesTezos,
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
