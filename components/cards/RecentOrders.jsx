import { data } from "@/data/data";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const RecentOrders = () => {
  return (
    <div className="w-full col-span-1 overflow-x-hidden relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-gray-400/20 overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((order, id) => (
          <li
            key={id}
            className="flex items-center p-2 my-3 rounded-lg cursor-pointer bg-gray-100/50 hover:bg-gray-100/80"
          >
            <div className="p-3 bg-purple-100 rounded-lg">
              <FaShoppingBag className="text-[#4E9F3D]" />
            </div>
            <div className="pl-4">
              <p className="font-bold text-gray-800">${order.total}</p>
              <p className="text-sm font-semibold text-[#191A19]">
                {order.name.first}
              </p>
            </div>
            <p className="absolute text-sm lg:flex md:hidden right-6">
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
