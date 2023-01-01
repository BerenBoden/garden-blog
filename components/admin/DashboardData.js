import React from "react";
import DashboardDataEarnings from "./DashboardData/DashboardDataEarnings";
import DashboardDataUsers from "./DashboardData/DashboardDataUsers";
import DashboardDataStats from "./DashboardData/DashboardDataStats";

function DashboardData() {
  return (
    <div className="flex justify-between px-4">
      <DashboardDataEarnings />
      <div className="my-auto mx-2">
        <div className="h-60 border-dashed border-l-gray-300 border-l" />
      </div>
      <DashboardDataEarnings />
      <div className="my-auto mx-2">
        <div className="h-60 border-dashed border-l-gray-300 border-l" />
      </div>
      <DashboardDataEarnings />
    </div>
  );
}

export default DashboardData;
