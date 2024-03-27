import { useRouter } from "next/router"
import Link from "next/link"

const CommonFv = (props) => {
	const { bread, title, subtitle, pageslug } = props

	const CompanyLink = () => {
		const flag = (pageslug == "company") ? true : false
		const router = useRouter()

		if (flag) {
			return (
				<ul className="company_linkBox">
					<li>
						<Link href="/profile" className={router.pathname == "/profile" ? "pointer_none" : ""}>会社情報</Link>
					</li>
					<li className="center">
						<Link href="/message" className={router.pathname == "/message" ? "pointer_none" : ""}>代表挨拶</Link>
					</li>
					<li>
						<Link href="/history" className={router.pathname == "/history" ? "pointer_none" : ""}>会社沿革</Link>
					</li>
				</ul>
			)
		}
	}

	return (
		<>
			<div className="breadcrumb arial_font">
				<div className="wrap">
					<ul>
						<li>
							<Link href="/">HOME</Link>
						</li>
						<li>{bread}</li>
					</ul>
				</div>
			</div>

			<div className={`common_page_h1Box ${pageslug}`}>
				<div className="wrap02">
					<p className="common_page_sub_h1 arial_font">{subtitle}</p>
					<h1 className="common_page_h1">{title}</h1>
					<CompanyLink />
				</div>
			</div>
		</>
	)
}

export default CommonFv