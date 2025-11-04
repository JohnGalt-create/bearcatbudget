import React from 'react';

export default function Dashboard({ budgetData }) {
  const totalSpent = budgetData.spending.reduce(
    (sum, s) => sum + s.amount,
    0
  );
  const remaining = budgetData.mealPlan - totalSpent;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Meal Plan: ${budgetData.mealPlan}</p>
      <p>Total Spent: ${totalSpent}</p>
      <p>Remaining: ${remaining}</p>
    </div>
  );
}
