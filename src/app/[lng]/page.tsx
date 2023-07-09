import Link from "next/link";
import { Name } from "@/components/name";
import { Discribtion } from "@/components/discribtion";
import { useTranslation } from "@/i18n";

const links = ["Portfolio", "Resume", "Blog", "AboutMe"];

export default async function Home({
	params: { lng },
}: {
	params: { lng: string };
}) {
	const { t } = await useTranslation(lng, "page");
	return (
		<>
			<main className="min-h-screen text-xl md:text-lg">
				<div className="h-screen w-screen p-24 flex flex-row items-center justify-center">
					{/* first page */}
					<div className="flex flex-row justify-evenly items-center h-max gap-8">
						{/* page discribtion */}
						<div
							className="flex-1 text-center p-8 hidden md:block overflow-y-auto"
							style={{ maxHeight: "100vh" }}
						>
							<h1>
								{t("hello0")}
								<b>
									<Name />
								</b>
							</h1>
							<br />
							<p>{t("p1")}</p>
							<br />
							<p>{t("p2")}</p>
						</div>
						<div className="flex-1 flex flex-col justify-evenly items-center">
							{/* 在这里添加一个按钮 这样在手机端的时候,按下按钮再显示page discribtion*/}
							<Discribtion lng={lng} />
							{links.map((link) => {
								return (
									<Link
										href={`/${lng}/` + link}
										key={link}
										className="mx-4 hover:scale-110 hover:contrast-200 m-4"
										style={{
											minHeight: "2rem",
											transition: "all 0.1s ease-in-out",
										}}
									>
										<b>{t(link)}</b>
									</Link>
								);
							}, [])}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
