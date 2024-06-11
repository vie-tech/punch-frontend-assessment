import section4Config from "../config/section4.config";


const Section4 = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:p-24 mt-12">
        <h1 className=" text-4xl lg:text-6xl font-bold p-4">How we ensure you're <br /> in good hands</h1>
        <p className="mt-10 text-gray-700 text-lg font-normal p-4">
          With our comprehensive screening process, we hand-pick highly <br /> skilled
          candidates so you can onboard them in a matter of days.
        </p>
         
        <div className="mt-10 p-4">
            {section4Config.map((item, index)=>(
                <div className="border-2 border-gray-200 rounded-lg lg:w-3/6 my-4 cursor-pointer hover:drop-shadow-lg lg:p-2 p-4" key={index}>
                    <div className="flex items-center gap-8">
                    <span className="rounded-full bg-gray-200 p-4">{item.icon}</span>
                    <p className="font-semibold"><span className="font-bold text-lg ">{item.span}</span> {item.title}</p>
                    </div>
                    
                 </div>
             ))}
         
        </div>
      </section>
    </>
  );
};

export default Section4;
