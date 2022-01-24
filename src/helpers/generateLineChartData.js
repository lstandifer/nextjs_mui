const generateLineChartData = () => {
  var chartData = [];
  var firstDate = new Date();
  firstDate.setDate(firstDate.getDate() - 1000);
  var visits = 1200;

  for (var i = 0; i < 500; i++) {
    var newDate = new Date(firstDate);
    newDate.setDate(newDate.getDate() + i);

    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 16);

    chartData.push({
      date: newDate,
      value: visits,
    });
  }

  return chartData;
};

export default generateLineChartData;
