import React from "react";
import { FormControl, NativeSelect, Input, Button } from "@material-ui/core";
import emailjs from "emailjs-com";

import styles from "../styles/contato.module.scss";

export default function Contato() {
  const [state, setState] = React.useState({
    age: "",
    name: "",
  });
  const handleChange = (event) => {
    setState(event.target.value);
  };

  function enviarEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "gmailMessage",
      "contatoForm",
      e.target,
      "user_K6gt93bCqbsN5pD5DUDsp"
    );

    e.target.reset();
  }

  return (
    <div>
      <div className={styles.title}>
        <h1> Fale Conosco</h1>
        <p>Preencha os campos abaixo e clique em enviar.</p>
      </div>

      <div className={styles.root}>
        <form className={styles.forms} onSubmit={enviarEmail}>
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

          <FormControl variant="standard">
            <NativeSelect
              className={styles.input}
              name="selecao"
              value={state.age}
              onChange={handleChange}
            >
              <option value="" disabled>
                Selecione um Assunto
              </option>
              <option value="Orçamento">Orçamento</option>
              <option value="Informações">Informações</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Financeiro">Financeiro</option>
            </NativeSelect>
          </FormControl>
          <Input
            className={styles.Input}
            name="mensagem"
            placeholder="Mensagem"
            multiline
            rowsMin={2}
            maxRows={5}
            type="text"
          />

          <button className={styles.button} type="submit">
            enviar
          </button>
        </form>
      </div>
    </div>
  );
}
