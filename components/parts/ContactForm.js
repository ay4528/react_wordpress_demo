import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const ContactForm = () => {
	const router = useRouter()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [content, setContent] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post(`${process.env.NEXT_PUBLIC_MICROCMS_CONTACT_API_URL}`,
				{
					name: name,
					email: email,
					content: content
				},
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
							<th><span className="label hissu">必須</span>お名前</th>
							<td><input type="text" placeholder="田中太郎" name="name" value={name} required onChange={(e) => setName(e.target.value)} /></td>
						</tr>
						<tr>
							<th><span className="label hissu">必須</span>メールアドレス</th>
							<td><input type="email" placeholder="example@test.co.jp" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} /></td>
						</tr>
						<tr>
							<th><span className="label ninni">任意</span>お問い合わせ内容</th>
							<td><textarea value={content} name="content" onChange={(e) => setContent(e.target.value)} /></td>
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