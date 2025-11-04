import React from "react";

export default function Gamification({ budgetData }) {
  const totalSpent = budgetData.spending.reduce((sum, s) => sum + s.amount, 0);
  const points = Math.max(0, budgetData.mealPlan - totalSpent);

  return (
    <div className="bg-white p-6 rounded shadow max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">Gamification</h2>
      <p>Points Earned: {points}</p>
      {points >= 50 && <p className="text-green-600 font-semibold">🎉 Budget Master!</p>}
    </div>
  );
}
