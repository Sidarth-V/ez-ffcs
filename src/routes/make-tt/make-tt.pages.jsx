import TimeTable from "../../components/timetable/timetable.component";

const slots = [
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

const MakeTimeTable = () => {
  return <TimeTable slots={slots} />;
};

export default MakeTimeTable;
