import Link from 'next/link'
import { useRouter } from 'next/router';
import Hamburger from '../components/Hamburger'
import { useState } from 'react'

const Header = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const router = useRouter();
	
	const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
	
	let isLinksClosed = hamburgerOpen ? "" : "closed-mobile";
	
	return (
	  <header>
		<nav className="navigation">
			<div className="hamburger" onClick={toggleHamburger}>
			  <Hamburger isOpen={hamburgerOpen}/>
			</div>
			<div className="logo">
			  <Link href='/' passHref>
				<h1 style={{display: "inline", cursor: "pointer"}}>WebDev Blog</h1>
			  </Link>
			</div>
			<ul className={`header-links ${isLinksClosed}`}>
			  <li>
				<Link href='/' passHref>
				  <h3 onClick={toggleHamburger} className={router.pathname == "/" ? "active" : ""} style={{cursor: "pointer", width: "fit-content"}}>Home</h3>
				</Link>
			  </li>
			  <li>
				<Link href='/gallery' passHref>
				  <h3 onClick={toggleHamburger} className={router.pathname == "/gallery" ? "active" : ""} style={{cursor: "pointer", width: "fit-content"}}>Gallery</h3>
				</Link>
			  </li>
			  <li>
				<Link href='/about' passHref>
				  <h3 onClick={toggleHamburger} className={router.pathname == "/about" ? "active" : ""} style={{cursor: "pointer", width: "fit-content"}}>About</h3>
				</Link>
			  </li>
			  <li>
				<Link href='/contact' passHref>
				  <h3 onClick={toggleHamburger} className={router.pathname == "/contact" ? "active" : ""} style={{cursor: "pointer", width: "fit-content"}}>Contact Us</h3>
				</Link>
			  </li>
			</ul>
			
		</nav>
	  </header>
	)
}

export default Header