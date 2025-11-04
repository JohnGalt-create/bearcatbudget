import React, { useState } from 'react';
import BudgetInput from '../components/BudgetInput';

export default function BudgetPage() {
  const [budgetData, setBudgetData] = useState({
    mealPlan: 500,
    spending: [],
  });

  return (
    <div className="p-4 pt-6">
      <BudgetInput onUpdate={setBudgetData} />
    </div>
  );
}
