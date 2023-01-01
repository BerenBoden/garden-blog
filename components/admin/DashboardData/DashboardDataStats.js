import React from "react";
import {AiOutlineInfoCircle} from 'react-icons/ai'
// import stripe from "stripe";

function DashboardDataStats() {
    const fakeData = [{id: "fdj", name: "dkshfj"},{id: "fdj", name: "dkshfj"},{id: "fdj", name: "dkshfj"}]

    const renderData = fakeData.map((item) => {return (
        <div key={item.id}>{item.name}</div>
    )})

  return (
    <div className="px-2 w-full">
      <h6><span className="font-bold">Hi {name}</span>, welcome back!</h6>
        <div className='flex items-center'>
            <p>My My Total Assets</p> 
            <AiOutlineInfoCircle />
        </div>
    </div>
  );
}

// export async function getServerSideProps() {
// //   const stripeClient = stripe(process.env.STRIPE_SECRET_KEY);
// //   const data = await stripeClient.products.list();
//   return {
//     props: {
//       data: [{id: "fdj", name: "dkshfj"},{id: "fdj", name: "dkshfj"},{id: "fdj", name: "dkshfj"}]
//     }
//   };
// }

export default DashboardDataStats;