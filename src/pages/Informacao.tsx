import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import GetAppIcon from "@material-ui/icons/GetApp";

import styles from "../styles/informacao.module.scss";

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
      <h1 className={styles.title}>Informações</h1>
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
          <Tab label="Climatizadores de Parede" {...a11yProps(0)} />
          <Tab label="Climatizadores de Teto" {...a11yProps(1)} />
          <Tab label="Climatizador Portátil" {...a11yProps(2)} />
          <Tab label="Climatizador Comercial" {...a11yProps(3)} />
          <Tab label="Climatizador Familiar" {...a11yProps(4)} />
          <Tab label="Precauções e Cuidados" {...a11yProps(5)} />
          <Tab label="Dúvidas Frequentes" {...a11yProps(6)} />
        </Tabs>
        <div className={styles.tabPanel}>
          <TabPanel value={value} index={0}>
            <h3>Climatizadores de Parede</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h3>Climatizadores de Teto</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <h3>Climatizador de Portátil</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <h3>Climatizador Comercial</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <h3>Climatizador Familiar</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <h3>Precauções e Cuidados</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <h3>Dúvidas Frequêntes</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptatum minus laboriosam ipsa eius, unde dolor praesentium vero
            quis beatae ratione necessitatibus alias ex repudiandae nisi itaque?
            Dicta, quasi sit?
            <ButtonDownloadPDF
              pdf={"/assets/instrucao.pdf"}
              pdfName={"Manual de Instrução"}
            />
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
