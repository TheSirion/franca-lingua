import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full py-6'>
      <div className='container flex flex-col items-center justify-center gap-2 text-center md:flex-row md:justify-between md:gap-4'>
        <div className='flex items-center gap-2 text-sm font-semibold md:gap-4 md:text-base'>
          <span className='font-bold'>Franca Língua</span>
          <span>O guia do estudante de línguas</span>
        </div>
        <nav className='flex items-center justify-center gap-4 text-sm md:gap-6'>
          <Link
            className='flex items-center gap-2 text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50'
            href='/'>
            Home
          </Link>
          <Link
            className='flex items-center gap-2 text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50'
            href='/about'>
            Sobre
          </Link>
        </nav>
        <div className='flex items-center gap-4 text-xs md:gap-2'>
          <span className='mx-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 opacity-0'>
            <TwitterIcon className='w-4 h-4' />
            <span className='sr-only'>Twitter</span>
          </span>
          <span className='mx-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 opacity-0'>
            <FacebookIcon className='w-4 h-4' />
            <span className='sr-only'>Facebook</span>
          </span>
          <span className='mx-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 opacity-0'>
            <InstagramIcon className='w-4 h-4' />
            <span className='sr-only'>Instagram</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <rect
        width='20'
        height='20'
        x='2'
        y='2'
        rx='5'
        ry='5'
      />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line
        x1='17.5'
        x2='17.51'
        y1='6.5'
        y2='6.5'
      />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}

export default Footer;
