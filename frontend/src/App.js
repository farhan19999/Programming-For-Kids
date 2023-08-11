import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/DashBoard/Dashboard";
import Profile from "./pages/StudentProfile/StudentProfile";
import Contest_Registration from "./pages/Contest_Registration/Contest_Registration";
import SignUp from "./pages/SignUp/SignUp";



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
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
