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
import Signin from "./pages/signin/Signin";
import Standings from "./pages/standings/Standings";
import MiniProject from "./pages/mini_project_contest/MiniProject";
import AdminMPindex from "./pages/admin/admin_miniproject_index/AdminMPindex";
import AdminMPdetails from "./pages/admin/admin_miniproject_details/AdminMPdetails";
import My_Submissions from "./pages/my_submissions/My_Submissions";
import Contest_Problem_Details from "./pages/contest_individual_problem_details/IndividualProblem";
import MiniProjectList from "./pages/miniproject_list/MiniProjectList";
import ContestProblems from "./pages/contest_problems/ContestProblems";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contestRegistration",
    element: <Contest_Registration />,
  },
  {
    path: "/contest",
    element: <Contest />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/contest-problem-details/:problemid", // Route for detailed page with problemid
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
    path: "/miniproject/:projectid", // Route for detailed page with projectid
    element: <MiniProject />,
  },
  {
    path: "/admin-miniproject-index",
    element: <AdminMPindex />,
  },
  {
    path: "/admin-miniproject-details/:projectid", // Route for detailed page with projectid
    element: <AdminMPdetails />,
  },
  {
    path: "/miniproject",
    element: <MiniProjectList />,
  },
  {
    path: "/contest/:contestid", // Route for detailed page with contestid
    element: <ContestProblems />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
