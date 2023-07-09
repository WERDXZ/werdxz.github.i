import "./globals.css";
import { dir } from "i18next";
import { Inter } from "next/font/google";
import { Wrapper } from "@/components/achivements";
import { languages } from "@/i18n/settings";

export async function getStaticPaths() {
	return {
		paths: languages.map((lng) => ({ params: { lng } })),
		fallback: false,
	};
}

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ lng }: { lng: string }) {
	return {
		title: "WERDXZ",
		metadataBase: new URL("https://werdxz.info"),
		creator: "WERDXZ",
		keywords:[
			"werdxz",
			"werdxz.info",
			"werdxz.com",
			"werdxz.net",
			"jiqing",
			"jiqing yang",
			"杨继清",
		],

		alternates: {
			canonical: "/",
			languages: {
				"en-US": "/en-US",
				"zh-CN": "/zh-CN",
			},
		},
	};
}

export default function RootLayout({
	children,
	params: { lng },
}: {
	children: React.ReactNode;
	params: { lng: string };
}) {
	return (
		<html lang={lng} dir={dir(lng)}>
			<body className={inter.className} style={{ minWidth: "480px" }}>
				{/*
				<nav className='fixed flex z-20 flex-wrap items-center justify-between w-full py-2 backdrop-blur backdrop-opacity-50 backdrop-saturate-150 border-blue-900 border-b-2'>
					<Image src={WLogo} alt="logo" className='max-h-10 inline grow-0 mx-4' width={30} height={30}
					style={{ "filter": "invert(79%) sepia(13%) saturate(349%) hue-rotate(219deg) brightness(87%) contrast(85%)"}}
					></Image>
					<div className='inline'>
						{
							Object.keys(links).map((link) => {
								return (
									<Link href={links[link as keyof typeof links]} key={link} className='mx-4'>
										{link}
									</Link>
								);
							})
						}
					</div>

				</nav>
				*/}
				<Wrapper />
				<div id="main-app">{children}</div>
			</body>
		</html>
	);
}
