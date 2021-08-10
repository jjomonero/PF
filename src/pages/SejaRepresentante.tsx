import styles from "../styles/sejaRepresentante.module.scss";

export default function SejaRepresentante(props) {
  return (
    <div className={styles.sejaRepresentanteContainer}>
      <h1>Seja um Representante Perferro</h1>
      <sub>
        Preencha os campos do nosso formulário e entraremos em contato em breve.
      </sub>
    </div>
  );
}
