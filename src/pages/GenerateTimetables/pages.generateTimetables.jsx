import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MakeTableForm from "../../components/make-table-form/make-table-form.component";
import TimeTableList from "../../components/timetable-list/timetable-list.component";
import "./styles.generateTimetables.scss";
import { getAllCourses } from "../../api/api.main";

const GenerateTimetables = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allConfigs, setAllConfigs] = useState([]);

  const customId = "custom-id-yes";

  useEffect(() => {
    if (localStorage.getItem("timetables")) {
      toast("Restored from storage", {
        toastId: customId,
        position: "top-right",
        autoClose: 2000,
        type: toast.TYPE.INFO,
        theme: "dark",
      });
      setAllConfigs(JSON.parse(localStorage.getItem("timetables")).timetables);
    }
    let temp = getAllCourses();
    setAllCourses(temp);
  }, []);

  const makeTimetables = (courses) => {
    const id = toast.loading("Please wait...", { theme: "dark" });
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}all-timetables`, { courses })
      .then((response) => {
        if (response.data.data.timetables.length > 0) {
          toast.update(id, {
            render: `Created ${response.data.data.timetables.length} timetables`,
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          try {
            localStorage.setItem(
              "timetables",
              JSON.stringify(response.data.data)
            );
          } catch (err) {
            toast.update(id, {
              render: `Created ${response.data.data.timetables.length} timetables. Can't store`,
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          }
        } else {
          if (courses.length > 1) {
            toast.update(id, {
              render: "Impossible",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          } else {
            toast.update(id, {
              render: "Please select at least one course",
              type: "error",
              isLoading: false,
              autoClose: 2000,
            });
          }
        }
        setAllConfigs(response.data.data.timetables);
      });
  };

  return (
    <div className="page-container">
      <MakeTableForm
        allCourses={allCourses}
        makeTimetablesHandler={makeTimetables}
      />
      <TimeTableList allConfigs={allConfigs} length={allConfigs.length} />
    </div>
  );
};

export default GenerateTimetables;
