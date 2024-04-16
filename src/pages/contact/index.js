import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import ContactForm from "../../../components/parts/ContactForm"
import Link from "next/link"

const Contact = () => {
	return (
		<>
			<Header />

			<CommonFv bread="CONTACT" title="お問い合わせ" subtitle="CONTACT" />

			<PageLayout>
				<div className="page_contact">
					<div className="wrap02">
						<p className="contact_text">
							弊社について、ご質問などございましたら、下記フォームよりお問い合わせください。<br/>
							また、内容によっては回答をさしあげるのにお時間をいただくこともございます。<br/>
							また、弊社の個人情報の取り扱いにつきましては<Link href="/privacy">「PRIVACY POLICY」</Link>のページをご覧ください。
						</p>
						<ContactForm/>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Contact