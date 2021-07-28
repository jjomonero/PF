import {
  BatteryChargingFull,
  FormatColorReset,
  Eco,
  EnhancedEncryption,
  AcUnit,
  WhatshotOutlined,
  SettingsRemote,
} from "@material-ui/icons";

import { Button } from "@material-ui/core";
import styles from "../styles/index.module.scss";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/pf-logo.png";
import LogoBranca from "../../public/assets/pf-logo-branca.png";
import Especification1 from "../../public/assets/especification1.png";
import Especification2 from "../../public/assets/especification2.png";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1>Climatizadores Perferro</h1>
        <div className={styles.cards}>
          <CardHome strong={"Produtos"} href="#" />
          <CardHome strong={"Informações"} href="/Informacao" />
          <CardHome strong={"Seja Representante"} href="/SejaRepresentante" />
          <CardHome strong={"Contato"} href="/Contato" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "1rem",
        }}
      >
        <CardDescriptionHome strong={"Economia"}>
          <BatteryChargingFull />
        </CardDescriptionHome>

        <CardDescriptionHome strong={"Ecológico"}>
          <Eco />
        </CardDescriptionHome>

        <CardDescriptionHome strong={"Bem Estar"}>
          <WhatshotOutlined />
          <AcUnit />
        </CardDescriptionHome>

        <CardDescriptionHome strong={"Sem Dengue"}>
          <FormatColorReset />
        </CardDescriptionHome>

        <CardDescriptionHome strong={"Durabilidade"}>
          <EnhancedEncryption />
        </CardDescriptionHome>

        <CardDescriptionHome strong={"Praticidade"}>
          <SettingsRemote />
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
    </>
  );
}

type CardHomeProps = {
  strong: string;
  href: string;
};

function CardHome({ strong, href }: CardHomeProps) {
  return (
    <div className={styles.containerCardHome}>
      <Link href={href} passHref>
        <Button className={styles.strong}>
          <strong>{strong}</strong>
        </Button>
      </Link>
    </div>
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
      <Image src={src} width={700} height={600} alt={""} />
      <span>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{text2}</p>
      </span>
    </div>
  );
}
