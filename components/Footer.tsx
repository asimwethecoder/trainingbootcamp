import Image from 'next/image';
import Link from 'next/link';
import { Code, Cloud } from 'lucide-react';
import SmartFocusLogo from '@/assets/images/SmartFocusLogo.png';

const Footer = () => {
  return (
    <footer className='relative z-[1] -mt-[70px] overflow-hidden rounded-tl-[30px] rounded-tr-[30px] bg-gray-100 dark:bg-gray-900 lg:rounded-tl-[50px] lg:rounded-tr-[50px]'>
      {/* Footer Top */}
      <div className='py-[60px] xl:pb-[100px] xl:pt-[130px]'>
        <div className='overflow-hidden'>
          {/* Footer Text Slider */}
          <div className='footer-text-slider flex w-full items-center gap-x-[30px] whitespace-nowrap'>
            {/* Footer Slide Item  */}
            <Code className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Start building software
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Cloud className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Become AWS Certified
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Code className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Innovate with code
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Cloud className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Master AWS Cloud Computing
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Code className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Start building software
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Cloud className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Become AWS Certified
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Code className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Innovate with code
            </div>
            {/* Footer Slide Item  */}
            {/* Footer Slide Item  */}
            <Cloud className='h-10 w-10 lg:h-[60px] lg:w-[60px] text-black dark:text-white' />
            <div className='block font-dmSans text-4xl font-bold leading-none -tracking-[2px] text-black dark:text-white lg:text-6xl xl:text-7xl xxl:text-[80px]'>
              Master AWS Cloud Computing
            </div>
            {/* Footer Slide Item  */}
          </div>
        </div>
      </div>
      {/* Footer Text Slider */}
      {/* Footer Top */}
      <div className='global-container'>
        <div className='h-[1px] w-full bg-[#DBD6CF] dark:bg-gray-700' />
        {/* Footer Center */}
        <div className='lg:grid grid-cols-1 gap-10 py-[60px] md:grid-cols-[1fr_auto_auto] xl:grid-cols-[1fr_auto_auto_1fr] xl:gap-20 xl:py-[100px]'>
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            <Link href='/' className='inline-block'>
              <Image
                src={SmartFocusLogo}
                alt='logo'
                width={96}
                height={24}
              />
            </Link>
            <p className='text-gray-700 dark:text-gray-300'>
              By combining cutting-edge technology with dynamic learning opportunities, we strive to create inclusive, accessible programs that cater to all skill levels.
            </p>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black dark:text-white'>
              Primary Pages
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  href='/bootcamps'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  Bootcamps
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black dark:text-white'>
              Utility Pages
            </h4>
            {/* Footer Title */}
            {/* Footer Navbar */}
            <ul className='flex flex-col gap-y-[10px] capitalize'>
              <li>
                <Link
                  href='/signup'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  Signup
                </Link>
              </li>
              <li>
                <Link
                  href='/login'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href='/not-found'
                  className='transition-all duration-300 ease-linear hover:text-colorOrangyRed dark:hover:text-colorOrangyRed'
                >
                  404 Not found
                </Link>
              </li>
            </ul>
          </div>
          {/* Footer Widget */}
          {/* Footer Widget */}
          <div className='flex flex-col gap-y-6'>
            {/* Footer Title */}
            <h4 className='text-[21px] font-semibold capitalize text-black dark:text-white'>
              Subscribe to our newsletter
            </h4>
            {/* Footer Title */}
            {/* Footer Subscriber Form */}
            <form action='#' method='post' className=''>
              <div className='relative h-[50px] max-w-[300px]'>
                <input
                  type='email'
                  name='newsletter-email'
                  id='newsletter-email'
                  placeholder='Enter your email'
                  className='p-y-[18px] h-full w-full rounded-[50px] border-[1px] border-black dark:border-gray-600 px-[24px] pr-20 outline-none bg-white dark:bg-gray-800 text-black dark:text-white'
                  required
                />
                <button
                  type='submit'
                  className='absolute right-[5px] top-[50%] inline-block h-10 -translate-y-[50%] rounded-[50px] bg-black dark:bg-gray-600 px-6 transition-all hover:bg-orange-500 dark:hover:bg-orange-500'
                >
                  <Cloud className='h-6 w-6 text-white' />
                </button>
              </div>
            </form>
            {/* Footer Subscriber Form */}
          </div>
          {/* Footer Widget */}
        </div>
        {/* Footer Center */}
        <div className='h-[1px] w-full bg-[#DBD6CF] dark:bg-gray-700' />
        {/* Footer Bottom */}
        <div className='py-9 text-center'>
          <p className='text-gray-700 dark:text-gray-300'>
            © Copyright {new Date().getFullYear()}, All Rights Reserved by
            <span className='font-semibold'> Smart Focus</span>
          </p>
        </div>
        {/* Footer Bottom */}
      </div>
      {/* Footer Background Shape 1  */}
      <div className='orange-gradient-2 absolute -top-[290px] right-[90px] -z-[1] h-[406px] w-[406px] -rotate-[58deg] rounded-[406px]'></div>
      {/* Footer Background Shape 2  */}
      <div className='orange-gradient-1 absolute -right-[200px] -top-[205px] -z-[1] h-[451px] w-[451px] -rotate-[58deg] rounded-[451px]'></div>
    </footer>
  );
};

export default Footer;