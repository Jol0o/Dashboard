"use client";
import { data } from "@/data/data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
import { motion } from "framer-motion";
import { useStore } from "@/zustand/store";
import React, { useEffect } from "react";

function Costumers() {
  const { user } = useStore((state) => state);
  useEffect(() => {
    user;
  }, []);
  return (
    <motion.div
      initial="initialState"
      animate="animateState"
      exit="exitState"
      transition={{
        duration: 0.75,
      }}
      variants={{
        initialState: {
          opacity: 0,
        },
        animateState: {
          opacity: 1,
        },
        exitState: {},
      }}
      className="min-h-screen"
    >
      <div className="max-w-full m-2 bg-[#494b4b] px-10 py-3 rounded-sm flex justify-between items-center">
        <h1 className="text-[#D8E9A8] font-bold uppercase">Costumers</h1>
        {user && <div>WELCOME Back, {user.user.email.split("@")[0]}</div>}
      </div>
      <div className="p-4">
        <div className="w-full p-4 m-auto overflow-y-auto rounded-md bg-gray-400/20">
          <div className="grid items-center justify-between grid-cols-2 p-2 my-3 text-white uppercase border-b cursor-pointer border-gray-100/50 md:grid-cols-4 sm:grid-cols-3">
            <span>Name</span>
            <span className="text-right sm:text-left">Email</span>
            <span className="hidden md:grid">Last Order</span>
            <span className="hidden sm:grid">Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className="grid items-center justify-between grid-cols-2 p-2 my-3 text-black rounded-lg cursor-pointer bg-gray-100/50 hover:bg-gray-100/80 md:grid-cols-4 sm:grid-cols-3"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <BsPersonFill className="text-purple-800" />
                  </div>
                  <p className="pl-4 font-semibold">
                    {order.name.first + " " + order.name.last}
                  </p>
                </div>
                <p className="text-right text-gray-700 sm:text-left">
                  {order.name.first}@gmail.com
                </p>
                <p className="hidden md:flex">{order.date}</p>
                <div className="items-center justify-between hidden sm:flex">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Costumers;
