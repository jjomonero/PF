import Link from "@material-ui/core/Link";

import styles from "../styles/informacao.module.scss";

export default function Informacao(props) {
  return (
    <div className={styles.containerInformacao}>
      <h1>Informações</h1>
      <sub>Informações sobre nossos produtos</sub>
      <Link href="/assets/man.pdf" target="_blank" download>
        <ButtonDownloadPDF pdfName={"Download"} />
      </Link>
    </div>
  );
}

type ButtonDownloadPDFProps = {
  pdfName: string;
};

function ButtonDownloadPDF({ pdfName }: ButtonDownloadPDFProps) {
  return (
    <div>
      <button className={styles.buttonDownload}>{pdfName}</button>
    </div>
  );
}
