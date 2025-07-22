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
        {/* ✅ Reusable Card Component */}
        {[
          {
            title: "Line Chart",
            color: "bg-primary text-white",
            component: <LineChartComponent />,
          },
          {
            title: "Bar Chart",
            color: "bg-success text-white",
            component: <BarChartComponent />,
          },
          {
            title: "Pie Chart",
            color: "bg-warning text-dark",
            component: <PieChartComponent />,
          },
          {
            title: "Area Chart",
            color: "bg-danger text-white",
            component: <AreaChartComponent />,
          },
        ].map((chart, idx) => (
          <div key={idx} className="col-12 col-md-6">
            <div
              className="card shadow-sm border border-secondary rounded-4 bg-secondary-subtle text-light h-100"
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div className={`card-header ${chart.color} rounded-top-4`}>
                {chart.title}
              </div>
              <div className="card-body p-3">{chart.component}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
