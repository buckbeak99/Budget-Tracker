import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Remaining = (props) => {
  const { budget, expenses } = useContext(AppContext);
  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="alert alert-success">
      <span>Remaining: {budget - totalExpense}TK</span>
    </div>
  );
};

export default Remaining;
