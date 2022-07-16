import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionsList from "./TransActionsList";
import {Transaction} from "../Interfaces"

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const addTransaction = (formValue: Transaction) => {
    setTransactions([...transactions, { ...formValue, id: Date.now() }]);
    console.log(formValue);
  };

  // when transactions updated, we should upadte (income & expense)
  useEffect(() => {
    // set variable to not mutate
    let exp = 0;
    let inc = 0;
    transactions.forEach((t) => {
      t.type === "expense"
        ? // + => convert string to number
          // general expense
          (exp += +t.amount)
        : // general income
          (inc += +t.amount);
    });
    setExpense(exp);
    setIncome(inc);
  }, [transactions]);

  return (
    <section className="container">
      <OverViewComponent
        addTransaction={addTransaction}
        income={income}
        expense={expense}
      />
      <TransActionsList transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
