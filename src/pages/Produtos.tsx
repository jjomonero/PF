import { CardProdutos } from "../ui/components/Produtos/CardProdutos/CardProdutos";
import CP1100 from "../../public/Produtos/CP1100/PNG/CP1100-001.png";
import CP600 from "../../public/Produtos/CP600/PNG/CP600-001.png";
import CP840 from "../../public/Produtos/CP840/PNG/CP840-001.png";
import CP1400 from "../../public/Produtos/CP1400/PNG/SON02917.png";
import XL80 from "../../public/Produtos/XL80/PNG/XL-001.png";

import styles from "../styles/produtos.module.scss";

export default function Produto(props) {
  return (
    <>
      <div className={styles.titleProdutos}>
        <h1>Produtos</h1>
        <p>
          Nossa linha de produtos Climatizadores Perferro é mais completa de
          todo o Brasil. <br />
          Climatizadores Evaporativos industriais e domestícos, perfeito para
          seu negócio e sua fámilia.
        </p>
      </div>
      <div className={styles.produtosContainer}>
        <CardProdutos src={CP1100} alt={"CP100"} subtitle={"CP1100"} />
        <CardProdutos src={CP600} alt={"CP100"} subtitle={"CP600"} />
        <CardProdutos src={CP840} alt={"CP100"} subtitle={"CP840"} />
        <CardProdutos src={CP1400} alt={"CP100"} subtitle={"CP1400"} />
        <CardProdutos src={XL80} alt={"CP100"} subtitle={"XL80"} />
        <CardProdutos src={CP1100} alt={"CP100"} subtitle={"CP100"} />
      </div>
    </>
  );
}
