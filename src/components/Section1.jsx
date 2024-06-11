import jobCategories from "../config/job.config";
  const Section1 = () => {
    return (
      <>
        <section className="grid grid-cols-1 justify-items-center my-10 bg-white">
          
          <div className="w-3/5  font-semibold justify-items-center my-6 text-sm text-gray-600 bg-gray-200 rounded-lg">
           <div className="flex font-bold justify-center text-xs lg:text-sm p-3">
            <span className="bg-green-200 p-2 rounded-l-lg">IT & Development</span>
            <span className="bg-white p-2 rounded-r-lg">Design and Creative</span>
          </div>
          <div className="grid md:grid-cols-3 justify-items-center">
          {jobCategories.map((category, index) => (
              <ul key={index} className="p-10 text-lg">
                {category.map((job, idx) => (
                  <li key={idx} className="mt-4">{job}</li>
                ))}
              </ul>
            ))}
          </div>
           
          </div>
        </section>
      </>
    );
  };
  
  export default Section1;
  