import React from "react";
import ExpenseItem from "../component/ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: "1", name: "shopping", cost: 4000 },
    { id: "2", name: "household-equipments", cost: 1000 },
    { id: "1", name: "Gas bill", cost: 1200 },
  ];
  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
