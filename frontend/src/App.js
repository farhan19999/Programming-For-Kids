import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard"; 
import Profile from "./pages/studentprofile/StudentProfile";
import Contest_Registration from "./pages/contest_registration/Contest_Registration";
import Contest from "./pages/contestshow/ContestShow";
import SignUp from "./pages/signup/SignUp";
import Standings from "./pages/standings/Standings";
import MiniProject from "./pages/mini_project_contest/MiniProject";
import AdminMPindex from "./pages/admin/admin_miniproject_index/AdminMPindex";
import AdminMPdetails from "./pages/admin/admin_miniproject_details/AdminMPdetails";
import My_Submissions from "./pages/my_submissions/My_Submissions";
import Contest_Problem_Details from "./pages/contest_individual_problem_details/IndividualProblem";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/ContestRegistration",
    element: <Contest_Registration />,
  },
  {
    path: "/Contest",
    element: <Contest />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/contest-problem-details",
    element: <Contest_Problem_Details />,
  },
  {
    path: "/my-submissions",
    element: <My_Submissions />,
  },
  {
    path: "/standings",
    element: <Standings />,
  },
  {
    path: "/miniproject",
    element: <MiniProject />,
  },
  {
    path: "/admin-miniproject-index",
    element: <AdminMPindex />,
  },
  {
    path: "/admin-miniproject-details",
    element: <AdminMPdetails />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
