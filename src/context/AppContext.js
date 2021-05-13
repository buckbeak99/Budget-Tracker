import { createContext, useReducer } from "react";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter((item) => {
         return  item.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

const initialState = {
  budget: 9000,
  expenses: [
    { id: "1", name: "shopping", cost: 4000 },
    { id: "2", name: "household-equipments", cost: 1000 },
    { id: "3", name: "Gas bill", cost: 1200 },
  ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
