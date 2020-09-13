import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            Developed By Manoj Pawar. In  <span style={{marginLeft: '6px', marginRight: '12px'}}>&#10084;&#65039;</span>  with NextJs.
        </footer>
    )
}