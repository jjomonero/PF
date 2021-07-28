import { FooterButton } from "./FooterButton/FooterButton";
import Image from "next/image";
import Link from "next/link";
import PFLogo from "../../../../public/assets/pf-logo.png";
import { PhoneCallback, LocationOn } from "@material-ui/icons";

import { Email, Facebook, Instagram, WhatsApp } from "@material-ui/icons";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.location}>
            <LocationOn />
            <span>
              R. Quintana, 887 <br />
              Cidade Monções - São Paulo SP <br />
              CEP: 04569-011
            </span>
          </div>
          <br />
          <br />
          <div className={styles.location}>
            <PhoneCallback />
            <span>
              Telefone: +55 44 3531-0000 <br />
              Whatsapp: (44)99999-9999 <br />
            </span>
          </div>
        </div>

        <div className={styles.center}>
          <Representante />
        </div>

        <div className={styles.right}>
          <FooterMenu />

          <Image
            className={styles.image}
            src={PFLogo}
            width="100"
            height="120"
            alt="Perferro"
            objectFit="contain"
          />
          <div className={styles.icons}>
            <FooterIcons href={"#"}>
              <WhatsApp />
            </FooterIcons>

            <FooterIcons href={"#"}>
              <Instagram />
            </FooterIcons>

            <FooterIcons href={"#"}>
              <Facebook />
            </FooterIcons>

            <FooterIcons href={"#"}>
              <Email />
            </FooterIcons>
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright © Perferro. (Lei 9610 de 19/02/1998)
      </p>
    </>
  );
}

//Menu de Navegação no Footer
function FooterMenu() {
  return (
    <div className={styles.footerMenu}>
      <FooterButton href="#" name="Inicio" />
      <FooterButton href="#" name="Produtos" />
      <FooterButton href="#" name="Quem somos" />
      <FooterButton href="#" name="Informações" />
      <FooterButton href="#" name="Contato" />
      <FooterButton href="#" name="Faça um Orçamento" />
    </div>
  );
}

type FooterIconsProps = {
  href: string;
  children: any;
};

//Icones das redes sociais apontando para seus links
function FooterIcons({ href, children }: FooterIconsProps) {
  return (
    <div className={styles.footerIcons}>
      <Link href={href} passHref>
        <span>{children}</span>
      </Link>
    </div>
  );
}

function Representante() {
  return (
    <>
      <Link href="#" passHref>
        <button className={styles.representante}>TRABALHE CONOSCO</button>
      </Link>
    </>
  );
}
