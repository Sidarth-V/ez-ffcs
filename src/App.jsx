import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar.component";
import MakeTimeTable from "./pages/make-tt/make-tt.pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<MakeTimeTable />} />
      </Route>
    </Routes>
  );
};

export default App;
