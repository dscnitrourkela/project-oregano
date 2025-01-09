import { DM_Sans, Inter, Poppins, Prompt, Proza_Libre } from 'next/font/google';
import localFont from 'next/font/local';

export const proza = Proza_Libre({
  variable: '--ProzaLibre',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const inter = Inter({
  variable: '--Inter',
  weight: ['100', '200', '300', '400', '500', '600', '800', '900'],
  subsets: ['latin'],
});

export const prompt = Prompt({
  variable: '--Prompt',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const dmsans = DM_Sans({
  variable: '--DM_Sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const satoshi = localFont({
  src: [{ path: './satoshi/regular.ttf', weight: '500', style: 'normal' }],
  variable: '--Satoshi',
});

export const poppins = Poppins({
  variable: '--Poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});
