import { languages } from "@/i18n/settings"
import { NextApiResponse } from "next"

const domain = "https://werdxz.info"
const sites = [
	"/",
	"/about",
	"/achievement",
	"/blog",
	"/portfolio",
	"/resume",
]

function generateSitemap(){
	return `
		<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
			${sites.flatMap((site) => //使用flatMap来连接所有语言版本的URL
				languages.map((lang) => {
					return `
						<url>
							<loc>${domain}/${lang}${site}</loc>
							<priority>1.0</priority>
						</url>
					`
				})
			).join("")}
		</urlset>
	`
}

function Sitemap() { }

export async function getServerSideProps({ res } :{res:NextApiResponse}) {
	res.setHeader("Content-Type", "text/xml")
	res.write(generateSitemap())
	res.end()
	return {
		props: {},
	} 
}

export default Sitemap
