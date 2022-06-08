import "./view-teachers.styles.scss";
import { useState, useEffect } from "react";
import CardList from "../../components/card-list/card-list.component";
import axios from "axios";
import MenuBar from "../../components/menu-bar/menu-bar.component";

const ViewTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [search, setSearch] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(teachers);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/allTeachers")
      .then((response) => {
        return response.data;
      })
      .then((users) => {
        setTeachers(users);
      });
    axios
      .get("http://localhost:8000/allCourses")
      .then((response) => {
        return response.data;
      })
      .then((courses) => {
        setAllCourses(courses);
      });
  }, []);

  useEffect(() => {
    const filterBySearch = teachers.filter((teacher) => {
      let re = new RegExp(search, "gi");
      return teacher.empName.match(re);
    });

    const filterByCourseCodes = filterBySearch.filter((teacher) => {
      return teacher.courseCode.includes(courseCode);
    });

    setFilteredTeachers(filterByCourseCodes);
  }, [teachers, search, courseCode]);

  const onSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const onCourseCodeChange = (event) => {
    if (!event) {
      setCourseCode("");
    } else {
      setCourseCode(event.value);
    }
  };

  return (
    <div className="view-teachers-container">
      <MenuBar
        onSearchHandler={onSearchChange}
        onCourseCodeChangeHandler={onCourseCodeChange}
        allCourses={allCourses}
      />
      <CardList teachers={filteredTeachers} />
    </div>
  );
};

export default ViewTeachers;
