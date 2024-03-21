const PageLayout = ({children}) => {
	return (
		<main id="main" className="page_main">
			<div className="common_page_wrap">
				{children}
			</div>
		</main>
	)
}

export default PageLayout