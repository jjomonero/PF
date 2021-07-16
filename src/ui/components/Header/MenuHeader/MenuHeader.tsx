import { useState } from "react";
import { ButtonHeader } from "../ButtonHeader/ButtonHeader";
import Image from "next/image";
import Link from "next/link";
import styles from "./menuHeader.module.scss";
import ShortArrow from "../../../../../public/assets/arrowDownShort.svg";

//Propriedades do Menu que vai no Header
type MenuProps = {
  title: string;
  img: string;
  children: any;
  className: string;
};

//Função menu que vai fazer toda a regra de quando clicar abrir e fechar o menu
function Menu({ title, children, img }: MenuProps) {
  const [opeMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div onClick={() => setOpenMenu(!opeMenu)}>
        <ButtonHeader href={"#"} name={title}>
          <Image src={img} alt="" width="10" height="10" />
        </ButtonHeader>
        {opeMenu && <div className={styles.dropDownContent}>{children}</div>}
      </div>
    </>
  );
}

//Propriedade dos botões/links do menu
type ButtonsProps = {
  href?: any;
  name?: any;
  children?: any;
};

//função que cria os botões de navegação dentro do menu, já com a tag Link do NextJS
function ButtonMenu({ href, name, children }: ButtonsProps) {
  return (
    <>
      <Link href={href} passHref>
        <button className={styles.buttonMenu}>
          {name} {children}
        </button>
      </Link>
    </>
  );
}

//Menu de Produtos do header, caso for usar outros menus é só clonar e alterar o nome do menu e o title e assim proseguir adicionando os ButtonMenu conform
export function MenuProdutos() {
  return (
    <>
      <Menu title={"Produtos"} img={ShortArrow} className={styles.buttonMenu}>
        <ButtonMenu href={"#"} name="CP 1500" />
        <ButtonMenu href={"#"} name="CP 2100" />
        <ButtonMenu href={"#"} name="CP 1350" />
        <ButtonMenu href={"#"} name="CP 800" />
        <ButtonMenu href={"#"} name="CP 650" />
        <ButtonMenu href={"#"} name="CP 900" />
        <ButtonMenu href={"#"} name="CP 1100" />
        <ButtonMenu href={"#"} name="CP 1250" />
      </Menu>
    </>
  );
}
