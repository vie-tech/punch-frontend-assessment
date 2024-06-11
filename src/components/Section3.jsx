import face1 from '../assets/images/face-1.png'
import left from '../assets/images/left.png'
import right from '../assets/images/right.png'
import vector from '../assets/images/Vector.png'
import quotes from '../assets/images/quotes.png'

const Section3 = () => {
  return (
    <>
      <section className="lg:section-3-bg lg:grid grid-cols-2 bg-section3 relative  p-16 lg:p-32 mt-[-78px]">
        <div className="text-gray-300 mb-20">
          <h1 className=" text-4xl lg:text-6xl font-bold text-white">
            How it worked <br />  for Jason <span><img src={face1} alt="" className='rounded-full inline-block w-10 h-10'/></span> at <br />Groove
          </h1>
          <p className='mt-10 text-lg'>
            Zwilt enabled us to deliver on time and they’ve <br /> been heavy hitters
            in our corner since.
          </p>
          <div className='mt-10 flex gap-4'>
            <span><img src={left} alt="" /></span>
            <span><img src={right} alt="" /></span>
          </div>
        </div>

        <div>
          <div className='flex gap-3'>
          <div className="flex items-center justify-center rounded-full bg-purple-500  w-24 h-24">
        <img src={vector} className="w-18 h-18 object-contain" alt="Centered" />
       </div>

            <div>
              <h2 className='text-4xl text-white font-semibold'>Jason Makki</h2>
              <p className='text-gray-600 font-medium'>Engineer at GROOVE</p>
              <p className='text-gray-600 font-medium'>San Francisco</p>
            </div>
          </div>

          <p className='w-54 text-gray-400 mt-14 text-lg'>
            Zwilt enabled us to deliver on time and they’ve <br /> been heavy hitters
            in our corner since. Zwilt <br /> enabled us to deliver on time and they’ve
            been <br />heavy hitters in our corner since.Zwilt enabled us <br /> to deliver
            on time and they’ve been heavy hitters.
          </p>
        </div>
      </section>
    </>
  );
};

export default Section3;
