export const diagnosticsData = {
  data: {
    labels: ["Malaria", "Cold", "Typhoid", "Others"],
    datasets: [
      {
        data: [30, 20, 20, 30],
        backgroundColor: ["#FF4C61", "#FFB800", "#4C7EFF", "#00C896"],
      },
    ],
  },
  options: {
    plugins: {
      legend: { position: "bottom" },
    },
  },
};

export const patientsData = {
  data: {
    labels: ["Men", "Women", "Children"],
    datasets: [
      {
        data: [35, 35, 30],
        backgroundColor: ["#4C7EFF", "#FF4C61", "#FFB800"],
      },
    ],
  },
  options: {
    plugins: {
      legend: { position: "bottom" },
    },
  },
};

export const healthIndexData = {
  data: {
    labels: ["June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Health Ratio",
        data: [70, 55, 60, 6, 70, 25, 80],
        fill: true,
        borderColor: "#4C7EFF",
        backgroundColor: "rgba(76,126,255,0.2)",
      },
    ],
  },
};

export const appointmentsData = {
  data: {
    labels: ["April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Emergency",
        data: [4, 5, 6, 3, 6, 7, 4, 3, 2],
        backgroundColor: "#FF4C61",
      },
      {
        label: "Examination",
        data: [3, 2, 4, 5, 6, 3, 2, 4, 5],
        backgroundColor: "#4C7EFF",
      },
      {
        label: "Consultation",
        data: [2, 3, 2, 4, 3, 5, 6, 4, 2],
        backgroundColor: "#FFB800",
      },
      {
        label: "Routine Checkup",
        data: [5, 4, 3, 4, 5, 3, 4, 5, 4],
        backgroundColor: "#00C896",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
    },
  },
};
