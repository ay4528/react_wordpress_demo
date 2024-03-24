import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
import CommonFv from "../../../components/common/CommonFv"
import PageLayout from "../../../components/views/PageLayout"
import Link from "next/link"

const Privacy = () => {
	return (
		<>
			<Header />

			<CommonFv bread="PRIVACY POLICY" title="個人情報保護方針" subtitle="PRIVACY POLICY" />

			<PageLayout>
				<div className="page_privacy common_page_team">
					<div className="wrap02">
						<p className="privacy_text">
							株式会社メイクスビュー（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。
						</p>
						<dl className="privacy_dl">
							<dt>個人情報の管理</dt>
							<dd>当社は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</dd>
							<dt>個人情報の利用目的</dt>
							<dd>お客さまからお預かりした個人情報は、当社からのご連絡や業務のご案内やご質問に対する回答として、電子メールや資料のご送付に利用いたします。</dd>
							<dt>個人情報の第三者への開示・提供の禁止</dt>
							<dd>
								当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。<br />
								お客さまの同意がある場合<br />
								お客さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合<br />
								法令に基づき開示することが必要である場合
							</dd>
							<dt>個人情報の安全対策</dt>
							<dd>当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</dd>
							<dt>ご本人の照会</dt>
							<dd>お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</dd>
							<dt>法令、規範の遵守と見直し</dt>
							<dd>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</dd>
						</dl>
						<div className="privacy_contact">
							<p className="text">当社の個人情報の取扱に関するお問い合せは<br className="sp" />下記までご連絡ください。</p>
							<p className="title">個人情報お問合せ先：<span>株式会社メイクスビュー</span></p>
							<p className="tel"><Link href="tel:06-6125-5765">tel：06-6125-5765</Link><br className="sp" />（受付時間10:00～19:00　ただし、土日・祝祭日・当社指定の休業日を除く）</p>
							<p className="mail">e-mail：info@makes-view.co.jp</p>
							<div className="common_button">
								<Link href="/contact">CONTACT</Link>
							</div>
						</div>
					</div>
				</div>
			</PageLayout>

			<Footer />
		</>
	)
}

export default Privacy