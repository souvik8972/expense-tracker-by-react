import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const transactions = [
  { name: 'Rent', type: 'expense', description: 'Monthly rent payment', price: 1200, date: '2024-01-05' },
  { name: 'Salary', type: 'income', description: 'Monthly salary', price: 3000, date: '2024-01-10' },
  { name: 'Groceries', type: 'expense', description: 'Weekly groceries', price: 150, date: '2024-01-12' },
  { name: 'Consulting', type: 'income', description: 'Freelance consulting', price: 800, date: '2024-02-15' },
  { name: 'Utilities', type: 'expense', description: 'Monthly utilities', price: 200, date: '2024-02-20' },
  // More transactions...
];

const processTransactions = (transactions) => {
  const monthlyData = {
    income: Array(12).fill(0),
    expenses: Array(12).fill(0),
  };

  transactions.forEach(({ type, price, date }) => {
    const month = new Date(date).getMonth(); // Get the month index (0 = January, 11 = December)
    if (type === 'income') {
      monthlyData.income[month] += price;
    } else if (type === 'expense') {
      monthlyData.expenses[month] += price;
    }
  });

  return monthlyData;
};

const getFilteredData = (monthlyData) => {
  const labels = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const filteredLabels = [];
  const filteredIncomeData = [];
  const filteredExpensesData = [];

  monthlyData.income.forEach((income, month) => {
    const expense = monthlyData.expenses[month];
    if (income !== 0 || expense !== 0) {
      filteredLabels.push(labels[month]);
      filteredIncomeData.push(income);
      filteredExpensesData.push(expense);
    }
  });

  return {
    labels: filteredLabels,
    incomeData: filteredIncomeData,
    expensesData: filteredExpensesData
  };
};

const ChartTable = () => {
  const monthlyData = processTransactions(transactions);
  const { labels, incomeData, expensesData } = getFilteredData(monthlyData);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Income',
        data: incomeData,
        backgroundColor: '#050C9C',  // Light Blue
        borderColor: '#050C9C',         // Steel Blue
        borderWidth: 0.5,
        borderRadius: 5,
      },
      {
        label: 'Expenses',
        data: expensesData,
        backgroundColor: '#4B70F5',  // Dodger Blue
        borderColor: 'rgba(30, 144, 255, 1)',        // Dodger Blue
        borderWidth: 1,
        borderRadius: 5,
      }
    ]
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines for x-axis
        },
      },
      y: {
        grid: {
          display: false, // Remove grid lines for y-axis
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      
    },
  };

  return <Bar data={data} options={options} className='p-4' />;
};

export default ChartTable;
