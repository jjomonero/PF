import Image from "next/image";

import styles from "./cardProdutos.module.scss";

type CardProdutosProps = {
  src: any;
  alt: string;
  subtitle: string;
};

export function CardProdutos({ src, alt, subtitle }: CardProdutosProps) {
  return (
    <>
      <div className={styles.cardProdutosContainer}>
        <Image src={src} width={400} height={400} alt={alt} objectFit="cover" />
        <sub>{subtitle}</sub>
      </div>
    </>
  );
}
