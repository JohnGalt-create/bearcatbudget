import React, { useState } from "react";
import BudgetInput from "./components/BudgetInput";
import Dashboard from "./components/Dashboard";
import Gamification from "./components/Gamification";

function App() {
  const [budgetData, setBudgetData] = useState({
    mealPlan: 0,
    spending: [],
  });

  const handleBudgetUpdate = (data) => {
    setBudgetData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Bearcat Budget</h1>
      <BudgetInput onUpdate={handleBudgetUpdate} />
      <Dashboard budgetData={budgetData} />
      <Gamification budgetData={budgetData} />
    </div>
  );
}

export default App;
