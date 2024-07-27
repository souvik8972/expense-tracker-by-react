import React from "react";
import ExpenseTable from "../../ExpenseTable/ExpenseTable";
import { FaRupeeSign } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { GiExpense } from "react-icons/gi";
import { FaEdit, FaTrash } from "react-icons/fa";
import ChartTable from "../../ChartTable/ChartTable";
import {motion} from "framer-motion"
// Dashboard Component
const Dashboard = () => {
  const name="Souvik"
  const cards = [
    {
      name: "Total Balance",
      amount: "5,000",
      icon: <MdOutlineAccountBalanceWallet className="text-3xl" />,
    },
    {
      name: "Total Expenses",
      amount: "1,200",
      icon: <GiExpense className="text-3xl " />,
    },
    {
      name: "Total Savings",
      amount: "3,800",
      icon: <MdOutlineAccountBalanceWallet className="text-3xl "/>,
    },
  ];
    const transactions = [
    { name: "Rent", type: "expense", description: "Monthly rent payment", price: 1200, date: "2024-01-05" },
    { name: "Salary", type: "income", description: "Monthly salary", price: 3000, date: "2024-01-10" },
    { name: "Groceries", type: "expense", description: "Weekly groceries", price: 150, date: "2024-01-12" },
    { name: "Consulting", type: "income", description: "Freelance consulting", price: 800, date: "2024-02-15" },
    { name: "Utilities", type: "expense", description: "Monthly utilities", price: 200, date: "2024-02-20" },
    { name: "Gym", type: "expense", description: "Monthly gym membership", price: 50, date: "2024-03-05" },
    { name: "Bonus", type: "income", description: "Performance bonus", price: 500, date: "2024-03-10" },
    { name: "Books", type: "expense", description: "Purchase of books", price: 100, date: "2024-03-15" },
    { name: "Gift", type: "income", description: "Birthday gift", price: 150, date: "2024-04-01" },
    { name: "Dinner", type: "expense", description: "Dinner with friends", price: 120, date: "2024-04-07" },
  ];




  return (
    <div className="w-full h-full bg-white flex  flex-col gap-3 p-4">
      <motion.h1 initial={{ y:-100}}
        animate={{ y:0 }}
        exit={{ y:100}} className="text-3xl font-bold text-metal font-marcellus">Hello {name}
        <motion.p initial={{ x:-100}}
        animate={{ x:0 }}
        exit={{ x:-100}} className=" text-gray-500 opacity-55 text-[1rem]">Welcome to your dashboard</motion.p>
      </motion.h1>
      
      {/* Card Layout */}
      <div className="w-full h-1/3 flex  gap-4">
  
        {cards.map((card, index) => (
          <motion.div
           initial={{ y:100}}
        animate={{ y:0 }}
        exit={{ y:100}}
         transition={{delay:index*0.1}}

            key={index}
            className="w-1/3 h-full shadow-custom font-marcellus rounded-md bg-white p-4 flex flex-wrapflex-col justify-between"
          >
            <div className="ml-4 flex   justify-around w-full items-center h-full ">
              <div>
                    <h2 className="text-lg text-gray-400">{card.name}</h2>
                <p className="text-metal flex text-3xl"> <FaRupeeSign />{card.amount}</p>
                </div>
              
                <div className="text-white p-2 rounded-full bg-metal ">{card.icon}</div>
              
              
            </div>
          
          </motion.div> 
        ))}
      </div>
      {/* Chart and Table */}
      <div className="w-full h-2/3 flex  gap-3">
  
        <div className="w-1/2 h-full shadow-custom rounded-md  flex  flex-col text-center justify-evenly items-end bg-white">
                <h2 className="text-center font-marcellus text-2xl text-metal font-bold  w-full">Monthly Expenses & Income</h2>
    
          
          <ChartTable />
        </div>
        <motion.div initial={{y:-100}} animate={{y:0}} exit={{y:-100}} className="w-1/2 h-full shadow-custom rounded-md bg-white">
        <h2 className="text-center font-marcellus text-2xl m-4 mt-5 text-metal font-bold  w-full">Your Recent Expenses</h2> 
          <ExpenseTable transactions={transactions} limit={6} />
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
