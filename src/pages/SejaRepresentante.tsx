export default function SejaRepresentante(props) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        background: "var(--secondary-main)",
        color: "var(--primary-main)",
        border: "1px solid var(--primary-main)",
        borderLeft: "none",
        borderRight: "none",
        borderTop: "none",
      }}
    >
      <h1>Seja um Representante Perferro</h1>
      <sub>
        Preencha os campos do nosso formulário e entraremos emk contato em
        breve.
      </sub>
    </div>
  );
}
