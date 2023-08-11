import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashBoard/Dashboard";
import Profile from "./pages/studentprofile/StudentProfile";
import Contest_Registration from "./pages/contest_Registration/Contest_Registration";
import Contest from "./pages/contestshow/ContestShow";
import SignUp from "./pages/signup/SignUp";
import MiniProject from "./pages/mini_project_contest/MiniProject"
import Standings from "./pages/standings/Standings";
import MiniProject from "./pages/mini_project_contest/MiniProject";
import AdminMPindex from "./pages/admin_miniproject_index/AdminMPindex";
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
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
