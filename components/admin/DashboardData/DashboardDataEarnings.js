import React from "react";
import {AiOutlineInfoCircle} from 'react-icons/ai'
// import stripe from "stripe";

function DashboardDataEarnings() {
    const fakeData = [{id: "fdj", price: "343.454.45"}]

    const renderData = fakeData.map((item) => {return (
        <div key={item.id}>{item.price}</div>
    )})

  return (
    <div className="px-2 w-full">
      <h6><span className="font-bold">Hi {name}</span>, welcome back!</h6>
        <div className='mt-12'>
            <span className="flex items-center font-bold">My My Total Assets <AiOutlineInfoCircle className="ml-2"/></span> 
            <h3 className='flex'>$&nbsp;{renderData}</h3>

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

export default DashboardDataEarnings;