import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const ContactForm = () => {
	const router = useRouter()

	const [formData, setFormData] = useState({
		company: "",
		name: "",
		furigana: "",
		tel: "",
		email: "",
		content: ""
	})
	
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post(`${process.env.NEXT_PUBLIC_MICROCMS_CONTACT_API_URL}`,
				formData,
				{
					headers: {
						"Content-Type": "application/json",
						"X-API-KEY": `${process.env.NEXT_PUBLIC_MICROCMS_CONTACT_API_KEY}`
					}
				}
			)
			router.push("/contact/thanks")
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="common_contact_form">
				<table>
					<tbody>
						<tr>
							<th><span className="label ninni">任意</span>貴社名</th>
							<td><input type="text" placeholder="〇〇株式会社" name="company" value={formData.company} onChange={handleChange} /></td>
						</tr>
						<tr>
							<th><span className="label hissu">必須</span>お名前</th>
							<td><input type="text" placeholder="田中太郎" name="name" value={formData.name} required onChange={handleChange} /></td>
						</tr>
						<tr>
							<th><span className="label ninni">任意</span>ふりがな</th>
							<td><input type="text" placeholder="たなかたろう" name="furigana" value={formData.furigana} onChange={handleChange} /></td>
						</tr>
						<tr>
							<th><span className="label hissu">必須</span>電話番号</th>
							<td><input type="tel" placeholder="00012345678" name="tel" value={formData.tel} required onChange={handleChange} /></td>
						</tr>
						<tr>
							<th><span className="label hissu">必須</span>メールアドレス</th>
							<td><input type="email" placeholder="example@test.co.jp" name="email" value={formData.email} required onChange={handleChange} /></td>
						</tr>
						<tr>
							<th><span className="label ninni">任意</span>お問い合わせ内容</th>
							<td><textarea value={formData.content} name="content" onChange={handleChange} /></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="btn_wrap">
				<button type="submit" name="submit" className="common_page_btn">送信する</button>
			</div>
		</form>
	)
}

export default ContactForm