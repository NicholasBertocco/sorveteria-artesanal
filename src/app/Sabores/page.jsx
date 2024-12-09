import styles from './sabores.module.css';
import Image from 'next/image';

import Oreo from '../../../public/sabor-oreo.png';
import Pistache from '../../../public/sabor-pistache.png';
import Cookies from '../../../public/sabor-cookies-avela.png';
import Kiwi from '../../../public/sorbet-kiwi.png';
import Limao from '../../../public/sorbet-limao.png';
import Morango from '../../../public/sorbet-morango.png';

export default function Sabores(){
    return(
        <div>
            <section className={styles.sectionBanner}>
                <h1>NOSSOS SABORES</h1>
            </section>
            <section className={styles.secaoSabores}>
                <h2>SABORES DE SORVETE</h2>
                <div className={styles.containerCards}>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Oreo} alt='Oreo' />
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Pistache} alt='Pistache' />
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor de pistache com pedacinhos de semente.</p>
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Cookies} alt='Cookies e Avelã' />
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Kiwi} alt='Kiwi' />
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Morango} alt='Morango' />
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className={styles.card}>
                        <Image className={styles.img} src={Limao} alt='Limao' />
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorevte gourmet de limão siciliano vai ter encantar.</p>
                    </div>

                </div>
            </section>

            
        </div>
    )
}