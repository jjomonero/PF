import React from "react";
import { Input } from "@material-ui/core";
import emailjs from "emailjs-com";
import Image from "next/image";
import Representante1 from "../../public/assets/representante1.png";
import Representante2 from "../../public/assets/representante2.png";

import styles from "../styles/sejaRepresentante.module.scss";

export default function SejaRepresentante() {
  // const handleSubmit = (event) => {
  //   alert("Formulário enviado com sucesso");
  //   event.preventDefault();
  // };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmailMessage",
        "sejaRepresentanteForm",
        e.target,
        "user_K6gt93bCqbsN5pD5DUDsp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <div>
      <section className={styles.sectionTop}>
        <Image src={Representante1} width="500" height="300" alt="Imagen" />
      </section>
      <div className={styles.title}>
        <h1> Seja Representante</h1>
        <p>Preencha os campos abaixo e clique em enviar.</p>
      </div>

      <div className={styles.root}>
        <form className={styles.forms} onSubmit={sendEmail}>
          <Input className={styles.Input} name="nome" placeholder="Nome" />
          <Input className={styles.Input} name="email" placeholder="E-mail" />
          <Input
            className={styles.Input}
            name="telefone"
            placeholder="Telefone"
            type="tel"
          />
          <Input className={styles.Input} name="cidade" placeholder="Cidade" />
          <Input className={styles.Input} name="estado" placeholder="Estado" />

          <input
            className={styles.button}
            type="submit"
            // onClick={handleSubmit}
            value="Enviar"
          />
        </form>
        <section className={styles.sectionBottom}>
          <Image src={Representante2} width="300" height="300" alt="Imagen" />
        </section>
      </div>
    </div>
  );
}
