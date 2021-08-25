import { useRef } from "react";
import Image from "next/image";
import Produtos from "../../../../public/Produtos/CP1100/PNG/CP1100-001.png";
import Produtos2 from "../../../../public/Produtos/CP1100/PNG/CP1100-002.png";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";

import styles from "./carousel.module.scss";

export function SectionCarousel(props) {
  const carousel = useRef(null);

  const handleClickLeft = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth * 4;
  };

  const handleClickRight = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth * 4;
  };
  type CarouselProdutosProps = {
    image: any;
    name: string;
    oldPrice: string;
    price: string;
  };

  const CarouselProdutos = ({
    image,
    name,
    oldPrice,
    price,
  }: CarouselProdutosProps) => {
    return (
      <div className={styles.carouselItem}>
        <div className={styles.carouselImage}>
          <Image src={image} width="300" height="300" alt="image" />
        </div>
        <div className={styles.carouselInfo}>
          <span className={styles.name}> {name}</span>
          <span className={styles.oldPrice}>U$ {oldPrice} </span>
          <span className={styles.price}>U$ {price} </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={styles.title}>
        <h1>Ofertas e Promoções</h1>
      </div>

      <div className={styles.arrows}>
        <ArrowLeft
          fontSize="large"
          className={styles.arrow1}
          onClick={handleClickLeft}
        />
        <ArrowRight
          fontSize="large"
          className={styles.arrow2}
          onClick={handleClickRight}
        />
      </div>

      <div className={styles.carouselContainer} ref={carousel}>
        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos2}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />

        <CarouselProdutos
          image={Produtos}
          name={"CP1100"}
          oldPrice={"200.00"}
          price={"150.00"}
        />
      </div>
    </>
  );
}
