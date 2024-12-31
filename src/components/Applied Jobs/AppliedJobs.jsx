import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utils";
import locationn from "../../assets/location.png"
import salaryy from "../../assets/salary.png"


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs,setAppliedJobs] = useState([])
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = []
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied)
            console.log(jobsApplied);
            
        }
    },[])
    return (
        <div>
            <div className="text-center font-bold text-2xl underline mt-10">This is Applied Jobs: {appliedJobs.length}</div>
            {
                appliedJobs.map(job =>  <div key={job.id}  className="w-[648px] h-[392px] border-2 ">
                    <div className="m-10">
                        <div className="space-y-2">
                            <img src={job.logo} alt="" className="w-[117px] h-[40px]" />
                            <div className="flex items-center text-xs">
                                <h1 className="text-2xl font-extrabold">{job.job_title}</h1>
                                <p className="text-xl font-semibold">{job.company_name}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                                <div className="flex gap-5">
                                <button className="btn border-[1px] rounded-md border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500 bg-white">{job.remote_or_onsite}</button>
                                <button className="btn border-[1px] rounded-md border-violet-500  text-violet-500 hover:text-white hover:bg-violet-500 bg-white">{job.job_type}</button>
                        </div>
                        <div className="flex gap-5">
                            <p className="flex items-center"><img src={locationn} className="w-8 h-8"  alt="" />{job.location}</p>
                            <p className="flex items-center"><img src={salaryy} className="w-8 h-8"  alt="" />Salary: {job.salary}</p>
                        </div>
                        <div className="flex justify-start ">
                        <Link to={`/jobs/${job.id}`}  className="px-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white">View Details</Link>
                        </div>
                    </div>
                        </div>
                    </div>)
            }            
        </div>
    );
};

export default AppliedJobs;