"use client";
import { useEffect, useState } from "react";
import { Observer } from "mobx-react-lite";
import { achivementStore } from "@/lib/achivementStore";
import { achivements } from "@/lib/achivements";

function Achivement({ id }: { id: number }) {
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
			const removeTimer = setTimeout(() => {
				achivementStore.removeAchivement(id);
			}, 500); // delay should be equal to the transition duration
			return () => clearTimeout(removeTimer);
		}, 3000);

		return () => clearTimeout(timer);
	}, [id]);
	return (
		<div
			className="rounded border-zinc-600 border-2 p-2 m-2 w-64"
			style={{
				opacity: visible ? 1 : 0,
				transform: visible ? "translateX(0)" : "translateX(100%)",
				transition: "opacity 0.7s, transform 0.5s",
			}}
		>
			<h2 className="border-b border-[color:var(--foreground-rgb)]">
				{achivements[id][0]}
			</h2>
			<p className="text-xs">{achivements[id][1]}</p>
		</div>
	);
}

export function Wrapper() {
	return (
		<div className="top-0 right-0 absolute z-10">
			<Observer>
				{() => (
					<>
						{achivementStore.achivementsQueue.map((achivement) => {
							return <Achivement id={achivement} key={achivement} />;
						})}
					</>
				)}
			</Observer>
			{
				// <div>
				// 	{/*add zero to achivement*/}
				// 	<button
				// 		onClick={() => {
				// 			console.log("add one to achivement");
				// 			console.log(achivementStore.achivementsQueue);
				//
				// 			achivementStore.addAchivement(0);
				// 		}}
				// 	>
				// 		add zero to achivement
				// 	</button>
				// </div>
				// <div>
				// 	{/*add one to achivement*/}
				// 	<button
				// 		onClick={() => {
				// 			console.log("add one to achivement");
				// 			console.log(achivementStore.achivementsQueue);
				//
				// 			achivementStore.addAchivement(1);
				// 		}}
				// 	>
				// 		add one to achivement
				// 	</button>
				// </div>
			}
		</div>
	);
}
