import React from "react";
import { GrDiamond } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

function Sidebar({ children }) {
  return (
    <div className="flex min-h-screen w-50">
      <div className="bg-[#494b4b] min-w-[50px] p-3">
        <ul className="flex flex-col gap-5 ">
          <li className="p-3 transition bg-[#4E9F3D] rounded-md text-[#fff] hover:bg-purple-400 ">
            <GrDiamond size={20} />
          </li>
          <Link href="/dashboard">
            <motion.span />
            <li className="p-3 text-[#1E5128] transition bg-gray-400 rounded-md hover:bg-gray-500 ">
              <RxDashboard size={20} />
            </li>
          </Link>
          <Link href="/dashboard/user">
            <li className="p-3 text-[#1E5128] transition bg-gray-400 rounded-md hover:bg-gray-500 ">
              <CiUser size={20} />
            </li>
          </Link>
          <Link href="/dashboard/order">
            <li className="p-3 text-[#1E5128] transition bg-gray-400 rounded-md hover:bg-gray-500 ">
              <BsBag size={20} />
            </li>
          </Link>
          <Link href="/dashboard/settings">
            <li className="p-3 text-[#1E5128] transition bg-gray-400 rounded-md hover:bg-gray-500 ">
              <AiOutlineSetting size={20} />
            </li>
          </Link>
        </ul>
      </div>
      <div></div>
      <main className="w-full" >{children}</main>
    </div>
  );
}

export default Sidebar;
