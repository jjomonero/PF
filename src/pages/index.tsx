import {
  BatteryChargingFull,
  FormatColorReset,
  Eco,
  EnhancedEncryption,
  AcUnit,
  WhatshotOutlined,
  Build,
} from "@material-ui/icons";

import styles from "../styles/index.module.scss";
import Image from "next/image";
import Igreja from "../../public/assets/Clientes/igreja.jpg";
import Salao from "../../public/assets/Clientes/salao.jpg";
import Mecanica from "../../public/assets/Clientes/mecanica.jpg";
import Industria from "../../public/assets/Clientes/industria.jpg";
import Oficina from "../../public/assets/Clientes/oficina.jpg";
import Padaria from "../../public/assets/Clientes/padaria.jpg";
import Supermercado from "../../public/assets/Clientes/supermercado.jpg";
import Loja from "../../public/assets/Clientes/loja.jpg";

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
            <BatteryChargingFull color="primary" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Ecológico"}>
            <Eco color="primary" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Bem Estar"}>
            <WhatshotOutlined color="primary" />
            <AcUnit color="primary" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Sem Dengue"}>
            <FormatColorReset color="primary" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Atendimento Para Todo o Brasil"}>
            <EnhancedEncryption color="primary" />
          </CardDescriptionHome>

          <CardDescriptionHome strong={"Assitência Técnica"}>
            <Build color="primary" />
          </CardDescriptionHome>
        </div>

        <div>
          <HomeEspecification
            src={Especification1}
            title={"Quem Somos"}
            text={
              "Os Climatizadores Perferro são fabricados com caixa de fibra de vidro, um material altamente resistente e que nao enferruja, suas colmeias reduzem a temperatura, limpa e hidrata o ar deixando seu ambiente mais agradável."
            }
            text2={
              "Tudo isso foi rigorosamente analisado para oferecermos um produto mais resistênte, de fácil manutenção e econômico em comparação ao ar condicionado e ótimo desempenha na climatização de ambientes."
            }
          />

          <HomeEspecification
            src={Especification2}
            title={"Quem Somos"}
            text={
              "Os Climatizadores Perferro são fabricados com caixa de fibra de vidro, um material altamente resistente e que nao enferruja, suas colmeias reduzem a temperatura, limpa e hidrata o ar deixando seu ambiente mais agradável"
            }
            text2={
              "Tudo isso foi rigorosamente analisado para oferecermos um produto mais resistênte, de fácil manutenção e econômico em comparação ao ar condicionado e ótimo desempenha na climatização de ambientes."
            }
          />
        </div>

        <div className={styles.guias}>
          <Image
            src={GuiasPerferro}
            width="1200"
            height="400"
            alt="climatizadores"
          />
        </div>

        <div className={styles.imagesSection}>
          <h2>Alguns dos nossos trabalhos</h2>

          <Image src={Salao} width={300} height={300} alt={"cliente"} />
          <Image src={Industria} width={300} height={300} alt={"cliente"} />
          <Image src={Supermercado} width={300} height={300} alt={"cliente"} />
          <Image src={Igreja} width={300} height={300} alt={"cliente"} />
          <Image src={Oficina} width={300} height={300} alt={"cliente"} />
          <Image src={Loja} width={300} height={300} alt={"cliente"} />
          <Image src={Mecanica} width={300} height={300} alt={"cliente"} />
          <Image src={Padaria} width={300} height={300} alt={"cliente"} />
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
      <Image src={src} width={500} height={500} alt={""} />
      <span>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </span>
    </div>
  );
}
