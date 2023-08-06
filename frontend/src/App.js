import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/public-home/PublicHome";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user/:id",
    element: <Dashboard />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
