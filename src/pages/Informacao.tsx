import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GetAppIcon from "@material-ui/icons/GetApp";

import Image from "next/image";
import Trabalhos from "../../public/assets/teto.jpg";
import styles from "../styles/informacao.module.scss";
import { Buttonsh3 } from "../ui/components/Buttons/Buttonsh3";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className={styles.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical"
          indicatorColor="primary"
          className={styles.tabs}
        >
          <Tab
            className={styles.tab}
            label="Climatizador de Ambiente Industrial"
            {...a11yProps(0)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador de Ar Comercial"
            {...a11yProps(1)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador de Ar Industrial"
            {...a11yProps(2)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador de Parede"
            {...a11yProps(3)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador de Parede Comercial"
            {...a11yProps(4)}
          />
          <Tab
            className={styles.tab}
            label="Precau????es de Parede Industrial"
            {...a11yProps(5)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Econ??mico"
            {...a11yProps(6)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Ecol??gico"
            {...a11yProps(7)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Evaporativo de Ar"
            {...a11yProps(8)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Evaporativo de Parede"
            {...a11yProps(9)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Comercial"
            {...a11yProps(10)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Industrial"
            {...a11yProps(11)}
          />
          <Tab
            className={styles.tab}
            label="CLmiatizador Port??til"
            {...a11yProps(12)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Para Academia"
            {...a11yProps(13)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Para Supermercado"
            {...a11yProps(14)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Para Igreja"
            {...a11yProps(15)}
          />
          <Tab
            className={styles.tab}
            label="Climatizador Para Sal??o de Festas"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Componentes do Climatizador"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Colm??ia do Climatizador"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Caixa em Fibra de Vidro"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Benef??cio do Climatizador"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Manual do Climatizador"
            {...a11yProps(16)}
          />
          <Tab
            className={styles.tab}
            label="Manuten????p do Climatizador"
            {...a11yProps(16)}
          />
        </Tabs>
        <div className={styles.tabPanel}>
          <TabPanel value={value} index={0}>
            <Buttonsh3>Climatizador de Ambiente Industrial</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ambiente Industrial <strong>PERFERRO</strong>{" "}
              vem para solucionar de maneira inovadora e econ??mica o problema da
              falta de oxig??na????o do ambiente, renovando todo ar proporcionando
              um maior bem estar, gerando produtividade e maior desempenho
              durante o trabalho
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              O uso do climatizador ?? recomendado a diversos tipos de ambientes
              como: Industrias, Igrejas, Padarias, Academias, Supermercados,
              Concession??rias, Sal??es de Festas, Refeit??rios, Cozinhas, Escolas
              entre v??rios outros. Garantindo a Renova????o do ar e maior
              oxigena????o assim gerando um maior bem estar.
            </p>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Buttonsh3>Climatizador de Ar Comercial</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Buttonsh3>Climatizador de Ar Industrial</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Buttonsh3>Climatizador de Parede</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Buttonsh3>Climatizador de Parede Comercial</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Buttonsh3>Climatizador de Parede Industrial</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Buttonsh3>Climatizador Econ??mico</Buttonsh3>
            <span>
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />{" "}
              <Image width={100} height={100} src={Trabalhos} alt="Trabalhos" />
            </span>
            <p>
              O Climatizador de Ar Comercial <strong>PERFERRO</strong> traz como
              principal benef??cio a renava????o e umidifica????o do ar ambiente,
              Reduzindo e, at?? 40% o desperdicios nos hortifrutis e outros
              produtos naturais,
            </p>
            <Buttonsh3>Onde se Aplica?</Buttonsh3>
            <p>
              A aplica????o do Climatizador de Ar Comercial ?? recomendado para
              Hortifrutis, Supermercados, Padarias entre outros locais onde a
              renova????o do ar e umidifica????o do ambiente s??o de extrema
              import??ncia.
            </p>
          </TabPanel>
        </div>
      </div>
    </>
  );
}

type ButtonDownloadPDFProps = {
  pdfName: string;
  pdf: string;
};

function ButtonDownloadPDF({ pdfName, pdf }: ButtonDownloadPDFProps) {
  return (
    <div>
      <Link href={pdf} download>
        <button className={styles.buttonDownload}>
          <GetAppIcon className={styles.icon} /> {pdfName}
        </button>
      </Link>
    </div>
  );
}
