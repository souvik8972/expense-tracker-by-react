import React, { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineDelete, MdOutlineCurrencyRupee } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const ExpenseTable = ({ transactions, limit }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedTransaction, setUpdatedTransaction] = useState(null);

  // Limit the number of displayed transactions if a limit is provided
  const displayedTransactions = limit
    ? transactions.slice(0, limit)
    : transactions;

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setUpdatedTransaction({ ...displayedTransactions[index] });
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setUpdatedTransaction(null);
  };

  const handleSave = () => {
    // Implement the logic to save the updated transaction
    // For now, just resetting the state
    setEditingIndex(null);
    // Update the transactions in your parent component or state management system
    console.log('Updated transaction:', updatedTransaction);
  };

  const handleInputChange = (e, field) => {
    setUpdatedTransaction({
      ...updatedTransaction,
      [field]: e.target.value,
    });
  };

  return (
    <div className="relative capitalize list h-[100%] p-2 rounded-md overflow-y-auto w-full text-start">
      {displayedTransactions.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-12 text-start gap-4 ease-in-out delay-[0.2s] mb-1 border bg-white rounded-lg pr-2 text-metal hover:bg-metal hover:text-white hover:border transition-colors`}
        >
          <div
            className={`col-span-${
              limit ? "4" : "2"
            } flex p-2 rounded-md justify-center items-center gap-2`}
          >
            {item.type === "expense" ? (
              <GiExpense className="text-red-500" />
            ) : (
              <TbPigMoney className="text-green-500" />
            )}
            {item.type}
          </div>
          {/* name */}
          <div
            className={`col-span-${
              limit ? "4" : "2"
            } flex justify-start gap-2 items-center cursor-pointer`}
          >
            {editingIndex === index ? (
              <input
                type="text"
                value={updatedTransaction.name}
                onChange={(e) => handleInputChange(e, "name")}
                className="border text-metal rounded p-1"
              />
            ) : (
              item.name
            )}
          </div>
          {/* description */}
          {!limit && (
            <div
              className={`col-span-4 flex justify-start items-center cursor-pointer`}
            >
              {editingIndex === index ? (
                <input
                  type="text"
                  value={updatedTransaction.description}
                  onChange={(e) => handleInputChange(e, "description")}
                  className="border text-metal rounded p-1"
                />
              ) : (
                item.description
              )}
            </div>
          )}
          {/* price */}
          <div
            className={`col-span-${limit ? "2" : "1"} flex w-full justify-end items-center`}
          >
            {editingIndex === index ? (
              <input
                type="number"
                value={updatedTransaction.price}
                onChange={(e) => handleInputChange(e, "price")}
                className="border text-metal rounded p-1"
              />
            ) : (
              <>
                {item.price} <MdOutlineCurrencyRupee className="text-center mt-1" />
              </>
            )}
          </div>
{/* edit section */}
      {!limit && (    <div
            className={`col-span-${limit ? "3" : "2"} flex justify-end text-start gap-4 items-center`}
          >
            {editingIndex === index ? (
              <>
                <AiOutlineCheck
                  className="cursor-pointer text-green-500"
                  onClick={handleSave}
                />
                <AiOutlineClose
                  className="cursor-pointer text-red-500"
                  onClick={handleCancel}
                />
              </>
            ) : (
              <>
                <FiEdit2 className="cursor-pointer" onClick={() => handleEditClick(index)} />
                <MdOutlineDelete className="cursor-pointer" />
              </>
            )}
          </div>)}
        </div>
      ))}
    </div>
  );
};

export default ExpenseTable;
