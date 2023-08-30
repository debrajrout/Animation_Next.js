"use client";
import React from "react";
import { motion } from "framer-motion";
export default function page() {
	return (
		<div className="h-screen w-full flex justify-center items-center bg-black">
			<motion.div
				className="bg-yellow-200 w-80 h-80  rounded-full flex justify-center items-center"
				animate={{ y: 0, x: 0, rotate: 180 }}
				transition={{ type: "keyframes" }}>
				Hi
				<h1 className="text-2xl rotate-90">Hii who are you</h1>
			</motion.div>
		</div>
	);
}
