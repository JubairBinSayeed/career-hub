import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#7E90FE] bg-opacity-10">
                <div className="navbar-start">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-[32px] font-black">CareerHub</a>
                    </div>
                </div>
                <div className="navbar-center gap-5">
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500" : "font-normal"}>Statistics</NavLink>
                    <NavLink to='/appliedJobs' className={({ isActive }) => isActive ? "text-transparent font-semibold  bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500" : "font-normal"}>Applied Jobs</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-transparent bg-clip-text font-semibold  bg-gradient-to-r from-indigo-500 to-purple-500" : "font-normal"}>Blog</NavLink>
                </div>
                <div className="navbar-end">
                    <button className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] hover:border-gradient-to-r hover:from-[#7E90FE] hover:to-[#9873FF] btn text-white">Star Applying</button>
                </div>
            </div>            
        </div>
    );
};

export default Navbar;