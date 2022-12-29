/* eslint-disable max-len */
// const TrackPrizes = [
//   '250$ Digital Ocean Credits ',
//   'Egghead Coupon - 1 year',
//   'Wolfram Lifetime Access',
//   'Taskade Lifetime Pro Plan',
//   'Repl.it Subscription for all members',
//   'Sashido Subscription for all members',
//   'Voiceflow Premium for all members',
//   'XYZ domain names for all members',
// ];
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

// const AdditionalTrackPrizes = [
//   '150$ Digital Ocean Credits',
//   'Egghead Coupon - 1 year',
//   'Leading Learners Access',
//   'Taskade Lifetime Pro Plan',
//   'Repl.it Subscription for all members',
//   'Sashido Subscription for all members',
//   'Voiceflow Premium for all members',
//   'XYZ domain names for all members',
// ];

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
