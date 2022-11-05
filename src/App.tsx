import { Layout } from "./components/layout"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import { useMemo } from "react";
import { Home } from "./pages/home";
import { ChurnPaths } from "./pages/churn-paths";
import { Cohorts } from "./pages/cohorts";
import { Actions } from "./pages/actions";


function App() {

  const routes = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <Home />,

      },
      {
        path: '/churn-paths',
        element: <ChurnPaths />
      },
      {
        path: '/cohorts',
        element: <Cohorts />
      },
      {
        path: '/actions',
        element: <Actions />
      }
    ]);
  }, [])
  return <RouterProvider router={routes} />

}

export default App
