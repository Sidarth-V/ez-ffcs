import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GenerateTimetables from "./pages/GenerateTimetables/pages.generateTimetables";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GenerateTimetables />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
