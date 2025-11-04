import React, { useState } from "react";
import Gamification from "../components/Gamification";

export default function GamificationPage() {
  const [budgetData, setBudgetData] = useState({
    mealPlan: 500,
    spending: [
      { category: "Food", amount: 50 },
      { category: "Books", amount: 20 },
    ],
  });

  return (
    <div className="p-4 pt-6">
      <Gamification budgetData={budgetData} />
    </div>
  );
}
