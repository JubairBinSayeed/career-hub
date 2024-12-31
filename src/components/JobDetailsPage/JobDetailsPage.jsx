import { useLoaderData, useParams } from "react-router-dom";
import jobDetailImg1 from "../../assets/Vector-one.png"
import jobDetailImg from "../../assets/Vector.png"
import toast from "react-hot-toast";
import { saveJobApplication } from "../../Utils";

const JobDetailsPage = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(id,job);
    const handleApplyNow = () => {
        saveJobApplication(job.id)
        toast.success('Successfully toasted!')
    }
    return (
        <div>
              <div className="bg-[#7E90FE] bg-opacity-15">
              <div className="text-center font-black text-5xl pt-36">Job Details</div>
              <img src={jobDetailImg} className="absolute bottom-[570px] left-[1400px]"  alt="" />                 
              <img src={jobDetailImg1} className="relative"  alt="" /></div>   
              <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-[#7E90FE]  bg-opacity-15 w-[424px] h-[461px] shadow-xl">
   <div className="card-body">
    <h2 className="card-title">Job Details</h2>
    <hr />
    <p><span className="font-bold">Salary:</span>{job.salary}</p>
    <p><span className="font-bold">Job Title:</span>{job.salary}</p>
    <p className="font-bold my-2">Contact Information</p>
    <hr className="border-[1px] border-black"  />
    <p><span className="font-bold">Phone:</span>{job.contact_information.phone}</p>
    <p><span className="font-bold">Email:</span>{job.contact_information.email}</p>
    <p><span className="font-bold">Address:</span>{job.contact_information.address}</p>
    <div className="card-actions">
        <button onClick={handleApplyNow}  className="btn-wide bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white">Apply Now</button>
    </div>
  </div>
</div>
    <div>
      <p className="py-6"><span className="font-bold">Job Description:</span>{job.job_description}</p>
      <p className="pb-6"><span className="font-bold">Job Responsibility:</span>{job.job_responsibility}</p>
      <span className="font-bold">Educational Requirements:</span>
      <p>{job.educational_requirements}</p>
      <span className="font-bold">Experiences:</span>
      <p>{job.experiences}</p>
    </div>
  </div>
</div>
            </div>            
        </div>
    );
};

export default JobDetailsPage;