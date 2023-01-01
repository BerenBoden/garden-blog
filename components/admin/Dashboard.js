import React from "react";
import DashboardData from "./DashboardData";

const Dashboard = () => {
  return (
    <div className=" overflow-y-auto scrollable h-full">
      <div className=" h-full">
        {Array(7)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className=" h-64 bg-white rounded-lg shadow-md my-4"
            >
              <DashboardData />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
