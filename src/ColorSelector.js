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
    <div
      className="container"
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h2 className="mb-4">Choose Your Subscription Plan</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            onClick={() => setActivePlan(plan.name)}
            style={{
              width: "250px",
              padding: "20px",
              border: "2px solid #ccc",
              borderRadius: "12px",
              cursor: "pointer",
              backgroundColor:
                activePlan === plan.name ? "#007bff" : "grey",
              color: activePlan === plan.name ? "white" : "#333",
              boxShadow:
                activePlan === plan.name
                  ? "0 4px 10px rgba(0, 123, 255, 0.4)"
                  : "0 2px 4px rgba(255, 255, 255, 0.84)",
              transition: "all 0.3s ease",
            }}
          >
            <h4>{plan.name}</h4>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>{plan.price}</p>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "30px", fontStyle: "italic" }}>
        Selected Plan: <strong>{activePlan}</strong>
      </p>
    </div>
  );
}
