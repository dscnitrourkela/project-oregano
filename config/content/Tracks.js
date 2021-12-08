/* eslint-disable max-len */
const TrackPrizes = [
  '250$ Digital Ocean Credits ',
  'Egghead Coupon - 1 year',
  'Wolfram Lifetime Access',
  'Taskade Lifetime Pro Plan',
  'Repl.it Subscription for all members',
  'Sashido Subscription for all members',
  'Voiceflow Premium for all members',
  'XYZ domain names for all members',
  // 'Linode Credits for all members',
];

const AdditionalTrackPrizes = [
  '150$ Digital Ocean Credits',
  'Egghead Coupon - 1 year',
  'Leading Learners Access',
  'Taskade Lifetime Pro Plan',
  'Repl.it Subscription for all members',
  'Sashido Subscription for all members',
  'Voiceflow Premium for all members',
  'XYZ domain names for all members',
];

export default {
  title: 'Tracks',
  content:
    'We’ll be suggesting the below four themes or impact areas to help spark your ideas. Remember that you’re welcome to build with the technologies of your choice, across any areas that you think would drive impact for these issues, so feel free to think outside the box too!',
  tracks: [
    {
      id: 'track-1',
      title: 'INCLUSIVITY',
      content:
        'This track is a reminder of the beauty of inclusion and equality. Base your hacks on altering the social norms and build for the society on the lines of women empowerment, gender emancipation and societal justice.',
      alt: 'Inclusivity Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_1_nhwkro.png',
        width: '80%',
      },
      color1: '#FFC41D',
      color2: '#B98C0A',
      prizes: TrackPrizes,
    },
    {
      id: 'track-2',
      title: 'COMMUNITY',
      content:
        'This track serves to build for the community. Build for solving the problems of the society. Find solutions for the problems in healthcare, education etc. Each and every project that makes our lives better will adore this track.',
      alt: 'Community Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Group_121_2_dma5gh.png',
        width: '65%',
      },
      color1: '#71A0CE',
      color2: '#3A7BD5',
      prizes: TrackPrizes,
    },
    {
      id: 'track-3',
      title: 'SUSTAINABILITY',
      content:
        'This track will seek to build projects that will make our lives more sustainable, including but not limited to teaching others how to ethically consume and creating greener technologies for the future.',
      alt: 'Sustainability Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/v1638973865/hacknitr/plant_ukfeoq.png',
        width: '48%',
      },
      color1: '#8FA963',
      color2: '#648B23',
      prizes: TrackPrizes,
    },
    {
      id: 'track-4',
      title: 'OPEN INNOVITY',
      content:
        "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
      alt: 'Open Innovity Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/Saly-43_n6atnu.png',
        width: '80%',
      },
      color1: '#E78967',
      color2: '#CA5024',
      prizes: TrackPrizes,
    },
  ],
  additionalTracks: [
    {
      id: 'track-5',
      title: 'BEST GIRLS TEAM',
      content:
        "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
      alt: 'Open Innovity Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/ToyFaces_Tansparent_BG_47_1_ggn8zl.png',
        width: '50%',
      },
      color1: '#D290FD',
      color2: '#7209B7',
      prizes: AdditionalTrackPrizes,
    },
    {
      id: 'track-6',
      title: 'BEST FRESHERS TEAM',
      content:
        "This track demands creativity. Don't feel afraid to think out of the box and bend the rules. Be innovative by taking inspiration from existing ideas and build something unique that aligns with your ideas. Like we did to the track name!",
      alt: 'Open Innovity Icon',
      img: {
        src: 'https://res.cloudinary.com/db4zymomi/image/upload/hacknitr/clock_mba6wb.png',
        width: '50%',
      },
      color1: '#8D8D8C',
      color2: '#3F3F3F',
      prizes: AdditionalTrackPrizes,
    },
  ],
};
