import styles from "./descriptionProdutos.module.scss";

type DescriptionProdutosProps = {
  title: string;
  text: string;
  vazaoDeAr: string;
  dimensoes: string;
  abertura: string;
  detalhes: string;
};

export function DescriptionProdutos({
  title,
  text,
  vazaoDeAr,
  dimensoes,
  abertura,
  detalhes,
}: DescriptionProdutosProps) {
  return (
    <div className={styles.descriptionProdutosContainer}>
      <h2>{title}</h2>
      <p>{text}</p>

      <p>
        <strong>Vazão de ar: </strong>
        {vazaoDeAr}
      </p>

      <p>
        <strong>Dimensões: </strong>
        {dimensoes}
      </p>

      <p>
        <strong>Abertura: </strong>
        {abertura}
      </p>

      <p>
        <strong>Detalhes: </strong>
        {detalhes}
      </p>
    </div>
  );
}
