import { Link } from "react-router-dom";
import locationn from "../../assets/location.png"
import salaryy from "../../assets/salary.png"

const FeaturedJob = ({ featuredJob }) => {
    const {id,logo,job_title,company_name,remote_or_onsite,location,salary,job_type} = featuredJob
    return (
        <div className="w-[648px] h-[392px] border-2 ">
	<div className="m-10">
		<div className="space-y-2">
			<img src={logo} alt="" className="w-[117px] h-[40px]" />
			<div className="flex items-center text-xs">
				<h1 className="text-2xl font-extrabold">{job_title}</h1>
                <p className="text-xl font-semibold">{company_name}</p>
			</div>
		</div>
		<div className="space-y-2">
				<div className="flex gap-5">
                <button className="btn border-[1px] rounded-md border-violet-500 text-violet-500 hover:text-white hover:bg-violet-500 bg-white">{remote_or_onsite}</button>
                <button className="btn border-[1px] rounded-md border-violet-500  text-violet-500 hover:text-white hover:bg-violet-500 bg-white">{job_type}</button>
		</div>
        <div className="flex gap-5">
            <p className="flex items-center"><img src={locationn} className="w-8 h-8"  alt="" />{location}</p>
            <p className="flex items-center"><img src={salaryy} className="w-8 h-8"  alt="" />Salary: {salary}</p>
        </div>
        <div className="flex justify-start ">
        <Link to={`/jobs/${id}`}  className="px-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white">View Details</Link>
        </div>
	</div>
		</div>
	</div>
    );
};

export default FeaturedJob;