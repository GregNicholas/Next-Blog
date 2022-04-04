import Link from 'next/link'
import styles from '../styles/about.module.css'

export default function aboutPage() {
	
	return (
		<>
		  <main>
			<h1>About Expensive Code Camp!</h1>
			<img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80" alt="together we create!"></img>
			<section className={styles.aboutContent}>
				<div className={styles.imageContainer}>
				  <img className={styles.aboutContentImage} src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="join hands"></img>
				</div>
				
				<p className={styles.aboutContentText}>Welcome to a whole new world of opportunity! Join us as we explore the
					amazing world of computer science. Whether you're just getting started in
					web development, or you're 35 years into your data science career, we 
					can collaborate and grow. Please explore our blog, check out the photo 
					and video galleries, and take a peek at our all-new merch section. Contact
					us below with any requests, suggestions, or proposals. We can't wait to hear
					from you!
				</p>
			</section>
			<Link href='/'>
			  <a className="btn btn-back">Go Back</a>
		    </Link>
		  </main>
		</>
		)
}
