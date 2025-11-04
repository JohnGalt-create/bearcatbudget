import React from 'react';

export default function Gamification({ budgetData }) {
  const totalSpent = budgetData.spending.reduce(
    (sum, s) => sum + s.amount,
    0
  );
  const remaining = budgetData.mealPlan - totalSpent;
  const points = remaining > 0 ? remaining : 0;

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">Gamification</h1>
      <p>Points Earned: {points}</p>
      <p>Keep spending under budget to earn more points!</p>
    </div>
  );
}
