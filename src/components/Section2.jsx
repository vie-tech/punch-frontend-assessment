import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import Person2Icon from '@mui/icons-material/Person2';
import section2Config from '../config/section2.config';
import icon3 from '../assets/images/icon-3.png'

const Section2 = () => {
  return (
    <>
      <section className="custom-style-bg mt-[-37px] grid grid-cols-1 justify-items-center bg-gray-100">
        <div>
          <h1 className="font-bold text-5xl text-center p-4 mt-20">
            Your one-stop marketplace for finding <br />
            the talent your business needs.
          </h1>
        </div>

        <div className="p-12 w-full my-20">
          <div className="lg:flex justify-between">
            <div className='leading-9'>
              <h3 className="font-semibold text-2xl mb-10">Find Dev and IT professionals to <br /> scale your business.</h3>
             
              <ul className="grid grid-cols-2 my-4 text-purple-600">
                <li>
                  <span><MilitaryTechIcon/></span>989 Skills
                </li>
                <li>
                  <span><ViewInArIcon/></span>45 Sub-categories
                </li>
                <li>
                  <span><Person2Icon/></span>1011 Profiles
                </li>
             
              </ul>
            </div>

           <div className="bg-white p-2 my-4 rounded-lg">
            <h1 className='my-2 mx-4 text-md'>IT & Development</h1>
            <div className='grid grid-cols-2 lg:flex px-4 my-6 justify-evenly gap-2'>
                {section2Config.map((item)=>(
                <div className='grid col-span-1 justify-items-center text-center'>
                <img src={item.image} alt=""  />
                 <p className='text-center w-1/2 text-xs font-semibold'>{item.caption}</p>
                </div>
                ))}                
            </div>
           </div>
          </div>
          
          <div className="lg:flex justify-between">
            <div className='leading-9'>
              <h3 className="font-semibold text-2xl mb-10">Explore Creative individuals with a <br /> keen eye for detail</h3>
             
              <ul className="grid grid-cols-2 my-4 text-purple-600">
                <li>
                  <span><MilitaryTechIcon/></span>989 Skills
                </li>
                <li>
                  <span><ViewInArIcon/></span>45 Sub-categories
                </li>
                <li>
                  <span><Person2Icon/></span>1011 Profiles
                </li>
             
              </ul>
            </div>

           <div className="bg-white p-2 my-4 rounded-lg">
            <h1 className='my-2 mx-4 text-md'>IT & Development</h1>
            <div className='grid grid-cols-2 lg:flex px-4 my-6 justify-evenly gap-2'>
                {section2Config.map((item)=>(
                <div className='grid col-span-1 justify-items-center text-center'>
                <img src={item.image} alt=""  />
                 <p className='text-center w-1/2 text-xs font-semibold'>{item.caption}</p>
                </div>
                ))}                
            </div>
           
           </div>
          
          </div>
          
          <div className='lg:flex justify-between mt-6'>
            <div className='flex items-center gap-2'>
            <img src={icon3} alt="" className='w-10 h-10'/>
            <span>Explore More</span>
            </div>
            <p className='font-semibold'><span className='font-bold'>30 More</span> to explore</p>
         </div>
        </div>

        
      </section>
    </>
  );
};

export default Section2;
