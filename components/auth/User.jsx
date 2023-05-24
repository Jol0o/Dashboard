"use client";
import { auth } from "@/firebase/config";
import { useStore } from "@/zustand/store";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

function User() {
  const router = useRouter();

  useEffect(()=>{
    auth
  },[])

  const Logout = async () => {
    try {
      const result = await signOut(auth);
      localStorage.removeItem("myData");
      Cookies.remove("loggedin");
      router.push("/");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };

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
      className="flex items-center justify-center w-full h-screen"
    >
      {auth.currentUser && (
        <div className="w-4/5 max-w-xs rounded">
          <div className="py-3 bg-white rounded-lg shadow-xl">
            <div className="p-2 photo-wrapper">
              <img
                className="w-32 h-32 mx-auto rounded-full"
                src="/mid-4.png"
                alt="Thomas Berte"
              />
            </div>
            <div className="p-2">
              <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
                {auth.currentUser.email}
              </h3>
            </div>
            <div classNameName="flex items-center justify-center">
              <button
                onClick={Logout}
                className="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default User;
