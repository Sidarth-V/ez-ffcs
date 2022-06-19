import "./saved-timetable.styles.scss";
import CoursesTable from "../courses-table/courses-table.component";

const SavedTimeTable = ({ slots, config, index }) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI"];

  return (
    <div className="time-table-container">
      <div className="table">
        <table key={index}>
          <tbody>
            <tr>
              <th className="grey-bg">
                Theory
                <br />
                Hours
              </th>
              <th className="theory-hrs">
                8:00AM to <br />
                8:50AM
              </th>
              <th className="theory-hrs">
                9:00AM to <br />
                9:50AM
              </th>
              <th className="theory-hrs">
                10:00AM to <br />
                10:50AM
              </th>
              <th className="theory-hrs">
                11:00AM to <br />
                11:50AM
              </th>
              <th className="theory-hrs">
                12:00PM to <br />
                12:50PM
              </th>
              <th className="theory-hrs"></th>
              <th className="grey-bg"></th>
              <th className="theory-hrs">
                2:00PM to <br />
                2:50PM
              </th>
              <th className="theory-hrs">
                3:00PM to <br />
                3:50PM
              </th>
              <th className="theory-hrs">
                4:00PM to <br />
                4:50PM
              </th>
              <th className="theory-hrs">
                5:00PM to <br />
                5:50PM
              </th>
              <th className="theory-hrs">
                6:00PM to <br />
                6:50PM
              </th>
              <th className="theory-hrs">
                6:51PM to <br />
                7:00PM
              </th>
              <th className="theory-hrs">
                7:01PM to <br />
                7:50PM
              </th>
            </tr>
            <tr>
              <th className="grey-bg">
                Lab
                <br />
                Hours
              </th>
              <th className="lab-hrs">
                8:00AM to <br />
                8:50AM
              </th>
              <th className="lab-hrs">
                8:51AM to <br />
                9:40AM
              </th>
              <th className="lab-hrs">
                9:51AM to <br />
                10:40AM
              </th>
              <th className="lab-hrs">
                10:41AM to <br />
                11:30AM
              </th>
              <th className="lab-hrs">
                11:40AM to <br />
                12:30AM
              </th>
              <th className="lab-hrs">
                12:31PM to <br />
                1:20PM
              </th>
              <th className="grey-bg"></th>
              <th className="lab-hrs">
                2:00PM to <br />
                2:50PM
              </th>
              <th className="lab-hrs">
                2:51PM to <br />
                3:40PM
              </th>
              <th className="lab-hrs">
                3:51PM to <br />
                4:40PM
              </th>
              <th className="lab-hrs">
                4:41PM to <br />
                5:30PM
              </th>
              <th className="lab-hrs">
                5:40PM to <br />
                6:30PM
              </th>
              <th className="lab-hrs">
                6:31PM to <br />
                7:20PM
              </th>
              <th className="lab-hrs"></th>
            </tr>

            {days.map((day, i) => {
              return (
                <tr key={i}>
                  <th className="grey-bg">{day}</th>
                  {slots[i].map((slot) => {
                    if (slot.data) {
                      return (
                        <td
                          className="classes-green"
                          key={slot.id}
                          style={{
                            backgroundColor: `#${slot.color}`,
                          }}
                        >
                          {slot.data}
                        </td>
                      );
                    } else if (slot.slot === "LUNCH") {
                      return <td className="grey-bg" key={slot.id}></td>;
                    }
                    return (
                      <td className="classes" key={slot.id}>
                        {slot.slot}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <CoursesTable config={config} />
    </div>
  );
};

export default SavedTimeTable;
