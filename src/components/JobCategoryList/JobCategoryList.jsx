import { useEffect, useState } from "react";
import JobCategoryCard from "../JobCategoryCard/JobCategoryCard";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs.JSX";


const JobCategoryList = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
    console.log(jobs);
    
    return (
        <div className="my-32">
            <h1 className="font-bold text-center text-5xl">Job Category List</h1>
            <p className="text-base font-medium text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-center gap-5 my-5">
                {
                    jobs.map(job => <JobCategoryCard 
                    key={job.id}
                    job={job}
                    />)
                }
            </div>     
            <div className="my-8">
                <FeaturedJobs/>
            </div>      
        </div>
    );
};

export default JobCategoryList;