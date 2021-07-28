export default function Informacao(props) {
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
      <h1>Informações</h1>
      <sub>Informações sobre nossos produtos</sub>
    </div>
  );
}
