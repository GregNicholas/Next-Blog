import Link from 'next/link'

const Header = () => {
	return (
	  <header>
		<Link href='/' passHref>
			<h2 style={{cursor: "pointer", width: "fit-content"}}>WebDev Blog</h2>
		</Link>
	  </header>
	)
}

export default Header