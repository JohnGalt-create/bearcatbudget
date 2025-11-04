import React, { useState } from 'react';

export default function BudgetInput({ onUpdate }) {
  const [mealPlan, setMealPlan] = useState(500);
  const [spending, setSpending] = useState([{ category: '', amount: 0 }]);

  const handleChange = (index, key, value) => {
    const updated = [...spending];
    updated[index][key] = key === 'amount' ? Number(value) : value;
    setSpending(updated);
  };

  const addRow = () => setSpending([...spending, { category: '', amount: 0 }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ mealPlan, spending });
    alert('Budget updated!');
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label>Meal Plan Amount: </label>
        <input
          type="number"
          value={mealPlan}
          onChange={(e) => setMealPlan(Number(e.target.value))}
          className="border rounded p-1"
        />
      </div>

      {spending.map((s, i) => (
        <div key={i} className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Category"
            value={s.category}
            onChange={(e) => handleChange(i, 'category', e.target.value)}
            className="border rounded p-1 flex-1"
          />
          <input
            type="number"
            placeholder="Amount"
            value={s.amount}
            onChange={(e) => handleChange(i, 'amount', e.target.value)}
            className="border rounded p-1 w-24"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={addRow}
        className="bg-bunyBlue text-white px-3 py-1 rounded"
      >
        Add Row
      </button>

      <button
        type="submit"
        className="bg-bunyGreen text-white px-4 py-2 rounded"
      >
        Update Budget
      </button>
    </form>
  );
}

