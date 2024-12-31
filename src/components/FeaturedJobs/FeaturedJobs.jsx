import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";


const FeaturedJobs = () => {
    const [featuredJobs,setFeaturedJobs] = useState([])
    useEffect(()=>{
        fetch('/jobs.json')
        .then(res => res.json())
        .then(data => setFeaturedJobs(data))
    },[])
    return (
        <div>
            <h1 className="font-extrabold text-5xl text-center">Featured Jobs</h1>
            <p className="text-base text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>          
              <div className="flex justify-center">
              <div className="grid my-10  gap-5  grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    featuredJobs.map(featuredJob => <FeaturedJob 
                    key={featuredJob.id}
                    featuredJob={featuredJob}
                    />)
                }
              </div>
              </div>
              <div className="text-center">
              <button className="px-10 py-3 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white">See All Jobs</button>
              </div>
        </div>
    );
};

export default FeaturedJobs;