import MakeTableForm from "../../components/make-table-form/make-table-form.component";
import TimeTableList from "../../components/timetable-list/timetable-list.component";
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./make-tt.styles.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from '../../components/navbar/navbar.component'


const MakeTimeTable = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allConfigs, setAllConfigs] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const customId = "custom-id-yes";

  const getData = async () => {
    const spreadsheetId = '1Dyw32_vukmj1dZ43VaG1kuoSsCwcR1eyAaepfRB0qEs';
    let {initialList, courseCodes} = await axios
      .get(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/allCourses2023?alt=json&key=${process.env.REACT_APP_SHEETS_API_KEY}`)
      .then((response) => {
        let initialList = [];
        let courseCodes = [];
        for(let i = 1; i < response.data.values.length; i++)
        {
          courseCodes.push(response.data.values[i][0]);
          initialList.push({
            courseCode: response.data.values[i][0],
            courseTitle: response.data.values[i][1],
            slot: response.data.values[i][2],
            roomNumber: response.data.values[i][3],
            empName: response.data.values[i][4],
            courseType: response.data.values[i][5]
          })
        }
        courseCodes = [...new Set(courseCodes)];
        return {initialList, courseCodes}
      });

    //console.log(initialList)
    console.log(courseCodes)
  }

  getData();

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
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-teachers`)
      .then((response) => {
        setTeachers(response.data.data.teachers);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-courses`)
      .then((response) => {
        //console.log(response.data.data.courses)
        setAllCourses(response.data.data.courses);
      });
  }, []);

  const makeTimetables = (courses) => {
    console.log(courses)
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
    <Fragment>
    <NavBar />
    <div className="make-tt-container">
      <MakeTableForm
        allCourses={allCourses}
        allTeachers={teachers}
        makeTimetablesHandler={makeTimetables}
      />
      <TimeTableList allConfigs={allConfigs} length={allConfigs.length} />
    </div>
    </Fragment>
  );
};

export default MakeTimeTable;
