import React from 'react'
import styles from '@/styles/NavBar.module.scss'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.jm}><Link href="/">JM</Link></div>
        <div className={styles.title}>
            <div className={styles.about}>
              <Link href="/about/aboutme">ABOUT</Link>
            </div>
            <div className={styles.work}>
              <Link href="/work/project">WORK</Link>
            </div>
            <div className={styles.contact}>
              <Link href="/contact/contactme">CONTACT</Link>
            </div>
        </div>
    </div>
  )
}

export default NavBar