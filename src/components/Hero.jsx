import searchButton from '../assets/images/Frame 626624.png'
import gif from '../assets/images/gif.png'

const Hero = () => {
  return (
    <>
      <section className="py-8 grid grid-cols-1 justify-items-center lg:mt-40"> {/* border here */}
       
          <p className="text-5xl font-bold text-center my-8 inline-block">Finding the right <span className='inline-block'><img src={gif} alt="" /></span>has <br /> never been easier</p>
          <p className="text-2xl text-gray-500 text-center">
            With our rigorous pre-vetting process, you'll never have to worry
            about <br /> finding the ideal candidate ever again.
          </p>
          <div className="relative my-10">
          <input 
            type="text" 
            className="bg-transparent p-4 w-96 border-2 rounded-lg pr-16" 
            placeholder="Search"
          />
          <span className="absolute top-1/2 transform -translate-y-1/2 right-0">
            <img src={searchButton} alt="Search" className="w-14 h-14" />
          </span>
        </div>
       
      </section>
    </>
  );
};

export default Hero;
