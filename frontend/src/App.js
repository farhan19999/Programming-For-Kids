import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/home";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/StudentProfile/StudentProfile";
import Contest_Registration from "./pages/Contest_Registration/Contest_Registration";
import SignUp from "./pages/SignUp/SignUp";
import Contest_Problem_Details from "./pages/contest_individual_problem_details/IndividualProblem";
import My_Submissions from "./pages/my_submissions/My_Submissions";



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
    path: "/Contest",
    element: <Contest_Registration />,
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
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
