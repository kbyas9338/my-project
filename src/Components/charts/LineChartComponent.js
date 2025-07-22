import { LineChart } from "@mui/x-charts/LineChart";

export default function LineChartComponent() {
  return (
    <LineChart
      series={[
        { curve: "linear", data: [1, 5, 2, 6, 3, 9.3] },
        { curve: "linear", data: [6, 3, 7, 9.5, 4, 2] },
      ]}
    />
  );
}
