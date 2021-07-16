import styles from "./buttonHeader.module.scss";
import Link from "next/link";
//Propriedades dos Botões do header
type ButtonsProps = {
  href?: any;
  name?: any;
  children?: any;
};

//Funçao que exporta o component de Botao do Header já com a Tag Link do NextJS
export function ButtonHeader({ href, name, children }: ButtonsProps) {
  return (
    <div className={styles.container}>
      <Link href={href} passHref>
        <button className={styles.button}>
          {name} {children}
        </button>
      </Link>
    </div>
  );
}
