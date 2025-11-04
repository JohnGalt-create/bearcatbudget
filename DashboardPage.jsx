import React, { useState } from "react";
import Dashboard from "../components/Dashboard";

export default function DashboardPage() {
  const [budgetData, setBudgetData] = useState({
    mealPlan: 500,
    spending: [
      { category: "Food", amount: 50 },
      { category: "Books", amount: 20 },
    ],
  });

  return (
    <div className="p-4 pt-6">
      <img
        src="/buny_logo.png"
        alt="Binghamton Logo"
        className="w-32 mx-auto mb-4"
      />
      <Dashboard budgetData={budgetData} />
    </div>
  );
}
