import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Statistics from "../components/Stastics/Statiscics";
import AppliedJobs from "../components/Applied Jobs/AppliedJobs";
import Blogs from "../components/Blogs/Blogs";
import JobDetailsPage from "../components/JobDetailsPage/JobDetailsPage";

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
        element: <AppliedJobs/>,
        loader: () => fetch('../jobs.json')
      },
      {
        path:'/Blogs',
        element:<Blogs/>
      },
      {
        path:'/jobs/:id',
        element: <JobDetailsPage/>,
        loader: () => fetch('../jobs.json')
      }
    ]  
  }
]);
export default router