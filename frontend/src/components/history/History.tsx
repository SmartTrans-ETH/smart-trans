import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useMetamask } from "../../contexts/metamask";
import { Button } from "../button";
import TableComponent from "../table";
import { Title } from "../title/Title";
import { Container } from "./style";
import axios from "../../axios";

interface Props {}

const History: React.FC<Props> = (props) => {
  const [transaction, setTransactions] = useState([
    {
      numberPeople: 20,
      contractTotalValue: 6000,
      status: true,
    },
    {
      numberPeople: 50,
      contractTotalValue: 2000,
      status: true,
    },
    {
      numberPeople: 40,
      contractTotalValue: 500,
      status: false,
    },
  ]);

  useEffect(() => {
    axios
      .get("/trip/user")
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: " ",
        columns: [
          {
            Header: "Linha",
            accessor: "station",
          },
          {
            Header: "Data",
            accessor: "date",
          },
          {
            Header: "Hora",
            accessor: "hour",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => [...transaction], [transaction]);

  return (
    <Container>
      <Title>Histórico</Title>
      <TableComponent data={data} columns={columns} />
    </Container>
  );
};

export default History;
