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
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> Fale Conosco</h1>
        <p>(Todos os campos são de preenchimento obrigatório)</p>
      </div>

      <div className={styles.root}>
        <form className={styles.forms} onSubmit={enviarEmail}>
          <label htmlFor="nome">
            Nome: <span>*</span>
          </label>
          <Input className={styles.Input} name="nome" required />
          <label htmlFor="email">
            E-mail: <span>*</span>
          </label>
          <Input className={styles.Input} name="email" required />
          <label htmlFor="telefone">
            Telefone: <span>*</span>
          </label>
          <Input className={styles.Input} name="telefone" type="tel" required />
          <label htmlFor="cidade">
            Cidade: <span>*</span>
          </label>
          <Input className={styles.Input} name="cidade" required />
          <label htmlFor="estado">
            Estado: <span>*</span>
          </label>
          <Input className={styles.Input} name="estado" required />

          <label htmlFor="selecao">
            Como nos conheceu?: <span>*</span>
          </label>
          <FormControl variant="standard">
            <NativeSelect
              className={styles.input}
              name="selecaoComoNosConheceu"
              value={state.age}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                --selecione--
              </option>
              <option value="Busca do Google">Busca do Google</option>
              <option value="Outros Buscadores">Outros Buscadores </option>
              <option value="Links Patrocinados">Links Patrocinados </option>
              <option value="Outros Anúncios">Outros Anúncios </option>
              <option value="Facebook">Facebook </option>
              <option value="Instagram">Instagram </option>
              <option value="Google+">Google+ </option>
              <option value="Indicação">Indicação </option>
              <option value="Outros">Outros </option>
            </NativeSelect>
          </FormControl>

          <label htmlFor="selecao">
            Selecione um assunto: <span>*</span>
          </label>
          <FormControl variant="standard">
            <NativeSelect
              className={styles.input}
              name="selecaoAssunto"
              value={state.age}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                --selecione--
              </option>
              <option value="Orçamento">Orçamento</option>
              <option value="Informações">Informações</option>
              <option value="Dúvidas">Dúvidas</option>
              <option value="Financeiro">Financeiro</option>
            </NativeSelect>
          </FormControl>

          <label htmlFor="mensagem">
            a) Mensagem: <span>*</span>
          </label>
          <Input
            className={styles.Input}
            name="mensagem"
            multiline
            rows={3}
            type="text"
            required
          />

          <button className={styles.button} type="submit">
            enviar
          </button>
        </form>
      </div>
    </div>
  );
}
