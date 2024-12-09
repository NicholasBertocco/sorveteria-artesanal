import Image from 'next/image';
import Logo from '../../../public/logo.png'
import styles from './Footer.module.css'


export default function Footer(){
    return(
        <footer className={styles.footer}>
            
            <Image className={styles.img} src={Logo} alt='Logo'/>
           <div className={styles.containerInformacoes}>
                <div className={styles.card}>
                    <h4>ENDEREÇO</h4>
                    <ul type="none">
                        <li>Av.Bernardino de Campos, 98</li>
                        <li>São Paulo, SP 12345-678</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>CONTATO</h4>
                    <ul type="none">
                        <li>info@meusite.com</li>
                        <li>Tel: (11) 3456-7890</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h4>HORÁRIOS</h4>
                    <ul type="none">
                        <li>ABERTO TODOS OS DIAS</li>
                        <li>10:00 - 22:00</li>
                    </ul>
                </div>
            </div> 
            
        </footer>
    )
}