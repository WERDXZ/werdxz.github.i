"use client";
import { useState } from "react";
import { register } from "@/lib/achivements";

export function Name() {
	const [content, setContent] = useState("WERDXZ");
	const [hoverTimeout, setHoverTimeout] = useState<number>();

	const handleMouseEnter = () => {
		const timeoutId = window.setTimeout(() => {
			register(0);
			setContent("Jiqing Yang");
		}, 5000); // 2000ms = 2s

		setHoverTimeout(timeoutId);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeout);
		setContent("WERDXZ");
	};

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="inline">
			{content}
		</div>
	);
}
