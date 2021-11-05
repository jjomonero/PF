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
            <Image src={ShortArrow} alt="" width="15" height="15" />
          </button>
        </Link>
        <div className={styles.dropUpContent}>
          <ButtonProduto href={"/ProdutoCP600"} title={" Parede CP600"} />
          <ButtonProduto href={"/ProdutoCP840"} title={" Parede CP840"} />
          <ButtonProduto href={"/ProdutoCP1100"} title={" Parede CP1100"} />
          <ButtonProduto href={"/ProdutoCP1400"} title={" Teto CP1400"} />
          <ButtonProduto href={"/ProdutoXL80"} title={"Portátil CP900"} />
        </div>
      </div>
    </>
  );
}

export function MenuInformacao() {
  type ButtonProps = {
    href: string;
    title: string;
  };

  function ButtonInformacao({ href, title }: ButtonProps) {
    return (
      <>
        <a href={href}>{title}</a>
      </>
    );
  }

  return (
    <>
      <div className={styles.dropUp}>
        <Link href={"/Informacao"} passHref>
          <button className={styles.dropButton}>
            Informação
            <Image src={ShortArrow} alt="" width="15" height="15" />
          </button>
        </Link>
        <div className={styles.dropUpContent}>
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Ambiente Industrial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Ar Comercial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Ar Industrial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Parede"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Parede Comercial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador de Parede Industrial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Econômico"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Ecológico"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"CLimatizador Evaporativo de Ar"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Evaporativo de Parede"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Comercial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Industrial"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Portátil"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatiazdor Para Academia"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"CLimatizador para Supermercado"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Para Igreja"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Climatizador Para Salão de Festas"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Componentes do Climatizador"}
          />
          <ButtonInformacao href={"/Informacao"} title={"Colméia"} />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Caixa em Fibra de Vidro"}
          />
          <ButtonInformacao href={"/Informacao"} title={"Benefícios"} />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Manual do Climatizador"}
          />
          <ButtonInformacao
            href={"/Informacao"}
            title={"Manutenção do Climatizador"}
          />
        </div>
      </div>
    </>
  );
}
