// App.js
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import MyForm from "./MyForm";
import ColorSelector from "./ColorSelector";
import NumberColorChanger from "./NumberColorChanger";
import UserComponent from "./Components/UserComponent";
import Pagination from "./Components/Pagination";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
import StackBars from "./Components/Chart";
import Dashboard from "./Components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Make sure Bootstrap is imported

function App() {
  const [role, setRole] = useState("admin"); // Change role as needed

  return (
    <Router>
      <div className="App">
        {/* ✅ Responsive Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
          <Link className="navbar-brand fw-bold" to="/">
            My Portfolio
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex flex-wrap align-items-center gap-2">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  Formik Form
                </NavLink>
              </li>

              {(role === "admin" || role === "user") && (
                <li className="nav-item">
                  <NavLink
                    to="/color-selector"
                    className={({ isActive }) =>
                      "nav-link" + (isActive ? " active" : "")
                    }
                  >
                    Subscription
                  </NavLink>
                </li>
              )}

              {role === "admin" && (
                <>
                  <li className="nav-item">
                    <NavLink
                      to="/number-color-changer"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Color Change Number
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      to="/user-context"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      UseContext
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/pagination"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Pagination
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/chart"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Chart
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " active" : "")
                      }
                    >
                      Dashboard
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>

        {/* ✅ Responsive Container for Pages */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<MyForm />} />
            <Route
              path="/color-selector"
              element={
                <ProtectedRoute role={role} allowedRoles={["admin", "user"]}>
                  <ColorSelector />
                </ProtectedRoute>
              }
            />
            <Route
              path="/number-color-changer"
              element={
                <ProtectedRoute role={role} allowedRoles={["admin"]}>
                  <NumberColorChanger />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user-context"
              element={
                <ProtectedRoute role={role} allowedRoles={["admin"]}>
                  <UserComponent />
                </ProtectedRoute>
              }
            />
            <Route path="/pagination" element={<Pagination />} />
            <Route
              path="/chart"
              element={
                <ProtectedRoute role={role} allowedRoles={["admin"]}>
                  <StackBars />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute role={role} allowedRoles={["admin"]}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={<h2 className="text-danger">Page Not Found</h2>}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
