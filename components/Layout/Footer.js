import Image from 'next/image';
import Logo from '../../assets/others/logo.svg';

const displayName = 'Footer';

const Footer = () => (
  <div className="footer flex flex-col my-20">
    <Image
      alt="logo" height="32" src={Logo}
      width="32"
    />
    <span className="text-center mt-4 text-xs">
      Powered by Popupsmart
    </span>
  </div>
);

Footer.displayName = displayName;

export default Footer;
