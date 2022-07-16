import { useState } from "react";
import { OverViewComponentProps } from "../Interfaces";
import TransActionForm from "./TransActionForm";

const OverViewComponent: React.FC<OverViewComponentProps> = ({ expense, income, addTransaction }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const showHideFormHandler = (value: boolean) => setIsShow(value)

  return (
    <>
      <div className="balance">
        <div>Balance: {income - expense}$</div>
        <button
          className={isShow ? "cancel" : ""}
          onClick={() => setIsShow(!isShow)}
        >
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && (
        <TransActionForm
          showHideFormHandler={showHideFormHandler}
          addTransaction={addTransaction}
        />
      )}
      <div className="expense_income">
        <div>
          Expense
          <span style={{ color: "red" }}>{expense}$</span>
        </div>
        <div>
          Income
          <span>{income}$</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
