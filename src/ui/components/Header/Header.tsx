import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import { MenuProdutos } from "./MenuHeader/MenuHeader";
import Image from "next/image";
import Link from "next/link";
import PFLogo from "../../../../public/assets/pf-azul.jpeg";
import styles from "./header.module.scss";

export function Header(props) {
  return (
    <>
      <div className={styles.topHeader}>
        <TopInformations
          href={"#"}
          title={"Vendas"}
          information={"(44)9 9999-9999"}
        />
        <TopInformations
          href={"#"}
          title={"Assistencia técnica"}
          information={"(44)9 9999-9999"}
        />
        <TopInformations
          href={"#"}
          title={"Whatsapp"}
          information={"(44)9 9999-9999"}
        />
      </div>
      <div className={styles.container}>
        <Image
          className={styles.image}
          src={PFLogo}
          alt=""
          width="100"
          height="30"
          objectFit="cover"
        />

        <div className={styles.buttons}>
          <ButtonHeader href={"#"} name="Home" />
          <MenuProdutos />
          <ButtonHeader href={"#"} name="Quem Somos" />
          <ButtonHeader href={"#"} name="Seja Representante" />
          <ButtonHeader href={"#"} name="Contato" />
        </div>
      </div>
    </>
  );
}

type TopInformationsProps = {
  href: string;
  title: string;
  information: string;
};

function TopInformations({ href, title, information }: TopInformationsProps) {
  return (
    <div className={styles.topInformations}>
      <Link href={href} passHref>
        <p>
          {title}:<strong> {information}</strong>
        </p>
      </Link>
    </div>
  );
}
