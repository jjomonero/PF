import {
  BatteryChargingFull,
  Eco,
  AcUnit,
  WhatshotOutlined,
  Build,
  LocalAirportOutlined,
  SupervisedUserCircleSharp,
} from "@material-ui/icons";

import styles from "../styles/index.module.scss";
import Image from "next/image";

import Especification1 from "../../public/assets/especification1.png";
import Especification2 from "../../public/assets/especification2.png";
import Climatizadores from "../../public/assets/prod.png";
import GuiasPerferro from "../../public/assets/guiasPerferro.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.titleHome}>Climatizadores Perferro</h1>

        <div className={styles.climatizadores}>
          <Image
            src={Climatizadores}
            width="600"
            height="500"
            alt="climatizadores"
          />
        </div>

        <div className={styles.descriptionProdutosHome}>
          <CardDescriptionHome strong={"Economia"}>
            <BatteryChargingFull color="primary" fontSize="large" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Ecológico"}>
            <Eco color="primary" fontSize="large" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Bem Estar"}>
            <WhatshotOutlined color="primary" fontSize="large" />
            <AcUnit color="primary" fontSize="large" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Produtividade"}>
            <SupervisedUserCircleSharp color="primary" fontSize="large" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Atendimento Para Todo o Brasil"}>
            <LocalAirportOutlined color="primary" fontSize="large" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Assitência Técnica"}>
            <Build color="primary" fontSize="large" />
          </CardDescriptionHome>
        </div>

        <div>
          <HomeEspecification
            src={Especification1}
            title={"Sobre a Perferro"}
            text={
              "A Climatizadores Perferro é uma empresa 100% brasileira, localizada em Peabiru e especializada em fabricação de climatizadores evaporativos, atuando em todo território nacional. Oferece para seus clientes a alternativa em reduzir a temperatura do ambiente com equipamentos de alta durabilidade e tecnologia, baixo custo de manutenção e baixo impacto ao meio ambiente."
            }
            text2={
              "Temos a missão de oferecer para nossos clientes, através da climatização do ambiente, um local mais agradável e saudável. Nossa empresa é referência no mercado nacional de climatizadores evaporativos com produtos e atendimento de qualidade, e inovações tecnológicas."
            }
          />

          <HomeEspecification
            src={Especification2}
            title={"Sobre o Climatizador"}
            text={
              "Os climatizadores evaporativos PERFERRO, trabalham com resfriamento a base dae água, e seu consumo de energia é baixíssimo, trazendo menor impacto ao meio ambiente. Devido a característica do Climatizador em trabalhar com pressão positiva no ambiente, faz com que a renovação de ar com umidade seja constante. Essa pressão no ambiente se faz através de vazão de ar dos Climatizadores e com cálculo baseado nos metros cúbicos do ambiente achamos o(os) equipamento(os) ideal para o ambiente."
            }
            text2={
              "Tudo isso foi rigorosamente analisado para oferecermos um produto mais resistênte, de fácil manutenção e econômico em comparação ao ar condicionado e ótimo desempenho na climatização de ambientes."
            }
          />
        </div>

        <div className={styles.guias}>
          <Image
            src={GuiasPerferro}
            width="1000"
            height="400"
            alt="climatizadores"
          />
        </div>
      </div>
    </>
  );
}

type CardDescriptionHomeProps = {
  children: any;
  strong: string;
};

function CardDescriptionHome({ children, strong }: CardDescriptionHomeProps) {
  return (
    <div className={styles.cardDescriptionHome}>
      <span>{children}</span>
      <strong>{strong}</strong>
    </div>
  );
}

type HomeEspecificationProps = {
  src: any;
  title: string;
  text?: string;
  text2?: string;
};

function HomeEspecification({
  src,
  title,
  text,
  text2,
}: HomeEspecificationProps) {
  return (
    <div className={styles.homeEspecification}>
      <Image src={src} width={400} height={400} alt={""} />
      <span>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </span>
    </div>
  );
}
