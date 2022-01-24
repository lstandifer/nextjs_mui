const generateLineChartData = () => {
  let chartData = [];
  let firstDate = new Date();

  firstDate.setDate(new Date().getDate() - 365);
  let visits = 1300;

  for (let i = 0; i < 365; i++) {
    let newDate = new Date(firstDate);

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
