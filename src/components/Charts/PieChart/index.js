import React, { useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import theme from 'styles/theme';

am4core.useTheme(am4themes_animated);

const PieChart = ({ theme, pieData, chartTitle, tooltipText }) => {
  // const chart = useRef(null);

  useLayoutEffect(() => {
    // Create chart instance
    let pieChart = am4core.create(chartTitle, am4charts.PieChart);

    // reduce pie chart size
    pieChart.radius = am4core.percent(80);

    // add title to pieChart
    let title = pieChart.titles.create();
    // add title text
    title.text = chartTitle;
    // change title font size
    title.fontSize = 15;
    title.paddingTop = 20;

    // add hover tooltip to chart title
    title.tooltipText = tooltipText;
    // pieChart.tooltip.label.maxWidth = 55;
    pieChart.tooltip.label.wrap = true;

    // Adds Legend to Chart
    pieChart.legend = new am4charts.Legend();
    pieChart.legend.paddingBottom = 15;
    pieChart.logo.disabled = true;

    // Add data
    pieChart.data = pieData;

    // Change PieChart fontsize
    pieChart.fontSize = 12;

    // Add and configure Series
    let pieSeries = pieChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = 'RawCapacity';
    pieSeries.dataFields.category = 'Asset';
    // loogs for a property field loaded from pieData variable
    // pieSeries.slices.template.propertyFields.fill = 'color';

    pieSeries.slices.template.propertyFields.fill = 'color';

    // Changes width of pie chart pointers and allows wrapping of text when max width is hit
    pieSeries.labels.template.maxWidth = 54;
    // pieSeries.labels.template.wrap = true;

    // setting to allow only label to be shown
    pieSeries.labels.template.text = '{value}';
    pieSeries.labels.template.fontSize = 18;
    pieSeries.labels.template.textAlign = 'center';

    return () => {
      pieChart.dispose();
    };
  }, [pieData, chartTitle, tooltipText]);

  return (
    <div
      id={chartTitle}
      style={{
        width: '100%',
        height: '100%',
        // paddingTop: '10px',
        position: 'relative',
      }}
    ></div>
  );
};

export default PieChart;
