import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

export function Navbar() {
  return (
    <header className='flex items-center justify-between px-4 md:px-6 lg:px-8 py-2 bg-white dark:bg-gray-800'>
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <h1 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
            Franca Língua
          </h1>
        </Link>
      </div>
      <div className='flex items-center space-x-4'>
        <div className='relative'>
          <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
          <Input
            className='pl-8 text-gray-900 dark:text-gray-100 dark:bg-gray-700'
            id='search'
            placeholder='Search...'
            type='search'
          />
        </div>
        <ModeToggle />
      </div>
    </header>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle
        cx='11'
        cy='11'
        r='8'
      />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function CircleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle
        cx='12'
        cy='12'
        r='10'
      />
    </svg>
  );
}
