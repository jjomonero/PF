export default function QuemSomos(props) {
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
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bolder",
        }}
      >
        Quem somos
      </h1>
      <p style={{ width: "80%", textAlign: "center" }}>
        A mais de 10 anos desenvolvemos e aperfeiçoamos climatizadores
        evaporativos, chegando em 2015 com nossa nova linha que tráz índices
        ideais de temperatura, pureza e umidade do ar, melhorando o conforto e
        diminuindo muito mais o consumo de energia na climatização de ambientes.
        Com isso fabricamos os melhores climatizadores do Brasil, oferecendo a
        melhor relação custo beneficio, garantindo qualidade e eficiência de
        nossos produtos. Nossa empresa está localizada no município de Peabiru
        estado do Paraná, contamos também com filial no estado do Mato Grosso na
        cidade de Sinop. Dessa forma conseguimos atender todo o Brasil.
      </p>
    </div>
  );
}
