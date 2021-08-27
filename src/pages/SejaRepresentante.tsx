import React from "react";
import { FormControl, NativeSelect, Input, Button } from "@material-ui/core";

import emailjs from "emailjs-com";
import Image from "next/image";
import Representante1 from "../../public/assets/representante1.png";
import Representante2 from "../../public/assets/representante2.png";

import styles from "../styles/sejaRepresentante.module.scss";

export default function SejaRepresentante() {
  const [state, setState] = React.useState({
    age: "",
    name: "",
  });
  const handleChange = (event) => {
    setState(event.target.value);
  };

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
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1> Seja Representante</h1>
          <p>(Todos os campos são de preenchimento obrigatório)</p>
        </div>

        <div className={styles.root}>
          <form className={styles.forms} onSubmit={sendEmail}>
            <label htmlFor="nome">
              Nome / Empresa: <span>*</span>
            </label>
            <Input className={styles.Input} name="nome" required />
            <label htmlFor="email">
              E-mail: <span>*</span>
            </label>
            <Input className={styles.Input} name="email" required />
            <label htmlFor="telefone">
              Telefone: <span>*</span>
            </label>
            <Input
              className={styles.Input}
              name="telefone"
              type="tel"
              required
            />
            <label htmlFor="cidade">
              Cidade: <span>*</span>
            </label>
            <Input className={styles.Input} name="cidade" required />
            <label htmlFor="estado">
              Estado: <span>*</span>
            </label>
            <Input className={styles.Input} name="estado" required />

            <label htmlFor="trabalhaOuTrabalhou">
              1 - Você trabalha ou já trabalhou no ramo de ar condicionado e
              climatização? <span>*</span>
            </label>
            <FormControl variant="standard">
              <NativeSelect
                className={styles.input}
                name="trabalhaOuTrabalhou"
                value={state.age}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Selecione
                </option>
                <option value="Sim">Sim, já trabalhei</option>
                <option value="Não">Não, não trabalhei</option>
              </NativeSelect>
            </FormControl>

            <label htmlFor="">
              2 - Se respondeu “Sim” na pergunta anterior, responda as perguntas
              abaixo:
            </label>

            <label htmlFor="quaisProdutos">
              a) Com quais produtos? <span>*</span>
            </label>
            <Input
              className={styles.Input}
              name="quaisProdutos"
              multiline
              rows={3}
              type="text"
            />

            <label htmlFor="anosDeExperiencia">
              a) De que ano a que ano? <span>*</span>
            </label>
            <Input
              className={styles.Input}
              name="anosDeExperiencia"
              multiline
              rows={3}
              type="text"
            />

            <label htmlFor="outrosProdutos">
              a) c) Se atualmente revende outros produtos <br /> não
              relacionados ao ramo de climatização, conte-nos quais:{" "}
              <span>*</span>
            </label>
            <Input
              className={styles.Input}
              name="outrosProdutos"
              multiline
              rows={3}
              type="text"
            />

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
    </>
  );
}
