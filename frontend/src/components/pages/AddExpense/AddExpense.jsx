import React, { useState } from "react";
import {motion} from "framer-motion"

const AddExpense = () => {
  // State to manage whether the form is for income or expense
  const [isIncome, setIsIncome] = useState(false);

  // Function to toggle form type
  const toggleFormType = (type) => {
    setIsIncome(type === "income");
  };

  return (
    <div className="">
      <div className="flex justify-center mb-4 gap-4 ease-in-out delay-75 ">
        <motion.button
        initial={{x:100}}
        animate={{x:0}}
        exit={{x:100}}
        transition={{duration:0.4}}
          className={`p-2 rounded-md ${
            isIncome
              ? "bg-metal text-white  "
              : " bg-white text-metal border-metal border-[1px]  hover:bg-metal hover:text-white"
          }`}
          onClick={() => toggleFormType("income")}
        >
          + Add Income
        </motion.button>
        <motion.button
        initial={{x:-100}}
        animate={{x:0}}
        exit={{x:-100}}
          transition={{duration:0.4}}
          className={`p-2 rounded-md ${
            !isIncome
                ? "bg-metal text-white border "
              : " bg-white text-metal border-metal border-[1px] hover:bg-metal hover:text-white"
          }`}
          onClick={() => toggleFormType("expense")}
        >
          + Add Expense
        </motion.button>
      </div>
      <motion.form initial={{y:100}} animate={{y:0}} exit={{y:-100}} className="flex flex-col gap-2 w-[30%] border z-20 bg-white border-black rounded-md border-dashed p-4 m-auto">
        <label htmlFor="name">{isIncome ? "Income" : "Expense"} Name</label>
        <input
          type="text"
          name="name"
          placeholder={isIncome ? "Income Name" : "Expense Name"}
          className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
        />
        <label htmlFor="type">Type</label>
        <input
          type="text"
          name="type"
          value={isIncome ? "income" : "expense"}
          className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
        />
        
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
        >
          {/* Change categories based on whether it's income or expense */}
          {isIncome ? (
            <>
              <option value="Salary">Salary</option>
              <option value="Investment">Investment</option>
              <option value="Gift">Gift</option>
              <option value="Other">Other</option>
            </>
          ) : (
            <>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Other">Other</option>
            </>
          )}
        </select>

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Description"
          className="border border-gray-300 rounded-md text-metal w-full h-10 pl-2"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          className="w-full h-10 pl-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="w-[40%] m-auto border bg-metal text-white font-bold py-2 rounded-md hover:bg-white hover:border hover:border-metal hover:text-metal transition duration-300"
        >
          {isIncome ? "Add Income" : "Add Expense"}
        </button>
      </motion.form>
    
    </div>
  );
};

export default AddExpense;
