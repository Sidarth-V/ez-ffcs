import { Fragment, useState } from "react";
import "./courses-table.styles.scss";
import Collapsible from "react-collapsible";
import TableTrigger from "../table-trigger/table-trigger.component";

const CoursesTable = ({ config }) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const generateString = (length) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  const [isOpen, setOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  const handleIcon = () => {
    setIsChanging(false);
    setOpen(!isOpen);
  };

  const rotateIcon = () => {
    setIsChanging(true);
  };

  return (
    <Collapsible
      trigger={<TableTrigger icon={isOpen} rotation={isChanging} />}
      onOpen={handleIcon}
      onClose={handleIcon}
      onOpening={rotateIcon}
      onClosing={rotateIcon}
    >
      <table>
        <thead>
          <tr>
            <th>Slot</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Faculty</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {config.map((course) => {
            if (course.labSlot) {
              return (
                <Fragment key={generateString(22)}>
                  <tr>
                    <td>{course.theorySlot}</td>
                    <td>{course.courseCode}</td>
                    <td>{course.courseTitle}</td>
                    <td>{course.empName}</td>
                    <td>{course.theoryVenue}</td>
                  </tr>

                  <tr>
                    <td>{course.labSlot}</td>
                    <td>{course.courseCode}</td>
                    <td>{course.courseTitle}</td>
                    <td>{course.empName}</td>
                    <td>{course.labVenue}</td>
                  </tr>
                </Fragment>
              );
            } else {
              return (
                <Fragment key={generateString(22)}>
                  <tr>
                    <td>{course.theorySlot}</td>
                    <td>{course.courseCode}</td>
                    <td>{course.courseTitle}</td>
                    <td>{course.empName}</td>
                    <td>{course.theoryVenue}</td>
                  </tr>
                </Fragment>
              );
            }
          })}
        </tbody>
      </table>
    </Collapsible>
  );
};

export default CoursesTable;
