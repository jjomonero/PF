import { ArrowDropUp } from "@material-ui/icons";
import styles from "./scrollButtonToTop.module.scss";
export function ScrollButtonToTop(props) {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <div>
      <button onClick={topFunction} className={styles.myBtn}>
        <ArrowDropUp />
        TOPO
      </button>
    </div>
  );
}
