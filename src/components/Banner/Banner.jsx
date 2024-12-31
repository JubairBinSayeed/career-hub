import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <section className="bg-[#7E90FE] bg-opacity-5">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="font-extrabold text-8xl">One Step <br />Closer To Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Dream Job</span></h1>
			<p className="text-lg">Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br />your job application from start to finish.</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to='/blogs'  className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white text-xl">Get Started</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={banner} alt="" className="absolute mt-56 right-36  h-[744px] w-[816px]" />
		</div>
	</div>
</section>
    );
};

export default Banner;