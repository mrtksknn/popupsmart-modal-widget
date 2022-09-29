/* eslint-disable max-len */
/* eslint-disable no-magic-numbers */
import Image from 'next/image';
import Logo from '../../assets/FirmLogos/logo.png';

const displayName = 'Header';

const Header = () => (
  <header className="px-6 lg-:px-0">
    <nav className="container py-8">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <div className="flex">
          <a className="flex items-center" href="https://flowbite.com">
            <Image alt="Firm logo" className="mr-3 h-6 sm:h-9" src={Logo} />
            <span className="logo-text px-2.5">
              modal.cards
            </span>
          </a>
          <div className="hidden lg:items-center lg:flex lg:w-auto" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a aria-current="page" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="block py-2 pr-4 pl-3 lg:p-0" href="#">
                  Solutions
                </a>
              </li>
              <li>
                <a className="block py-2 pr-4 pl-3 lg:p-0" href="#">
                  Product Tour
                </a>
              </li>
              <li>
                <a className="block py-2 pr-4 pl-3 lg:p-0" href="#">
                  Showcase
                </a>
              </li>
              <li>
                <a className="block py-2 pr-4 pl-3 lg:p-0" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center lg:order-2">
          <div className="hidden items-center w-full lg:flex lg:w-auto lg:order-1">
            <a className="font-medium text-md px-7" href="#">
              Sign in
            </a>
            <button className="primary-button rounded-xl px-5 py-2" type="button">
              Try for free
            </button>
          </div>
          <button
            aria-controls="mobile-menu-2" aria-expanded="false" className="inline-flex items-center rounded-lg lg:hidden"
            data-collapse-toggle="mobile-menu-2" type="button"
          >
            <span className="sr-only">
              Open main menu
            </span>
            <svg
              className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fillRule="evenodd" />
            </svg>
            <svg
              className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" fillRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  </header>
);

Header.displayName = displayName;

export default Header;
