import arrow from '../assets/images/down-arrow.png';
import image2 from '../assets/images/Frame 55.png';
import { platformLinks, categoriesLinks, helpLinks, socialLinks } from '../config/footer.config';


const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-r from-darkGray to-darkerGray border-2 outer-bg">
        <div className="w-4/5 bg-footerCustom grid grid-cols-1 justify-items-center py-24 mt-20 mx-auto inner-bg">
          <h2 className="text-3xl md:text-5xl text-white text-center font-semibold">
            Need a job done, and done
            <br />
            well? Get started
          </h2>
          <img src={arrow} alt="Arrow Down" className="mt-10 w-12 h-12" />
        </div>

        <div className="w-full lg:mt-20 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
          <div className="px-10">
            <img src={image2} alt="Logo" className="mb-4" />
            <p className="mb-4 text-gray-400">
              We take complex hiring processes - and
              <br /> simplify them. Connecting you to the world’s
              <br /> highly qualified talent pool.
            </p>
            <p className="mt-10 text-xs uppercase font-bold text-gray-600">LINKS & REDIRECTS</p>
            <div className="lg:flex space-x-4 mt-10">
              <span className=" text-xs rounded-lg px-10 cursor-pointer  lg:rounded-full bg-button lg:px-20 py-4 text-nowrap">Hire Now</span>
              <span className=" text-xs rounded-lg cursor-pointer px-10  lg:rounded-full bg-button lg:px-20 py-4 text-nowrap">Apply Now</span>
            </div>
          </div>
          <div className="w-full px-10 col-span-2 mt-20 lg:mt-0">
            <h1 className="text-6xl font-semibold mb-14">Connecting the right people to <br /> the right businesses.</h1>
            <div className="   lg:grid grid-cols-4 p-4">
              <ul className='mb-10'>
                <h2 className="text-gray-600 uppercase font-bold text-xs">platform</h2>
                {platformLinks.map((link, index) => (
                  <li key={index} className="mt-4">{link}</li>
                ))}
              </ul>
              <ul  className='mb-10'>
                <h2 className="text-gray-600 uppercase font-bold text-xs">categories</h2>
                {categoriesLinks.map((link, index) => (
                  <li key={index} className="mt-4">{link}</li>
                ))}
              </ul>
              <ul  className='mb-10'>
                <h2 className="text-gray-600 uppercase font-bold text-xs">help</h2>
                {helpLinks.map((link, index) => (
                  <li key={index} className="mt-4">{link}</li>
                ))}
              </ul>
              <ul  className='mb-10'>
                <h2 className="text-gray-600 uppercase font-bold text-xs">Get In touch @</h2>
                {socialLinks.map((link, index) => (
                  <li key={index} className="mt-4">{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex justify-between p-4 text-gray-500 border-t border-gray-500'>
            <h1>All Rights Reserved by Zwilt</h1>
         <div className='flex space-x-6 text-gray-500'>
        <span className='underline'>Privacy Policy</span>
        <span className='underline'>Terms and Conditions</span>
         </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
