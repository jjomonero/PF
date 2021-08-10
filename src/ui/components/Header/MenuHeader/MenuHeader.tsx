import Image from "next/image";
import Link from "next/link";
import styles from "./menuHeader.module.scss";
import ShortArrow from "../../../../../public/assets/arrowDownShort.svg";

//Menu de Produtos do header
export function MenuProdutos() {
  type ButtonProps = {
    href: string;
    title: string;
  };

  function ButtonProduto({ href, title }: ButtonProps) {
    return (
      <>
        <a href={href}>{title}</a>
      </>
    );
  }

  return (
    <>
      <div className={styles.dropUp}>
        <button className={styles.dropButton}>
          Produtos
          <Image src={ShortArrow} alt="" width="10" height="10" />
        </button>
        <div className={styles.dropUpContent}>
          <ButtonProduto href={"/Produtos"} title={"Modal"} />
          <ButtonProduto href={"/ProdutosTab"} title={"Tab"} />
        </div>
      </div>
    </>
  );
}
