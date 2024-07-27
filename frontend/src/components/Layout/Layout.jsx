// src/components/Layout/Layout.js

import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="shadow-custom rounded-lg m-3 p-2">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 shadow-custom rounded-lg m-3 p-2">
        {children}
      </div>
    </div>
  );
};

export default Layout;
