import { FooterButton } from "./FooterButton/FooterButton";
import Image from "next/image";
import Link from "next/link";
import PFLogo from "../../../../public/assets/pf-azul.jpeg";
import FacebookIcon from "../../../../public/assets/facebookIcon.svg";
// import Insta from "../../../../public/assets/insta.svg";
import EmailIcon from "../../../../public/assets/emailIcon.svg";
import LocationIcon from "../../../../public/assets/locationIcon.svg";
import PhoneIcon from "../../../../public/assets/phoneIcon.svg";

import styles from "./footer.module.scss";
import React from "react";

export function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.location}>
            <Image src={LocationIcon} width="20" height="20" alt="Location" />
            <h5>
              R. Quintana, 887 <br />
              Cidade Monções - São Paulo SP <br />
              CEP: 04569-011
            </h5>
          </div>

          <div className={styles.location}>
            <Image src={PhoneIcon} width="20" height="20" alt="Phone" />
            <h5>Telefone: +55 11 2196-2300</h5>
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
            width="200"
            height="100"
            alt="Perferro"
            objectFit="contain"
          />
          <div className={styles.icons}>
            <FooterIcons href={"#"} src={FacebookIcon} alt={"Facebook"} />
            {/* <FooterIcons href={"#"} src={Insta} alt={"Instagram"} /> */}
            <FooterIcons href={"#"} src={EmailIcon} alt={"Email"} />
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
  src: any;
  alt: string;
};

//Icones das redes sociais apontando para seus links
function FooterIcons({ href, src, alt }: FooterIconsProps) {
  return (
    <>
      <Link href={href} passHref>
        <button className={styles.footerIcons}>
          <Image
            className={styles.icon}
            src={src}
            width="40"
            height="40"
            objectFit="contain"
            alt={alt}
          />
        </button>
      </Link>
    </>
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
