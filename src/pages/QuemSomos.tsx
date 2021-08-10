import Image from "next/image";
import styles from "../styles/quemSomos.module.scss";

// import Igreja from "../../public/Clientes/igreja.jpg";
// import Industria from "../../public/Clientes/industria.jpg";
// import Loja from "../../public/Clientes/loja.jpg";
// import Mecanica from "../../public/Clientes/mecanica.jpg";
// import Oficina from "../../public/Clientes/oficina.jpg";
// import Padaria from "../../public/Clientes/padaria.jpg";
import Salao from "../../public/Clientes/salao.jpg";
// import Supermercado from "../../public/Clientes/supermercado.jpg";
import Link from "next/link";

export default function QuemSomos(props) {
  return (
    <div className={styles.quemSomosContainer}>
      <h1 className={styles.title}>Quem somos</h1>
      <p className={styles.text}>
        A mais de 10 anos desenvolvemos e aperfeiçoamos climatizadores
        evaporativos, chegando em 2015 com nossa nova linha que tráz índices
        ideais de temperatura, pureza e umidade do ar, melhorando o conforto e
        diminuindo muito mais o consumo de energia na climatização de ambientes.
        Com isso fabricamos os melhores climatizadores do Brasil, oferecendo a
        melhor relação custo beneficio, garantindo qualidade e eficiência de
        nossos produtos. Nossa empresa está localizada no município de Peabiru
        estado do Paraná, contamos também com filial no estado do Mato Grosso na
        cidade de Sinop. Dessa forma conseguimos atender todo o Brasil.
        <br />
        <br />
        A Climatizadores PERFERRO é uma empresa 100% brasileira especializada em
        fabricação de climatizadores evaporativos, atua em todo o território
        nacional. Oferece para seus clientes a alternativa em reduzir a
        temperatura do ambiente com equipamentos de alta durabilidade e
        tecnologia, baixo custo de manutenção e baixo impacto ao meio ambiente.
        <br />
        <br />
        Temos a missão de oferecer para nossos clientes, através da climatização
        do ambiente, um local mais agradável e saudável para seus clientes e
        colaboradores.
        <br />
        <br />
        Nossa empresa tende a ser referência no mercado nacional de
        climatizadores evaporativos com produto e atendimento de qualidade, e
        inovações tecnológicas.
        <br />
        <br />
        Qualidade, profissionalismo, transparência, pró-atividade, dedicação,
        respeito e superação são os pilares da Climatizadores PERFERRO.
      </p>

      <h1 className={styles.title}>Nossa História</h1>

      <p className={styles.text}>
        A Climatizadores PERFERRO foi fundada em 2008 pelos irmãos Valdecir
        Gomes Ferreira e Adriano Gomes Ferreira na cidade de Peabiru no estado
        do Paraná.
        <br />
        <br />
        Os dois vindo de uma outra sociedade, da empresa Perferro Metalúrgica,
        viram no climatizador evaporativo, um nicho de mercado em expansão.
        Devido a necessidade das indústrias e comércios estarem climatizando seu
        ambiente com baixo custo de energia e grande poder de climatização,
        junto com o conhecimento adquirido ao longo dos anos da Perferro
        Metalúrgica, fundaram a Climatizadores PERFERRO.
      </p>

      <h1 className={styles.title}>Alguns dos nossos trabalhos</h1>

      <div className={styles.imagesSection}>
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
        <Image src={Salao} width={300} height={300} alt={"cliente"} />
      </div>
      <Link href={"/Produtos"} passHref>
        <button className={styles.button}>
          Conheça também nossos Produtos
        </button>
      </Link>
    </div>
  );
}
