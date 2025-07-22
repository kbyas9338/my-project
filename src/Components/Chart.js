import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { addLabels, balanceSheet } from "./Balancesheet";
import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

// Dark Theme Configuration
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // For cards, sidebar, etc.
    },
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Pink
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

// Tree data
// const MUI_X_PRODUCTS = [
//   {
//     id: "grid",
//     label: "Data Grid",
//     children: [
//       { id: "grid-community", label: "@mui/x-data-grid" },
//       { id: "grid-pro", label: "@mui/x-data-grid-pro" },
//       { id: "grid-premium", label: "@mui/x-data-grid-premium" },
//     ],
//   },
//   {
//     id: "pickers",
//     label: "Date and Time Pickers",
//     children: [
//       { id: "pickers-community", label: "@mui/x-date-pickers" },
//       { id: "pickers-pro", label: "@mui/x-date-pickers-pro" },
//     ],
//   },
//   {
//     id: "charts",
//     label: "Charts",
//     children: [
//       { id: "charts-community", label: "@mui/x-charts" },
//       { id: "charts-pro", label: "@mui/charts-pro" },
//     ],
//   },
//   {
//     id: "tree-view",
//     label: "Tree View",
//     children: [
//       { id: "tree-view-community", label: "@mui/x-tree-view" },
//       { id: "tree-view-pro", label: "@mui/x-tree-view-pro" },
//     ],
//   },
// ];

export default function StackBars() {
  let url = process.env.REACT_APP_URL;
  console.log(url)
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {/* Applies global dark theme styles */}
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        {/* Sidebar (Tree View) */}
        {/* <Box
          sx={{
            width: 280,
            borderRight: "1px solid #444",
            p: 2,
            bgcolor: "background.paper",
          }}
        >
          <RichTreeView items={MUI_X_PRODUCTS} />
        </Box> */}

        {/* Main Content (Bar Chart) */}
        <Box sx={{ flexGrow: 1, p: 2 }}>
          <BarChart
            dataset={balanceSheet}
            series={addLabels([
              { dataKey: "currAss", stack: "assets" },
              { dataKey: "nCurrAss", stack: "assets" },
              { dataKey: "curLia", stack: "liability" },
              { dataKey: "nCurLia", stack: "liability" },
              { dataKey: "capStock", stack: "equity" },
              { dataKey: "retEarn", stack: "equity" },
              { dataKey: "treas", stack: "equity" },
            ])}
            xAxis={[{ dataKey: "year" }]}
            yAxis={[{ width: 80 }]}
            {...config}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

// Bar chart config
const config = {
  height: 450,
  margin: { left: 40 },
  hideLegend: true,
};
