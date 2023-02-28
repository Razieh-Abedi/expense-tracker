import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveUserInputHandler = (enteredUserData) => {
    const userInput = { ...enteredUserData, id: Math.random().toString() };
    props.onAddExpense(userInput);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveUserInput={saveUserInputHandler} />
    </div>
  );
};
export default NewExpense;
