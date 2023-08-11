import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/DashBoard/Dashboard";
import Profile from "./pages/StudentProfile/StudentProfile";

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
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
