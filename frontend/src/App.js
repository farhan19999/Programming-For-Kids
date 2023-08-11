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
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
