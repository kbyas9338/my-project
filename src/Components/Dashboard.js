import LineChartComponent from "./charts/LineChartComponent";
import BarChartComponent from "./charts/BarChartComponent";
import PieChartComponent from "./charts/PieChartComponent";
import AreaChartComponent from "./charts/AreaChartComponent";

export default function Dashboard() {
  return (
    <div
      className="container-fluid py-4"
      style={{ backgroundColor: "#181818", minHeight: "100vh" }}
    >
      <h2 className="mb-5 text-center fw-bold text-light">
        📊 Dashboard Overview
      </h2>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div
            className="card shadow-sm border border-secondary rounded-4 bg-secondary-subtle text-light"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="card-header bg-primary text-white rounded-top-4">
              Line Chart
            </div>
            <div className="card-body p-3">
              <LineChartComponent />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="card shadow-sm border border-secondary rounded-4 bg-secondary-subtle text-light"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="card-header bg-success text-white rounded-top-4">
              Bar Chart
            </div>
            <div className="card-body p-3">
              <BarChartComponent />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="card shadow-sm border border-secondary rounded-4 bg-secondary-subtle text-light"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="card-header bg-warning text-dark rounded-top-4">
              Pie Chart
            </div>
            <div className="card-body p-3">
              <PieChartComponent />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div
            className="card shadow-sm border border-secondary rounded-4 bg-secondary-subtle text-light"
            style={{ transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div className="card-header bg-danger text-white rounded-top-4">
              Area Chart
            </div>
            <div className="card-body p-3">
              <AreaChartComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
