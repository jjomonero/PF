import React from "react";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Image from "next/image";
import CP1100_1 from "../../public/Produtos/CP1100/PNG/CP1100-001.png";
import CP1100_2 from "../../public/Produtos/CP1100/PNG/CP1100-002.png";
import CP1100_3 from "../../public/Produtos/CP1100/PNG/CP1100-003.png";
import CP1100_4 from "../../public/Produtos/CP1100/PNG/CP1100-004.png";
import CP1100_5 from "../../public/Produtos/CP1100/PNG/CP1100-005.png";
import AppBar from "@material-ui/core/AppBar";

import { DescriptionProdutos } from "../ui/components/Produtos/DescriptionProdutos/DescriptionProdutos";

import styles from "../styles/produtosTab.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <div className={styles.titleProdutos}>
        <h1>Produtos</h1>
      </div>

      <div className={styles.container}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="CP600" {...a11yProps(0)} />
            <Tab label="CP840" {...a11yProps(1)} />
            <Tab label="CP1100" {...a11yProps(2)} />
            <Tab label="CP1400" {...a11yProps(3)} />
            <Tab label="XL80" {...a11yProps(4)} />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <ImageTab
            image1={CP1100_1}
            image2={CP1100_2}
            image3={CP1100_3}
            image4={CP1100_4}
            image5={CP1100_5}
          >
            <DescriptionProdutos
              title={"CP600"}
              text={
                "Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."
              }
              vazaoDeAr={"13.000 M³/h"}
              dimensoes={"1,03 x 1,12 x 0,82"}
              abertura={"0,72 x 0,72"}
              detalhes={
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
              }
            />
          </ImageTab>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <ImageTab
            image1={CP1100_2}
            image2={CP1100_1}
            image3={CP1100_3}
            image4={CP1100_4}
            image5={CP1100_5}
          >
            <DescriptionProdutos
              title={"CP840"}
              text={
                "Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."
              }
              vazaoDeAr={"13.000 M³/h"}
              dimensoes={"1,03 x 1,12 x 0,82"}
              abertura={"0,72 x 0,72"}
              detalhes={
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
              }
            />
          </ImageTab>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <ImageTab
            image1={CP1100_3}
            image2={CP1100_2}
            image3={CP1100_1}
            image4={CP1100_4}
            image5={CP1100_5}
          >
            <DescriptionProdutos
              title={"CP1100"}
              text={
                "Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."
              }
              vazaoDeAr={"13.000 M³/h"}
              dimensoes={"1,03 x 1,12 x 0,82"}
              abertura={"0,72 x 0,72"}
              detalhes={
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
              }
            />
          </ImageTab>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <ImageTab
            image1={CP1100_4}
            image2={CP1100_2}
            image3={CP1100_3}
            image4={CP1100_1}
            image5={CP1100_5}
          >
            <DescriptionProdutos
              title={"CP1400"}
              text={
                "Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."
              }
              vazaoDeAr={"13.000 M³/h"}
              dimensoes={"1,03 x 1,12 x 0,82"}
              abertura={"0,72 x 0,72"}
              detalhes={
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
              }
            />
          </ImageTab>
        </TabPanel>

        <TabPanel value={value} index={4}>
          <ImageTab
            image1={CP1100_5}
            image2={CP1100_2}
            image3={CP1100_3}
            image4={CP1100_4}
            image5={CP1100_1}
          >
            <DescriptionProdutos
              title={"XL80"}
              text={
                "Ideal para médio e pequenos ambientes como: padarias, escritórios e salões de beleza."
              }
              vazaoDeAr={"13.000 M³/h"}
              dimensoes={"1,03 x 1,12 x 0,82"}
              abertura={"0,72 x 0,72"}
              detalhes={
                "Hélice direto no motor, painel digital com controlador de velocidade e controle remoto"
              }
            />
          </ImageTab>
        </TabPanel>
      </div>
    </>
  );
}

function ImageTabPanel(props) {
  const { children, image, value, index, ...other } = props;

  return (
    <div
      role="imagetabpanel"
      hidden={value !== index}
      id={`image-tabpanel-${index}`}
      aria-labelledby={`image-tab-${index}`}
      {...other}
      className={styles.imageTabPanelContainer}
    >
      {value === index && (
        <Box p={3} className={styles.box}>
          <Image src={image} width={"700"} height={"500"} alt="" />
        </Box>
      )}
    </div>
  );
}

ImageTabPanel.propTypes = {
  image: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// function a11yPropssss(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }
type ImageTabPanelProps = {
  image1?: any;
  image2?: any;
  image3?: any;
  image4?: any;
  image5?: any;
  image6?: any;
  image7?: any;
  children?: any;
};

function ImageTab({
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  children,
}: ImageTabPanelProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.imageTabContainer}>
      <Tabs
        orientation="vertical"
        variant="standard"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={styles.tabs}
      >
        <Tab
          icon={<Image src={image1} width="50" height="50" alt="Image" />}
          {...a11yProps(0)}
        />
        <Tab
          icon={<Image src={image2} width="50" height="50" alt="Image" />}
          {...a11yProps(1)}
        />
        <Tab
          icon={<Image src={image3} width="50" height="50" alt="Image" />}
          {...a11yProps(2)}
        />
        <Tab
          icon={<Image src={image4} width="50" height="50" alt="Image" />}
          {...a11yProps(3)}
        />
        <Tab
          icon={<Image src={image5} width="50" height="50" alt="Image" />}
          {...a11yProps(4)}
        />
      </Tabs>
      <ImageTabPanel value={value} image={image1} index={0} />

      <ImageTabPanel value={value} image={image2} index={1} />

      <ImageTabPanel value={value} image={image3} index={2} />

      <ImageTabPanel value={value} image={image4} index={3} />

      <ImageTabPanel value={value} image={image5} index={4} />

      {children}
    </div>
  );
}
