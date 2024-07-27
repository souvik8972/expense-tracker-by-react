import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoList } from "react-icons/io5";
import { motion } from "framer-motion";

const Sidebar = () => {
  // Define animation variants for the nav items
  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  // Define animation variants for the logout button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-[200px] h-[88vh] pt-3 pb-1">
      <div className="w-[180px] h-[85vh] m-auto">
        <div className="h-[76vh] ease-in-out delay-75 w-full flex flex-col gap-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            <motion.div variants={navItemVariants}>
              <NavLink
                className="flex w-[150px] rounded-md p-2 mb-2 justify-start items-center pl-2 pr-2 gap-1"
                to="/dashboard"
              >
                <MdDashboard /> Dashboard
              </NavLink>
            </motion.div>
            {/* Add more nav items here */}
              <motion.div variants={navItemVariants}>
              <NavLink
                className="flex w-[150px] rounded-md p-2 justify-start items-center pl-2 mb-2 pr-2 gap-1"
                to="/all-Expenses"
              >
                <IoList/> All Expenses
              </NavLink>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <NavLink
                className="flex w-[150px] mb-2  rounded-md p-2 justify-start items-center pl-2 pr-2 gap-1"
                to="/add-expense"
              >
                <IoMdAddCircle /> Add Expense
              </NavLink>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <NavLink
                to="/report"
                className="flex w-[150px] rounded-md  mb-2  p-2 justify-start items-center pl-2 pr-2 gap-1"
              >
                <TbReportAnalytics /> Report
              </NavLink>
            </motion.div>
            <motion.div variants={navItemVariants}>
              <NavLink
                className="flex w-[150px] rounded-md p-2 justify-start items-center pl-2 pr-2 gap-1"
                to="/leaderboard"
              >
                <MdOutlineLeaderboard /> Leaderboard
              </NavLink>
            </motion.div>
            
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.button
            className="p-2 pl-5 pr-5 rounded-md bg-metal text-white border border-white all ease-in-out delay-100 hover:border-metal hover:bg-white hover:text-metal"
          
          >
            Logout
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
