import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../components/Stastics/Statiscics";
import AppliedJobs from "../components/Applied Jobs/AppliedJobs";
import Blogs from "../components/Blogs/Blogs";

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element: <Statistics/>
      },
      {
        path:'/appliedJobs',
        element: <AppliedJobs/>
      },
      {
        path:'/Blogs',
        element:<Blogs/>
      }
    ]  
  }
]);
export default router