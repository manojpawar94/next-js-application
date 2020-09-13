import Link from 'next/link'
import styles from '../../styles/Navbar.module.css'
import logo from '../../images/logo.png'

export default function Navbar() {
    return (
        <div className={styles.appbar}>
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link href="/" >
                        <img src={logo} style={{width: '80px', height: '40px'}}/>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/" >
                        <a className={styles.a}>HOME</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/blogs" >
                        <a className={styles.a}>BLOGS</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/contact" >
                        <a className={styles.a}>CONTACT</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/about" >
                        <a className={styles.a}>ABOUT</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}