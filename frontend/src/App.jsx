import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import SignupForm from "./components/SignupForm/SignupFrom";
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import AddExpense from "./components/pages/AddExpense/AddExpense";
import LeaderBoard from "./components/pages/LeaderBoard/LeaderBoard";
import Report from "./components/pages/Report/Report";
import { AnimatePresence } from "framer-motion";
import AllExpenses from "./components/pages/AllExpenses/AllExpenses";
import PreLoader from "./components/PreLoader/PreLoader";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

 // Define the load handler function
  const handleLoad = () => setLoading(false);

  useEffect(() => {
    // Set loading to false after component mounts
    setLoading(false);
    setTimeout(()=>{
      
    },6000)

    // Add load event listener
    window.addEventListener('load', handleLoad);

    // Clean up the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);



  if (loading) {
    return (
      <div >
        <PreLoader></PreLoader>
      </div>
    );
  }

  return (
    <AnimatePresence wait={true}>
      <Navbar setShowLogin={setShowLogin} />

      {showLogin && <SignupForm setShowLogin={setShowLogin} />}
      <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <Layout>
              <LeaderBoard />
            </Layout>
          }
        />
        <Route
          path="/add-expense"
          element={
            <Layout>
              <AddExpense />
            </Layout>
          }
        />
        <Route
          path="/report"
          element={
            <Layout>
              <Report />
            </Layout>
          }
        />
        <Route
          path="/all-expenses"
          element={
            <Layout>
              <AllExpenses />
            </Layout>
          }
        />
      </Routes>

      <Footer />
    </AnimatePresence>
  );
}

export default App;
