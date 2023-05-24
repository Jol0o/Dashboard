'use client'
import BarCharts from "@/components/cards/BarCharts";
import RecentOrders from "@/components/cards/RecentOrders";
import TopCards from "@/components/cards/TopCards";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation';
import { useStore } from "@/zustand/store";
import React , {useEffect} from "react";

export default function Home() {
    const path = usePathname()
    const {setUser} = useStore(state => state)
    
  useEffect(() => {
    // Load data from local storage on component mount
    const savedData = localStorage.getItem("myData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setUser(parsedData);
      } catch (error) {
        console.log("Error parsing stored data:", error);
      }
    }
  }, []);
    return (
        <motion.div
            key={path}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
                duration: 0.75
            }}
            variants={{
                initialState: {
                    opacity: 0,
                    y: 20
                },
                animateState: {
                    opacity: 1,

                },
                exitState: {

                },
            }}
            className='relative w-full bg-black'>
            <Header />
            <TopCards />
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
                <BarCharts />
                <RecentOrders />
            </div>
        </motion.div>
    )
}
