"use client";
import { useState } from "react";
import { Popup } from "./popup";
import { useTranslation } from "@/i18n/client";

export function Discribtion({ lng }: { lng: string }) {
	const { t } = useTranslation(lng, "page");

	const [display, setDisplay] = useState(false);

	return (
		<>
			{display && (
				<Popup title={t("AboutWebsite")} setDisplay={setDisplay} type="info">
					<h1>{t("hello1")}</h1>
					<br />
					<p>{t("p1")}</p>
					<br />
					<p>{t("p2")}</p>
				</Popup>
			)}
			<button
				className="mx-4 hover:text-lg hover:contrast-200 m-4 lg:hidden"
				onClick={() => {
					setDisplay(!display);
				}}
				style={{ minHeight: "2rem", transition: "all 0.1s ease-in-out" }}
			>
				<b>{t("AboutWebsite")}</b>
			</button>
		</>
	);
}
