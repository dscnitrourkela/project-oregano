'use client';

import Image from 'next/image';
import Link from 'next/link';
import Hack from '../hero/hackN.png';

const GhostIcon = () => (
  <svg
    width='20'
    height='17'
    viewBox='0 0 20 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='absolute left-[-3px] bottom-[-1px]'
  >
    <rect x='-0.702148' width='9.6' height='23.2' rx='4.8' fill='#F4E7D6' />
    <rect
      x='10.2295'
      y='4.7998'
      width='9.6'
      height='23.2'
      rx='4.8'
      transform='rotate(1.31616 10.2295 4.7998)'
      fill='#F4E7D6'
    />
    <circle cx='2.09746' cy='5.2' r='1.2' fill='url(#paint0_linear_991_13261)' />
    <circle cx='6.89824' cy='5.2' r='1.2' fill='url(#paint1_linear_991_13261)' />
    <circle cx='12.4979' cy='10.0003' r='1.2' fill='url(#paint2_linear_991_13261)' />
    <circle cx='17.2986' cy='10.0003' r='1.2' fill='url(#paint3_linear_991_13261)' />
    <defs>
      <linearGradient
        id='paint0_linear_991_13261'
        x1='0.900381'
        y1='4.32558'
        x2='3.3266'
        y2='4.36588'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E84B7D' />
        <stop offset='1' stopColor='#B02753' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_991_13261'
        x1='5.70116'
        y1='4.32558'
        x2='8.12738'
        y2='4.36588'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E84B7D' />
        <stop offset='1' stopColor='#B02753' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_991_13261'
        x1='11.3008'
        y1='9.12587'
        x2='13.727'
        y2='9.16617'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E84B7D' />
        <stop offset='1' stopColor='#B02753' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_991_13261'
        x1='16.1016'
        y1='9.12587'
        x2='18.5278'
        y2='9.16617'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E84B7D' />
        <stop offset='1' stopColor='#B02753' />
      </linearGradient>
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <main className='min-h-[70vh] bg-[#200818] overflow-x-hidden pt-16 sm:pt-20'>
      {/* Hero Section */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 sm:pb-32 text-center'>
        <div className='max-w-[300px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[600px] mx-auto mb-8'>
          <Image
            src={Hack}
            alt='HackNITR 6.0'
            width={800}
            height={200}
            className='w-full h-auto'
            priority
          />
        </div>

        <p className='text-white text-base font-poppins sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12'>
          December 15th-17th, 2025 | NIT Rourkela
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6'>
          <Link href='/register' className='group relative w-48 xs:w-56 sm:w-auto'>
            <div className='absolute inset-0 bg-[#F5EBE6] rounded-[8px] transform translate-y-2 translate-x-[-3px]'></div>
            <div className='relative bg-gradient-to-r from-[#E7436C] via-[#E7436C] to-[#a41c3e] text-white px-6 sm:px-8 md:px-10 py-[7px] rounded-[8px] transform transition-transform group-hover:-translate-y-1 text-sm sm:text-base font-medium'>
              Register
              <GhostIcon />
            </div>
          </Link>

          <Link href='/discord' className='group relative w-48 xs:w-56 sm:w-auto'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#E7436C] via-[#E7436C] to-[#a41c3e] rounded-[8px] transform translate-y-2 translate-x-[-3px]'></div>
            <div className='relative bg-[#F5EBE6] text-[#E7436C] px-6 sm:px-8 md:px-8 py-[7px] rounded-[8px] transform transition-transform group-hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base font-medium'>
              <svg
                className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6'
                viewBox='0 0 24 24'
                fill='currentColor'
              >
                <path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z' />
              </svg>
              Discord
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
