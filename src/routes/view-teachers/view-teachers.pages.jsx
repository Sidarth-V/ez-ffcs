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
      .get(`${process.env.REACT_APP_BACKEND_URL}view-teachers`)
      .then((response) => {
        setTeachers(response.data.data.teachers);
      });
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-courses`)
      .then((response) => {
        convertToCourseOptions(response.data.data.courses);
      });
  }, []);

  useEffect(() => {
    const filterBySearch = teachers.filter((teacher) => {
      let re = new RegExp(search, "gi");
      return teacher.empName.match(re);
    });

    const filterByCourseCodes = filterBySearch.filter((teacher) => {
      let re = new RegExp(courseCode, "gi");
      return teacher.courseCode.match(re);
    });

    setFilteredTeachers(filterByCourseCodes);
  }, [teachers, search, courseCode]);

  const convertToCourseOptions = (courses) => {
    let options = courses.map((course) => {
      return {
        value: course.courseCode,
        label: `${course.courseCode} - ${course.courseTitle}`,
      };
    });
    setAllCourses(options);
  };

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

  const feedbackChange = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}view-teachers`)
      .then((response) => {
        setTeachers(response.data.data.teachers);
      });
  };

  return (
    <div className="view-teachers-container">
      <MenuBar
        onSearchHandler={onSearchChange}
        onCourseCodeChangeHandler={onCourseCodeChange}
        allCourses={allCourses}
      />
      <CardList teachers={filteredTeachers} onFeedbackChange={feedbackChange} />
    </div>
  );
};

export default ViewTeachers;
