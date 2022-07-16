import React, { useEffect, useState } from "react";
import {TransActionsListProps } from "../Interfaces";

const TransActionsList: React.FC<TransActionsListProps> = ({transactions}) => {
  const [searched, setSearched] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(
    transactions
  );

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearched(e.currentTarget.value);
    filterHandler(e.currentTarget.value);
  };

  // when transactions updated, filterHandler should be run
  useEffect(() => {
    filterHandler(searched);
  }, [transactions]);

  const filterHandler = (search: string) => {
    if (!search || search === "") {
      setFilteredTransactions(transactions);
      return;
    }
    // this filter should excecute on ((transactions))
    // because just with this way the searched list always is up to date
    let filtered = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div className="transactionsList">
      {transactions.length > 0 ? (
        <input
          type="text"
          placeholder="Search For Transaction"
          value={searched}
          onChange={changeHandler}
        />
      ) : (
        <h3 style={{ textAlign: "center" }}>please add your transaction</h3>
      )}
      <div className="list">
        {filteredTransactions.map((transaction) => {
          return (
            <div
              className={`transactionItem ${
                transaction.type === "expense" && "redborder"
              }`}
              key={transaction.id}
            >
              <span>{transaction.desc}</span>
              <span>{transaction.amount}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TransActionsList;
