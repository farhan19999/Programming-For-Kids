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
import AdminAddSolution from "./pages/admin/admin_add_solution/AdminAddSolution";
import PracticeProblemIndex from './pages/practice/practice_problem_index/PracticeProblemIndex';
import MySubmissions from "./pages/my_submissions/MySubmissions";
import Contest_Problem_Details from "./pages/contest_individual_problem_details/IndividualProblem";
import MiniProjectList from "./pages/miniproject_list/MiniProjectList";
import ContestProblems from "./pages/contest_problems/ContestProblems";
import DailyPuzzle from "./pages/daily_puzzle/DailyPuzzle";
import AdminDailyPuzzle from "./pages/admin/admin_puzzle/AdminPuzzle";
import AdminDailyPuzzleAdd from "./pages/admin/admin_puzzle_add/AdminPuzzleAdd";
import AdminDailyPuzzleModify from "./pages/admin/admin_puzzle_modify/AdminPuzzleModify";
import SignOut from "./pages/signout/SignOut";
import PracticeProblemSubmission from "./pages/practice/practice_problem_submission/PracticeProblemSubmission";
import AdminHome from "./pages/admin/admin_home/AdminHome";
import PracticeProblemDetails from "./pages/practice/practice_problem_details/Practice_problem_Details";
import PracticeProblemDiscussion from "./pages/discussion/Discussion";
import PracticeProblemSolution from "./pages/practice/practice_problem_solution/PracticeProblemSolution";
import AdminModifySolution from "./pages/admin/Admin_modify_solution/AdminModifySolution";
import AdminLogin from "./pages/admin/login/AdminLogin";
import AdminAuth from "./components/auth/AdminAuth";
import ProblemPage from "./pages/practice/problem_page/ProblemPage";
import CodeGamingList from "./pages/code_gaming/code_gaming_list/CodeGamingList";
import CodeGamingProblem from "./pages/code_gaming/code_gaming_problem/CodeGamingProblem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "admin-login",
    element: <AdminLogin />,
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
    path: "/contest",
    element: <Contest />,
  },
  {
    path:"/contest/my-submissions",
    element:<Submission_IndividualProblem/>
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signout",
    element: <SignOut />,
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

  ///////////////////////////// ADMIN CONTESTS /////////////////////////////
  {
    path: "/admin",
    element: <AdminAuth />,
    children: [
      {
        path: "",
        element: <AdminHome />,
      },
      {
        path: "contest",
        element: <AdminContestAdd />,
      },
      {
        path: "contest-add-new",
        element: <AdminContestAddNew />,
      },
      {
        
        path: "contest/:contestid/problem-add",  //admin-contest-problem-add
        element: <AdminContestProblemAdd />,
        
      },
      {
        path: "contest/:contestid",  // admin-contest-problems-index
        element: <AdminContestProblemIndex />,
      },
      
      {
        path: "contest/:contestid/problem/:problemid",
        element: <AdminContestProblemDetails />,
      },
      {
        path: "/admin/daily-puzzle", // Route for detailed page with contestid
        element: <AdminDailyPuzzle />,
      },
      {
        path: "/admin/daily-puzzle/add", // Route for detailed page with contestid
        element: <AdminDailyPuzzleAdd />,
      },
      {
        path: "/admin/daily-puzzle/:puzzleid/modify", // Route for detailed page with contestid
        element: <AdminDailyPuzzleModify />,
      },
      {
        path: "/admin/miniprojects",
        element: <AdminMPindex />,
      },
    
      {
        path: "/admin/miniprojects/:projectid", // Route for detailed page with projectid
        element: <AdminMPdetails />,
      },
    
      {
        path: "/admin/miniprojects/add", 
        element: <AdminMPadd />,
      }
    ]
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
    path: "/admin/contest/:contestid/problem/:problemid/add-solution",
    element: <AdminAddSolution />,
  },
  {
    path: "/admin/contest/:contestid/problem/:problemid/modify-solution",
    element: <AdminModifySolution />,
  },
  ///////////////////////////// ADMIN CONTESTS END /////////////////////////////

  ///////////////////////////// PRACTICE PROBLEM START /////////////////////////

  {
    path: "/practice",
    element: <PracticeProblemIndex />,
  },

  {
    path: "/practice/problems/:problemid", // Route for detailed page with problemid
    element: <ProblemPage />,
  },

  // {
  //   path: "/practice/:problemid/submissions",
  //   element: <PracticeProblemSubmission />,
  // },


  {
    path: "/miniproject/:projectid", // Route for detailed page with projectid
    element: <MiniProject />,
  },

  {
    path: "/miniprojects",
    element: <MiniProjectList />,
  },
  {
    path: "/contest/:contestid", // Route for detailed page with contestid
    element: <ContestProblems />,
  },
  {
    path: "/daily-puzzle", // Route for detailed page with contestid
    element: <DailyPuzzle />,
  },
  {
    path: "/code-gaming",
    element: <CodeGamingList />,
  },
  {
    path: "/code-gaming/:codegameid",
    element: <CodeGamingProblem />,
  }


]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
