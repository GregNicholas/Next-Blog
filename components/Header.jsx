import Link from 'next/link'

const Header = () => {
	return (
	  <header>
		<ul className="header-links">
		  <li>
			<Link href='/' passHref>
			  <h2 style={{cursor: "pointer", width: "fit-content"}}>WebDev Blog</h2>
			</Link>
		  </li>
		  <li>
			<Link href='/about' passHref>
			  <h3 style={{cursor: "pointer", width: "fit-content"}}>About</h3>
			</Link>
		  </li>
		  <li>
			<Link href='/gallery' passHref>
			  <h3 style={{cursor: "pointer", width: "fit-content"}}>Gallery</h3>
			</Link>
		  </li>
		</ul>
		
	  </header>
	)
}

export default Header