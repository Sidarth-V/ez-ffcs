import MakeTableForm from "../../components/make-table-form/make-table-form.component";
import TimeTableList from "../../components/timetable-list/timetable-list.component";
import { useState, useEffect } from "react";
import axios from "axios";
import "./make-tt.styles.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakeTimeTable = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allConfigs, setAllConfigs] = useState([]);
  const [teachers, setTeachers] = useState([]);

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
    let spreadsheetId = "1aTgWUGRgZosDA7e908AdpSlZPFMWbjep9fExgl_dQ1o";
    let sheetName = "Sheet1";
    let apiKey = "AIzaSyAw8BP_ykjUBFQgPbUXoTrnyvMrPPn7jIw";
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-teachers`)
      .then((response) => {
        setTeachers(response.data.data.teachers);
      });
    axios
      .get(
        `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?alt=json&key=${apiKey}`
      )
      .then((response) => {
        const result = response.data;
        console.log(result)
        const rows = [];

        const rawRows = result.values || [];
        const headers = rawRows.shift();

        rawRows.forEach((row) => {
          const rowData = {};
          row.forEach((item, index) => {
            rowData[headers[index]] = item;
          });
          rows.push(rowData);
        });
        console.log(rows)

        setAllCourses(rows);
      });
  }, []);

  const makeTimetables = (courses) => {
    console.log(courses);
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
    <div className="make-tt-container">
      <MakeTableForm
        allCourses={allCourses}
        allTeachers={teachers}
        makeTimetablesHandler={makeTimetables}
      />
      <TimeTableList allConfigs={allConfigs} length={allConfigs.length} />
    </div>
  );
};

export default MakeTimeTable;
