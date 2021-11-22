import styles from "./buttons.module.scss";

type Buttonsh3Props = {
  children: string;
  text?: string;
};

export function Buttonsh3({ text, children }: Buttonsh3Props) {
  return (
    <div className={styles.textH3}>
      {children}
      {text}
    </div>
  );
}

type ButtonsQuemSomosProps = {
  children: string;
  text?: string;
};
export function ButtonsQuemSomos({ text, children }: ButtonsQuemSomosProps) {
  return (
    <div className={styles.textQuemSomos}>
      {children}
      {text}
    </div>
  );
}
