import React, { useState } from "react";
import ExpenseTable from "../../ExpenseTable/ExpenseTable";
import { motion } from "framer-motion";
import { Pagination, Button } from "@mui/material";
import { LiaFileDownloadSolid } from "react-icons/lia";

const AllExpenses = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 13; // Number of items per page

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
    { name: "Utilities", type: "expense", description: "Monthly utilities", price: 200, date: "2024-02-20" },
    { name: "Gym", type: "expense", description: "Monthly gym membership", price: 50, date: "2024-03-05" },
    { name: "Bonus", type: "income", description: "Performance bonus", price: 500, date: "2024-03-10" },
    { name: "Books", type: "expense", description: "Purchase of books", price: 100, date: "2024-03-15" },
    { name: "Gift", type: "income", description: "Birthday gift", price: 150, date: "2024-04-01" },
    { name: "Dinner", type: "expense", description: "Dinner with friends", price: 120, date: "2024-04-07" }
  ];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = transactions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const convertToCSV = (data) => {
    const header = ["Name", "Type", "Description", "Price", "Date"];
    const rows = data.map(item => [
      item.name,
      item.type,
      item.description,
      item.price,
      item.date
    ]);

    return [
      header.join(","),
      ...rows.map(row => row.join(","))
    ].join("\n");
  };

  const handleDownload = () => {
    const csvContent = convertToCSV(paginatedTransactions);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    // Create a link and trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = `expenses_page_${page}.csv`;
    link.click();
    
    // Clean up URL object
    URL.revokeObjectURL(url);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="w-full h-full p-4">
      <div className="w-full flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-metal">All Expenses</h1>
        <Button
         
          onClick={handleDownload}
          startIcon={<LiaFileDownloadSolid />}
          className="flex items-center m-4 "
        >
          
        </Button>
      </div>
      
      <motion.div initial={{ x: 100 }} animate={{ x: 0 }} className="w-full h-[80vh]">
        <ExpenseTable transactions={paginatedTransactions} />
      </motion.div>
      
      <div className="w-full flex justify-center items-center mt-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default AllExpenses;
