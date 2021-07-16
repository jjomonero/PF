import Link from "next/link";
import styles from "./footerButton.module.scss";

type FooterButtonProps = {
  href: string;
  name: string;
  children?: any;
};

export function FooterButton({ href, name, children }: FooterButtonProps) {
  return (
    <>
      <Link href={href} passHref>
        <button className={styles.footer}>
          {children} {name}
        </button>
      </Link>
    </>
  );
}
