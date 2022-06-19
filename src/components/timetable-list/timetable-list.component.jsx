import TimeTable from "../timetable/timetable.component";
import { Fragment, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import "./timetable-list.styles.scss";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoursesTable from "../courses-table/courses-table.component";
import SaveTimetable from "../save-timetable/save-timetable.component";

const TimeTableList = ({ allConfigs }) => {
  const convertToSlots = (config) => {
    let slots = [
      [
        {
          id: "m1",
          slot: "A1/L1",
        },
        {
          id: "m2",
          slot: "F1/L2",
        },
        {
          id: "m3",
          slot: "D1/L3",
        },
        {
          id: "m4",
          slot: "TB1/L4",
        },
        {
          id: "m5",
          slot: "TG1/L5",
        },
        {
          id: "m6",
          slot: "L6",
        },
        {
          id: "LUNCH",
          slot: "LUNCH",
        },
        {
          id: "m7",
          slot: "A2/L31",
        },
        {
          id: "m8",
          slot: "F2/L32",
        },
        {
          id: "m9",
          slot: "D2/L33",
        },
        {
          id: "m10",
          slot: "TB2/L34",
        },
        {
          id: "m11",
          slot: "TG2/L35",
        },
        {
          id: "m12",
          slot: "L36",
        },
        {
          id: "m13",
          slot: "V3",
        },
      ],
      [
        {
          id: "tu1",
          slot: "B1/L7",
        },
        {
          id: "tu2",
          slot: "G1/L8",
        },
        {
          id: "tu3",
          slot: "E1/L9",
        },
        {
          id: "tu4",
          slot: "TC1/L10",
        },
        {
          id: "tu5",
          slot: "TAA1/L11",
        },
        {
          id: "tu6",
          slot: "L12",
        },
        {
          id: "LUNCH",
          slot: "LUNCH",
        },
        {
          id: "tu7",
          slot: "B2/L37",
        },
        {
          id: "tu8",
          slot: "G2/L38",
        },
        {
          id: "tu9",
          slot: "E2/L39",
        },
        {
          id: "tu10",
          slot: "TC2/L40",
        },
        {
          id: "tu11",
          slot: "TAA2/L41",
        },
        {
          id: "tu12",
          slot: "L42",
        },
        {
          id: "tu13",
          slot: "V4",
        },
      ],
      [
        {
          id: "w1",
          slot: "C1/L13",
        },
        {
          id: "w2",
          slot: "A1/L14",
        },
        {
          id: "w3",
          slot: "F1/L15",
        },
        {
          id: "w4",
          slot: "V1/L16",
        },
        {
          id: "w5",
          slot: "V2/L17",
        },
        {
          id: "w6",
          slot: "L18",
        },
        {
          id: "LUNCH",
          slot: "LUNCH",
        },
        {
          id: "w7",
          slot: "C2/L43",
        },
        {
          id: "w8",
          slot: "A2/L44",
        },
        {
          id: "w9",
          slot: "F2/L45",
        },
        {
          id: "w10",
          slot: "TD2/L46",
        },
        {
          id: "w11",
          slot: "TBB2/L47",
        },
        {
          id: "w12",
          slot: "L48",
        },
        {
          id: "w13",
          slot: "V5",
        },
      ],
      [
        {
          id: "th1",
          slot: "D1/L19",
        },
        {
          id: "th2",
          slot: "B1/L20",
        },
        {
          id: "th3",
          slot: "G1/L21",
        },
        {
          id: "th4",
          slot: "TE1/L22",
        },
        {
          id: "th5",
          slot: "TCC1/L23",
        },
        {
          id: "th6",
          slot: "L24",
        },
        {
          id: "LUNCH",
          slot: "LUNCH",
        },
        {
          id: "th7",
          slot: "D2/L49",
        },
        {
          id: "th8",
          slot: "B2/L50",
        },
        {
          id: "th9",
          slot: "G2/L51",
        },
        {
          id: "th10",
          slot: "TE2/L52",
        },
        {
          id: "th11",
          slot: "TCC2/L53",
        },
        {
          id: "th12",
          slot: "L54",
        },
        {
          id: "th13",
          slot: "V6",
        },
      ],
      [
        {
          id: "f1",
          slot: "E1/L25",
        },
        {
          id: "f2",
          slot: "C1/L26",
        },
        {
          id: "f3",
          slot: "TA1/L27",
        },
        {
          id: "f4",
          slot: "TF1/L28",
        },
        {
          id: "f5",
          slot: "TD1/L29",
        },
        {
          id: "f6",
          slot: "L30",
        },
        {
          id: "LUNCH",
          slot: "LUNCH",
        },
        {
          id: "f7",
          slot: "E2/L55",
        },
        {
          id: "f8",
          slot: "C2/L56",
        },
        {
          id: "f9",
          slot: "TA2/L57",
        },
        {
          id: "f10",
          slot: "TF2/L58",
        },
        {
          id: "f11",
          slot: "TDD2/L59",
        },
        {
          id: "f12",
          slot: "L60",
        },
        {
          id: "f13",
          slot: "V7",
        },
      ],
    ];
    let colors = [
      "E91E63",
      "E9594c",
      "272AB0",
      "9C27B0",
      "24A993",
      "5727B0",
      "276BB0",
      "57ACDC",
    ];
    config.forEach((subject, index) => {
      let color = colors[index];
      subject.theorySlot.split("+").forEach((theorySlot) => {
        slots.forEach((daySlots) => {
          daySlots.forEach((slot) => {
            const exp = new RegExp(`^${theorySlot}`, "g");
            if (slot.slot.match(exp)) {
              let data = `${subject.courseCode}-TH-${theorySlot}-${subject.theoryVenue}`;
              slot.data = data;
              slot.color = color;
            }
          });
        });
      });

      if (subject.labSlot) {
        subject.labSlot.split("+").forEach((labSlot) => {
          slots.forEach((daySlots) => {
            daySlots.forEach((slot) => {
              const exp = new RegExp(`${labSlot}$`, "g");
              if (slot.slot.match(exp)) {
                let data = `${subject.courseCode}-ELA-${labSlot}-${subject.labVenue}`;
                slot.data = data;
                slot.color = color;
              }
            });
          });
        });
      }
    });
    return slots;
  };

  const [currentTimetable, setCurrentTimetable] = useState(1);
  const [isIncrease, setIsIncrease] = useState(false);
  const [isDecrease, setIsDecrease] = useState(false);

  useEffect(() => {
    if (isIncrease) {
      setCurrentTimetable((prevCount) => {
        if (prevCount + 1 <= allConfigs.length) {
          return prevCount + 1;
        } else {
          return prevCount;
        }
      });
      setIsIncrease(false);
    }
    if (isDecrease) {
      setCurrentTimetable((prevCount) => {
        if (prevCount - 1 >= 1) {
          return prevCount - 1;
        } else {
          return prevCount;
        }
      });
    }
    setIsDecrease(false);
  }, [allConfigs, currentTimetable, isIncrease, isDecrease]);

  useHotkeys("right", () => {
    setIsIncrease(true);
  });
  useHotkeys("left", () => {
    setIsDecrease(true);
  });

  if (allConfigs.length > 0) {
    return (
      <Fragment>
        <div className="timetable-counter-container">
          {currentTimetable}
          &nbsp; of &nbsp;{allConfigs.length}
        </div>
        <div className="custom-carousel-container">
          <button
            onClick={() => setIsDecrease(true)}
            className="timetable-nav-buttons"
          >
            <FontAwesomeIcon icon={faCaretLeft} color="white" />
          </button>
          <TimeTable
            slots={convertToSlots(allConfigs[currentTimetable - 1])}
            key={currentTimetable}
            config={allConfigs[currentTimetable - 1]}
            index={currentTimetable - 1}
          />
          <button
            onClick={() => setIsIncrease(true)}
            className="timetable-nav-buttons"
          >
            <FontAwesomeIcon icon={faCaretRight} color="white" />
          </button>
        </div>
        <div className="save-timetable-conatiner">
          <SaveTimetable config={allConfigs[currentTimetable - 1]} />
        </div>
        <CoursesTable config={allConfigs[currentTimetable - 1]} />
      </Fragment>
    );
  } else {
    return <div></div>;
  }
};

export default TimeTableList;
