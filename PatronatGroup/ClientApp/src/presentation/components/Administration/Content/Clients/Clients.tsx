import { t } from "i18next";
import React, { FC, useEffect } from "react";
import { Container, Table } from "semantic-ui-react";
import Client from "../../../../../application/models/Client";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";



interface PropsType {
  clients: Array<Client>;
  onGetPage: () => void;
}

const Clients: FC<PropsType> = (props) => {
  useEffect(() => {
    props.onGetPage();
  }, [props.onGetPage]);
  return (
    <Container style={{marginTop:"2%"}}>
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>{t(labels.name)}</Table.HeaderCell>
            <Table.HeaderCell>{t(labels.email)}</Table.HeaderCell>
            <Table.HeaderCell>{t(labels.phonenumber)}</Table.HeaderCell>
            <Table.HeaderCell>{t(labels.description)}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.clients.map((x) => (
            <Table.Row key={x.id}>
              <Table.Cell>{x.fullName}</Table.Cell>
              <Table.Cell>{x.email}</Table.Cell>
              <Table.Cell>{x.phoneNumber}</Table.Cell>
              <Table.Cell>{x.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default Clients;
