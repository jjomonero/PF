import React, { useRef, useEffect } from "react";
import { Form } from "@unform/web";
import { Input } from "../ui/components/Form/input";
import { Scope } from "@unform/core";
import * as Yup from "yup";
import styles from "../styles/contato.module.scss";

export default function Contato() {
  {
    /* Ref ou referencias são muito praticas e perfomaticas na hora de acessar o valor/propriedade de cada campo */
  }
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      {
        /* schema responsavel por percorres cada campo e exibir mensagem de aviso e erro conforme o esperado*/
      }
      const schema = Yup.object().shape({
        name: Yup.string().required("o nome é obrigatório"),
        email: Yup.string()
          .email("Digite um email válido")
          .required("O email e obrigatório"),
        address: Yup.object().shape({
          city: Yup.string()
            .min(3, "No mínimo 3 caracteres")
            .required("A cidade é obrigatória"),
        }),
      });

      {
        /* abortEarly por padrao vem como 'true' por isso altera-lo para 'false' para que a validação percorra todosos campos ao inves de somete o 1° como padrão */
      }
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      {
        /* apaga as campo de  obrigatório após preencher corretamente os campos */
      }
      formRef.current.setErrors({});

      {
        /* reseta os campos apos envio */
      }
      reset();

      {
        /* validação de erros */
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     formRef.current.setData({
  //       name: "Joao Pedro",
  //       email: "jfreitasdancer@gmail.com",
  //       address: {
  //         street: "Rua Palumbo",
  //       },
  //     });
  //   }, 2000);
  // }, []);

  return (
    <div className={styles.App}>
      <h1> Contato</h1>
      <span>
        Preencha os campos abaixo com seus dados.
        <br /> Após clique para enviar!
      </span>

      <Form ref={formRef} onSubmit={handleSubmit}>
        {/* initialData sao os dados exibidos assim que o imput é formado*/}
        <Input name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="Email" />
        {/* <Input type="password" name="password" placeholder="Password"/> */}
        <Scope path="address">
          {/*abre um escopo onde todos os inputs ficam acoplados a este caminho, deixando mais legivel*/}
          <Input name="street" placeholder="Rua" />
          <Input name="number" placeholder="Número" />
          <Input name="neighborhood" placeholder="Bairro" />
          <Input name="city" placeholder="Cidade" />
          <Input name="state" placeholder="Estado" />
        </Scope>
        <button className={styles.submit} type="submit">
          Enviar
        </button>
      </Form>
    </div>
  );
}
