import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const TotalExpense = (props) => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-info">
      <span>Spent So Far: {totalExpense}TK</span>
    </div>
  );
};

export default TotalExpense;
