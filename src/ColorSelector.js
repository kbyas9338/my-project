import React, { useState } from "react";

export default function ColorSelector() {
  const [activePlan, setActivePlan] = useState("Normal");

  const plans = [
    {
      name: "Normal",
      price: "₹199 / month",
      features: ["Access to basic content", "Email support", "1 device login"],
    },
    {
      name: "Advance",
      price: "₹499 / month",
      features: [
        "All Normal features",
        "Offline downloads",
        "Up to 3 device logins",
      ],
    },
    {
      name: "Premium",
      price: "₹999 / month",
      features: [
        "All Advance features",
        "Priority support",
        "Unlimited device login",
        "4K Streaming",
      ],
    },
  ];

  return (
    <div className="container py-4 text-center">
      <h2 className="mb-4">Choose Your Subscription Plan</h2>

      <div className="row justify-content-center g-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="col-12 col-sm-6 col-md-4"
            onClick={() => setActivePlan(plan.name)}
          >
            <div
              className={`card h-100 shadow-sm ${
                activePlan === plan.name ? "border-primary bg-primary text-white" : ""
              }`}
              style={{
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              <div className="card-body">
                <h4 className="card-title">{plan.name}</h4>
                <p className="card-text fw-bold fs-5">{plan.price}</p>
                <ul className={`list-unstyled ${activePlan === plan.name ? "text-white" : "text-dark"}`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 fst-italic">
        Selected Plan: <strong>{activePlan}</strong>
      </p>
    </div>
  );
}
