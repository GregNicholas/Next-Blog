import Link from 'next/link'
import Hamburger from '../components/Hamburger'
import { useState } from 'react'

const Header = () => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	
	const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }
	
	let isLinksClosed = hamburgerOpen ? "" : "closed-mobile";
	
	return (
	  <header>
		<nav className="navigation">
			<div className="logo">
			<Link href='/' passHref>
				  <h1 style={{display: "inline", cursor: "pointer"}}>WebDev Blog</h1>
			</Link>
			</div>
			
			<ul className={`header-links ${isLinksClosed}`}>
			 
			  <li>
				<Link href='/gallery' passHref>
				  <h3 style={{cursor: "pointer", width: "fit-content"}}>Gallery</h3>
				</Link>
			  </li>
			  <li>
				<Link href='/about' passHref>
				  <h3 style={{cursor: "pointer", width: "fit-content"}}>About</h3>
				</Link>
			  </li>
			  <li>
				<Link href='/contact' passHref>
				  <h3 style={{cursor: "pointer", width: "fit-content"}}>Contact Us</h3>
				</Link>
			  </li>
			</ul>
			<div className="hamburger" onClick={toggleHamburger}>
			  <Hamburger isOpen={hamburgerOpen}/>
			</div>
		</nav>
	  </header>
	)
}

export default Header