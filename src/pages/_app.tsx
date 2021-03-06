import { Header } from "../ui/components/Header/Header";
import { Footer } from "../ui/components/Footer/Footer";
import { Whatsapp } from "../ui/components/Whatsapp/Whatsapp";
import { ScrollButtonToTop } from "../ui/components/ScrollButtonToTop/ScrollButtonToTop";
import styles from "../styles/_app.module.scss";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Whatsapp />
      <Footer />
      <ScrollButtonToTop />
    </div>
  );
}

export default MyApp;
