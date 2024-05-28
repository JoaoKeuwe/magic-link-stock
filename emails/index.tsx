import {
  Button,
  Container,
  Html,
  Text,
} from "@react-email/components";
import Table from "../components/table";
import * as React from "react";

export default function Email() {

  
  const data1 = [
    { label: "CNPJ", value: "000000000-00" },
    { label: "Endereço", value: "Rua Exemplo, 123" },
    { label: "Email", value: "joao@example.com" },
    { label: "Responsável", value: "João da Silva" },
  ];

  const data2 = [
    { label: "CNPJ", value: "111111111-11" },
    { label: "Endereço", value: "Avenida Teste, 456" },
    { label: "Email", value: "maria@example.com" },
    { label: "Responsável", value: "Maria de Souza" },
    { label: "Telefone", value: "(11) 1234-5678" },
  ];

  const data3 = [
    { label: "Emitente", value: "empresa" },
    { label: "Tier do contrato", value: "Studica Brasil" },
    { label: "Dólar Utilizado", value: "Período de utilização" },
    { label: "Data de vencimento", value: "rua bacaetava, 400, São Paulo, SP" },
    { label: "Data de vencimento", value: "Fulano de tal" },
    { label: "Valor do periodo de venda", value: "R$ 1294" },
  ];

  return (
    <Html>
      <Container style={{ padding: "24px", background: "#F7F9FC" }}>
        <Container style={{ background: "#00254D", borderRadius: "24px" }}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Stock distribuidora
          </Text>
        </Container>

        <Text
          style={{ color: "#21436E", fontWeight: "bold", fontSize: "16px" }}
        >
          Oi João 👋,
        </Text>
        <Text>
          Gostaríamos de lembrar que o boleto da NFS-e n. 17263 vencerá no dia
          28/03/24.
        </Text>

        <Button
          href="https://google.com"
          style={{
            background: "#2172EC",
            color: "white",
            padding: "8px 16px",
            borderRadius: "24px",
          }}
        >
          Ver pedido de venda
        </Button>

        <Text
          style={{ color: "#21436E", fontWeight: "bold", fontSize: "16px" }}
        >
          Informações da Empresa
        </Text>
        <Container>
          <Table data={data1} background="#ffffff" color="#000000" />
        </Container>

        <Text
          style={{ color: "#21436E", fontWeight: "bold", fontSize: "16px" }}
        >
          Informações do Cliente
        </Text>
        <Container>
          <Table data={data2} background="#ffffff" color="#000000" />
        </Container>

        <Text
          style={{ color: "#21436E", fontWeight: "bold", fontSize: "16px" }}
        >
          Informações da Stock distribuidora
        </Text>
        <Container>
          <Table data={data3} background="#3068A5" color="#FFF" />
        </Container>
      </Container>
    </Html>
  );
}
