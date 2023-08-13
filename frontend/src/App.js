import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/studentprofile/StudentProfile";
import Contest_Registration from "./pages/contest_registration/Contest_Registration";
import Contest from "./pages/contestshow/ContestShow";
import Submission_IndividualProblem from "./pages/programming_contest/my_submissions/My_Submissions"
import Standings_Crogramming_Contest from "./pages/programming_contest/standings/standings";
import SignUp from "./pages/signup/SignUp";
import Signin from "./pages/signin/Signin";
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
    path:"/contest/my-submissions",
    element:<Submission_IndividualProblem/>
  },
  {
    path:"/contest/standings",
    element:<Standings_Crogramming_Contest/>
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
