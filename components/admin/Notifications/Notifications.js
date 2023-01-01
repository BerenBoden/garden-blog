import React from "react";
import DashboardData from "../DashboardData";
import Transactions from '../Transactions/Transactions'

function Notifications() {
  return (
    <div className=" h-full overflow-y-auto scrollable">
      <Transactions />
    </div>
  );
}

export default Notifications;