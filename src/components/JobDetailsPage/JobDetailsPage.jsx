import { useLoaderData, useParams } from "react-router-dom";
import jobDetailImg1 from "../../assets/Vector-one.png"
import jobDetailImg from "../../assets/Vector.png"

const JobDetailsPage = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(id,job);
    
    return (
        <div>
              <div className="bg-[#7E90FE] bg-opacity-10">
              <div className="text-center font-black text-5xl pt-36">Job Details</div>
              <img src={jobDetailImg} className="absolute bottom-[570px] left-[1400px]"  alt="" />                 
              <img src={jobDetailImg1} className="relative"  alt="" /></div>   
              <div>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="bg-[#7E90FE]  bg-opacity-10">
        <h1><span className="font-bold ">Job Description:</span>{job.job_description}</h1>
        </div>
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>            
        </div>
    );
};

export default JobDetailsPage;