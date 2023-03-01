import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const showFormOnClick = () => {
    setShowForm(!showForm);
  };

  const saveUserInputHandler = (enteredUserData) => {
    const userInput = { ...enteredUserData, id: Math.random().toString() };
    props.onAddExpense(userInput);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveUserInput={saveUserInputHandler}
          showFormOnClick={showFormOnClick}
        />
      ) : (
        <button onClick={showFormOnClick}>Add new expense</button>
      )}
    </div>
  );
};
export default NewExpense;
