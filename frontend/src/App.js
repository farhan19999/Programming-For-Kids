import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/DashBoard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    );
}

export default App;
