let rows = [];

const rawDataToRows = async (result) => {
  rows = []
  const rawRows = result.values || [];
  const headers = rawRows.shift();

  rawRows.forEach((row) => {
    const rowData = {};
    row.forEach((item, index) => {
      rowData[headers[index]] = item;
    });
    rows.push(rowData);
  });
};

export const getDataFromSheet = async (spreadsheetId, sheetName) => {
  let apiKey = process.env.REACT_APP_SHEETS_API_KEY;
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?alt=json&key=${apiKey}`
  );
  const result = await response.json();
  rawDataToRows(result);
};

export const getAllRows = () => {
  return rows;
};

export const getAllCourses = () => {
  let courseCodes = [];
  let uniqueCourses = [];
  rows.forEach((item) => {
    if (courseCodes.indexOf(item.courseCode) === -1) {
      courseCodes.push(item.courseCode);
      uniqueCourses.push({
        courseCode: item.courseCode,
        courseTitle: item.courseTitle,
      });
    }
  });
  return uniqueCourses;
};

const getRowsForCourse = (courseCode) => {
  let rowsForCourse = rows.filter((item) => {
    return item.courseCode === courseCode;
  })
  return rowsForCourse;
}


export const getTeachersForCourse = (courseCode) => {
  let rowsForCourse = getRowsForCourse(courseCode);

  let teachers = [];
  let teachersForCourse = [];

  rowsForCourse.forEach(item => {
    if(teachers.indexOf(item.faculty) === -1) {
      teachers.push(item.faculty);
      teachersForCourse.push({
        value: item.faculty,
        label: item.faculty,
      });
    }
  })

  return teachersForCourse;
}

export const getSlotsForCourse = (courseCode, faculty) => {
  let rowsForCourse = getRowsForCourse(courseCode);
  let teachersForCourse = rowsForCourse.filter((item) => {
    return item.faculty === faculty
  })
  let slotsForCourse = teachersForCourse.map(item => item.slot)
  return slotsForCourse
}