import Header from '../components/Header.jsx'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
	<>
	<Header />
		<main className="container">
		  <Component {...pageProps} />
		</main>
	</>
	)
	
}

export default MyApp
