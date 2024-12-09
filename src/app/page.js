import styles from "./page.module.css";
import Image from 'next/image';
import Sabores from '../../public/banner-sabores.jpg';
import Eventos from '../../public/eventos-image.jpg';
import Sobre from '../../public/sobre-image.jpg'

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <section className={styles.sectionBanner}>
        <h1>SORVETERIA ARTESANAL</h1>
      </section>
      <section id={styles.container1} className={styles.containerFotoTexto}>
        <div className={styles.containerFoto}>
          <Image className={styles.img} src={Sabores} alt='Sabores' />
        </div>
        <div className={styles.containerTexto}>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nosssos produtos são naturais, à base de frutas e sem nenhum conservantes! Também temos opções sem lactose e sem açucar.Venhas conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>


      <section id={styles.container2} className={styles.containerFotoTexto}>
        <div className={styles.containerTexto}>
          <h2>NOSSOS EVENTOS</h2>
          <span>Delicias com sorvete!</span>
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente</p>
        </div>
        <div className={styles.containerFoto}>
          <Image className={styles.img} src={Eventos} alt='Eventos' />
        </div>
      </section>


      <section id={styles.container3} className={styles.containerFotoTexto}>
        <div className={styles.containerFoto}>
          <Image className={styles.img} src={Sobre} alt='Sobre' />
        </div>
        <div className={styles.containerTexto}>
          <h2>SOBRE NÓS</h2>
          <span>Alegria em cada casquinha!</span>
          <p>Venha tomar o melhor sorvete da regiãos aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade</p>
        </div>
      </section>


    </div>
  );
}
