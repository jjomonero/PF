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
        <Link href={"/ProdutosTab"} passHref>
          <button className={styles.dropButton}>
            Produtos
            <Image src={ShortArrow} alt="" width="10" height="10" />
          </button>
        </Link>
        <div className={styles.dropUpContent}>
          <ButtonProduto href={"/ProdutosTab#CP600"} title={"CP600"} />
          <ButtonProduto href={"/ProdutosTab#CP840"} title={"CP840"} />
          <ButtonProduto href={"/ProdutosTab#CP1100"} title={"CP1100"} />
          <ButtonProduto href={"/ProdutosTab#CP1400"} title={"CP1400"} />
          <ButtonProduto href={"/ProdutosTab#XL80"} title={"XL80"} />
        </div>
      </div>
    </>
  );
}
