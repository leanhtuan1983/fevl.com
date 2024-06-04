var xValues = [
  "CNC",
  "PTH",
  "ETC",
  "EXP",
  "CLL",
  "MTR",
  "CUR",
  "PRT",
  "HPS",
  "BLK",
  "INS",
];
var yValues = [255, 449, 244, 324, 415, 354, 125, 353, 248, 250, 380];
var barColors = [
  "#D6AE01",
  "#C51D34",
  "#924E7D",
  "#75151E",
  "#EA899A",
  "#C1876B",
  "#2C5545",
  "#CDA434",
  "#EAE6CA",
  "#781F19",
  "#A18594",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "SẢN LƯỢNG CÔNG ĐOẠN",
    },
  },
});
