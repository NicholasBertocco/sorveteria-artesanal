import Logo from '../../../public/logo.png';
import Image from 'next/image';
import styles from './Header.module.css';
import Link from 'next/link';



export default function Header(){
    return(
        <header className={styles.header}>
            <Image className={styles.img} src = {Logo} alt='LOGO'/>
            <nav>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/Sabores">Sabores</Link>
                <Link className={styles.link} href="/Sobre">Sobre</Link>
            </nav>
        </header>
    )
}