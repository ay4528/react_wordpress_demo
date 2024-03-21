import Link from "next/link"

const CommonFv = (props) => {
	const {bread, title, subtitle} = props
	
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

			<div className="common_page_h1Box">
				<div className="wrap02">
					<p className="common_page_sub_h1 arial_font">{subtitle}</p>
					<h1 className="common_page_h1">{title}</h1>
				</div>
			</div>
		</>
	)
}

export default CommonFv