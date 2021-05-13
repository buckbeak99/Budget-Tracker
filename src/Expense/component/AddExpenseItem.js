import React, { useContext, useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { AppContext } from "../../context/AppContext";

const AddExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const expense = {
      id: v4(),
      name: name,
      cost: parseInt(cost),
    };
    setCost(" ");
    setName(" ");
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col sm">
          <label for="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col sm">
          <label for="cost">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseItem;
