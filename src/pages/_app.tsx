import { Header } from "../ui/components/Header/Header";
import { Footer } from "../ui/components/Footer/Footer";
import styles from "../styles/_app.module.scss";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
