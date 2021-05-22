import {ArgumentAxis, BarSeries, Chart, Title, ValueAxis} from "@devexpress/dx-react-chart-material-ui";
import {Animation} from "@devexpress/dx-react-chart";
import {Paper} from "@material-ui/core";
import React from "react";

export function BarGraph({data}) {
  return <Paper>
    <Chart
      data={data}
    >

      <ArgumentAxis/>
      <ValueAxis max={30} />

      <BarSeries argumentField="argument"
                 valueField="value"
      />
      <Title text={"삶의 균형도"} />
      <Animation />
    </Chart>
  </Paper>
}