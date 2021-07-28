import Link from "next/link";
import { Call } from "@material-ui/icons";
import styles from "./whatsapp.module.scss";

export function Whatsapp(props) {
  return (
    <div className={styles.container}>
      <Link href="//wa.me/5544998154318" passHref>
        <Call fontSize="large" className={styles.whatsapp} />
      </Link>
    </div>
  );
}
