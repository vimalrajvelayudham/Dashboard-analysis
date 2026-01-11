// Bar Chart - Course Progress
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Ariyalur", "Chennai", "Coimbatore", "Erode", "Karur"],
    datasets: [
      {
        label: "Good",
        data: [55, 70, 90, 80, 65],
        backgroundColor: "#74b9ff"
      },
      {
        label: "Average",
        data: [45, 60, 50, 55, 60],
        backgroundColor: "#55efc4"
      },
      {
        label: "Below",
        data: [30, 40, 35, 20, 25],
        backgroundColor: "#ff7675"
      }
    ]
  }
});

// Horizontal Bar
new Chart(document.getElementById("horizontalChart"), {
  type: "bar",
  data: {
    labels: ["Overall", "Assessment Taken", "Passed", "Failed"],
    datasets: [{
      data: [22500, 18563, 13500, 5063],
      backgroundColor: ["#74b9ff", "#00cec9", "#2ecc71", "#ff7675"]
    }]
  },
  options: {
    indexAxis: "y"
  }
});

// Donut Chart
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    labels: ["Completed", "Not Completed"],
    datasets: [{
      data: [68, 32],
      backgroundColor: ["#74b9ff", "#fab1a0"]
    }]
  }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["A Grade", "B Grade", "C Grade", "D Grade", "E Grade"],
    datasets: [{
      data: [48, 32, 35, 13, 12],
      backgroundColor: [
        "#74b9ff",
        "#55efc4",
        "#ffeaa7",
        "#ff7675",
        "#dfe6e9"
      ]
    }]
  }
});
