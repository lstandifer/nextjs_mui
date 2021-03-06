import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import theme from 'styles/theme';

am4core.useTheme(am4themes_animated);

const LineChart = ({ lineData, values, title }) => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let lineChart = am4core.create(title, am4charts.XYChart);
    lineChart.zoomOutButton.background.fill = am4core.color(
      theme.palette.primary.main
    );
    lineChart.zoomOutButton.background.states.getKey('hover').properties.fill =
      am4core.color(theme.palette.primary.light);
    lineChart.zoomOutButton.background.states.getKey('down').properties.fill =
      am4core.color(theme.palette.secondary.dark);

    let chartLabel = title.replace(/_/g, ' ');

    lineChart.paddingRight = 40;
    lineChart.paddingTop = 30;
    lineChart.logo.disabled = true;

    lineChart.data = lineData;

    let dateAxis = lineChart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.title.text = chartLabel;
    dateAxis.tooltip.background.fill = am4core.color(
      theme.palette.primary.main
    );

    let valueAxis = lineChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = lineChart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = 'date';
    series.dataFields.valueY = 'value';
    series.tooltipText = '{valueY.value}';
    series.fill = am4core.color(theme.palette.primary.dark);
    series.stroke = am4core.color(theme.palette.primary.main);
    series.strokeWidth = 1;

    lineChart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.minHeight = 10;
    scrollbarX.series.push(series);

    //scrollbarX.scrollbarChart.seriesContainer.hide();

    lineChart.scrollbarX = scrollbarX;

    chart.current = lineChart;

    return () => {
      lineChart.dispose();
    };
  }, [lineData, values, title]);

  return <div id={title} style={{ width: '100%', height: '100%' }} />;
};

export default LineChart;
