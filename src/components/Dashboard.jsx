import React from "react";

export default function Dashboard({ budgetData }) {
  const totalSpent = budgetData.spending.reduce((sum, s) => sum + s.amount, 0);
  const remaining = budgetData.mealPlan - totalSpent;

  const feedback =
    remaining > 0
      ? `Great job! You have $${remaining} remaining.`
      : `Warning! You are over your budget by $${-remaining}.`;

  return (
    <div className="bg-white p-6 rounded shadow mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
      <p>Total Spent: ${totalSpent}</p>
      <p>{feedback}</p>
    </div>
  );
}
