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
import Standings  from "./pages/standings/Standings";
import MiniProject from "./pages/mini_project_contest/MiniProject";
import AdminMPindex from "./pages/admin/admin_miniproject_index/AdminMPindex";
import AdminMPdetails from "./pages/admin/admin_miniproject_details/AdminMPdetails";
import AdminMPadd from "./pages/admin/admin_miniproject_add/AdminMPadd";
import AdminContestAdd from "./pages/admin/admin_contest_add/AdminContestAdd";
import AdminContestAddNew from "./pages/admin/admin_contest_add_new/AdminContestAddNew";
import AdminContestProblemAdd from "./pages/admin/admin_contest_problem_add/AdminContestProblemAdd";
import AdminContestProblemIndex from "./pages/admin/admin_contest_problems_index/AdminContestProblemsIndex";
import AdminContestProblemDetails from "./pages/admin/admin_contest_problem_details/AdminContestProblemDetails";
import MySubmissions from "./pages/my_submissions/MySubmissions";
import Contest_Problem_Details from "./pages/contest_individual_problem_details/IndividualProblem";
import MiniProjectList from "./pages/miniproject_list/MiniProjectList";
import ContestProblems from "./pages/contest_problems/ContestProblems";
import DailyPuzzle from "./pages/daily_puzzle/DailyPuzzle";
import AdminDailyPuzzle from "./pages/admin/admin_puzzle/AdminPuzzle";

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
    path: "/contest/:contestid/Registration",
    element: <Contest_Registration />,
  },
  {
    path: "/user/:userid/contests/",
    element: <Contest />,
  },
  {
    path:"/contest/my-submissions",
    element:<Submission_IndividualProblem/>
  },
  // {
  //   path:"/contest/standings",
  //   element:<Standings_Crogramming_Contest/>
  // },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/contest/:contestid/problem/:problemid", // Route for detailed page with problemid
    element: <Contest_Problem_Details />,
  },
  {
    path: "/contest/:contestid/my-submissions",
    element: <MySubmissions />,
  },
  {
    path: "/contest/:contestid/standings",
    element: <Standings />,
  },
  {
    path: "/admin/contest-add",
    element: <AdminContestAdd />,
  },
  {
    path: "/admin/contest-add-new",
    element: <AdminContestAddNew />,
  },
  {
    
    path: "/admin/contest/:contestid/problem-add",  //admin-contest-problem-add
    element: <AdminContestProblemAdd />,
    
  },
  {
    path: "/admin/contest/:contestid",  // admin-contest-problems-index
    element: <AdminContestProblemIndex />,
  },
  
  {
    path: "/admin/contest/:contestid/problem/:problemid",
    element: <AdminContestProblemDetails />,
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
  {
    path: "/admin-miniproject-add", // Route for detailed page with contestid
    element: <AdminMPadd />,
  },
  {
    path: "/daily-puzzle", // Route for detailed page with contestid
    element: <DailyPuzzle />,
  },
  {
    path: "/admin/daily-puzzle", // Route for detailed page with contestid
    element: <AdminDailyPuzzle />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
