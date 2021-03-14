import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Budget from "./Budget/component/Budget";
import Remaining from "./Remaining/component/Remaining";
import TotalExpense from "./Expense/component/TotalExpense";
import ExpenseList from "./Expense/container/ExpenseList";

const App = () => {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Tracker</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <TotalExpense />
        </div>
      </div>
      <h2 className="mt-3">Expenses</h2>
      <div className=" row mt-3">
        <div className="col mt-3">
          <ExpenseList />
        </div>
      </div>
    </div>
  );
};

export default App;
