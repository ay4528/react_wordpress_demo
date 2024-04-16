import Header from "../../../../components/common/Header"
import Footer from "../../../../components/common/Footer"
import CommonFv from "../../../../components/common/CommonFv"
import PageLayout from "../../../../components/views/PageLayout"
import Link from "next/link"

const Thanks = () => {
	return (
		<>
			<Header />

			<CommonFv bread="THANKS" title="送信完了" subtitle="THANKS" />

			<PageLayout>
				<div className="page_contact">
					<div className="wrap02">
						<div className="thanks_textarea">
							<p className="text">
								ありがとうございます。お問い合わせの受付が完了いたしました。<br/>
								ご入力いただいたメールアドレス宛に、お問い合わせ内容の確認メールをお送りいたしましのでご確認ください。確認メールが届かない場合は、メールアドレスが誤っているか、迷惑メールフォルダなどに振り分けられている可能性がございますので、ご確認をお願いいたします。<br/>
								お問い合わせいただいた内容は確認後、3営業日以内に担当者よりご連絡させていただきます。いましばらくお待ちください。<br/>
								※なお、上記期間内に返信がない場合は、送信トラブルの可能性がございます。お手数ですが再度お問い合わせいただけますと幸いです。今後ともどうぞよろしくお願いいたします。
							</p>
							<Link href="/" className="common_page_btn">トップページへ</Link>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Thanks