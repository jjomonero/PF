import { ButtonHeader } from "./ButtonHeader/ButtonHeader";
import { MenuProdutos } from "./MenuHeader/MenuHeader";
import Image from "next/image";
import Link from "next/link";
import PFLogo from "../../../../public/assets/pf-logo.png";
import styles from "./header.module.scss";

export function Header(props) {
  return (
    <>
      <div className={styles.topHeader}>
        <Image
          className={styles.image}
          src={PFLogo}
          alt=""
          width="120"
          height="60"
          objectFit="cover"
        />
        <div style={{ display: "flex", gap: "20px" }}>
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
      </div>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <ButtonHeader href={"/"} name="Home" />
          <MenuProdutos />
          <ButtonHeader href={"/QuemSomos"} name="Quem Somos" />
          <ButtonHeader href={"/SejaRepresentante"} name="Seja Representante" />
          <ButtonHeader href={"/Informacao"} name="Informação" />
          <ButtonHeader href={"/Contato"} name="Contato" />
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
