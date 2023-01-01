import React from "react";
import Transaction from "./Transaction";
import Button from '../../elements/Button'
import {BsArrowRightCircle} from 'react-icons/bs'

function Transactions() {
  const transactions = [
    { id: 1, name: "Transaction 1" },
    { id: 2, name: "Transaction 2" },
    { id: 3, name: "Transaction 3" },
    { id: 4, name: "Transaction 4" },
    { id: 5, name: "Transaction 5" }
  ];

  return (
    <div className="mx-4">
      <h3 >Transactions</h3>
      <div className="mb-4">
        {transactions.map(transaction => (
          <Transaction key={transaction.id} name={transaction.name} />
        ))}
      </div>
      <div><Button dashed rounded className="w-full flex items-center justify-center"><BsArrowRightCircle className="mr-2"/>View More</Button></div>
    </div>
  );
}

export default Transactions