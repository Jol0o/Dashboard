'use client'
import Sidebar from "@/components/layout/Sidebar";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Loading from "./loading";

export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <AnimatePresence exitBeforEnter>
            <Suspense fallback={<Loading />}>
                <Sidebar>
                    {children}
                </Sidebar>
            </Suspense>
        </AnimatePresence>
    );
}