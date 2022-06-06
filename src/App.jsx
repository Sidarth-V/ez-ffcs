import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import MakeTimeTable from "./routes/make-tt/make-tt.pages";
import Home from "./routes/home/home.pages";
import ViewTeachers from "./routes/view-teachers/view-teachers.pages";
import ViewSaved from "./routes/view-saved/view-saved.pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
        <Route path="make-tt" element={<MakeTimeTable />} />
        <Route path="view-teachers" element={<ViewTeachers />} />
        <Route path="view-saved" element={<ViewSaved />} />
      </Route>
    </Routes>
  );
};

export default App;
