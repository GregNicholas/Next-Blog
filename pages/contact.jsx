import Link from 'next/link'
//import styles from '../styles/contact.module.css'

export default function contact() {
	return (
		<>
		  <main>
			<h1>Contact Us</h1>
			<p>Contact us at email, twitter, instagram or through the form below!</p>
			<form type="submit">
				<input type="text" placeholder="email"></input>
			</form>
			<Link href='/'>
			  <a className="btn btn-back">Go Back</a>
		    </Link>
		  </main>
		</>
		)
}
