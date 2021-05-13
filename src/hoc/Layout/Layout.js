import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aux from "../Aux/Aux";

import Budget from "../../Budget/component/Budget";
import Remaining from "../../Remaining/component/Remaining";
import TotalExpense from "../../Expense/component/TotalExpense";
import ExpenseList from "../../Expense/container/ExpenseList";
import AddExpenseItem from "../../Expense/component/AddExpenseItem";
import MainNavigation from "../../shared/component/MainNavigation";

const Layout = (props) => {
  return (
    <div className="container">
      <MainNavigation />
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
      <h3 className="mt-3">Expenses</h3>
      <div className=" row mt-3">
        <div className="col mt-3">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col mt-3">
          <AddExpenseItem />
        </div>
      </div>
    </div>
  );
};

export default Layout;
