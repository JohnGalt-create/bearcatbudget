import React, { useState } from "react";

export default function BudgetInput({ onUpdate }) {
  const [mealPlan, setMealPlan] = useState(0);
  const [spending, setSpending] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddExpense = () => {
    if (!category || !amount) return;
    setSpending([...spending, { category, amount: Number(amount) }]);
    setCategory("");
    setAmount("");
  };

  const handleSubmit = () => {
    onUpdate({ mealPlan, spending });
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Enter Your Budget</h2>

      <input
        type="number"
        placeholder="Meal Plan Balance"
        value={mealPlan}
        onChange={(e) => setMealPlan(Number(e.target.value))}
        className="border p-2 mb-4 w-full rounded"
      />

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded w-24"
        />
        <button
          onClick={handleAddExpense}
          className="bg-blue-500 text-white px-3 rounded"
        >
          Add
        </button>
      </div>

      <ul className="mb-4">
        {spending.map((s, i) => (
          <li key={i}>
            {s.category}: ${s.amount}
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
      >
        Save Budget
      </button>
    </div>
  );
}
