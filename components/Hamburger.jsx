import styles from '../styles/hamburger.module.css'
// import { useState } from 'react'

const Hamburger = ({ isOpen }) => {
	// const [isOpen, setIsOpen] = useState(false)
	let burger1, burger2, burger3;
	if(isOpen){
	    burger1 = styles.burger1open
		burger2 = styles.burger2open
		burger3 = styles.burger3open
	} else {
		burger1 = styles.burger1closed
		burger2 = styles.burger2closed
		burger3 = styles.burger3closed
	}
	
	
	return (
	  <div className={styles.hamburger}>
		<div className={`${styles.burger} ${burger1}`}></div>
		<div className={`${styles.burger} ${burger2}`}></div>
		<div className={`${styles.burger} ${burger3}`}></div>
	  </div>
	)
}

export default Hamburger