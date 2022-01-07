import { t } from "i18next";
import React,{ FC, useEffect } from "react";
import { Container, Table } from "semantic-ui-react";
import { Lawyer } from "../../../../../application/models/Lawyers";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";


interface PropsType {
  lawyers: Array<Lawyer>;
  onGetPage: () => void;
}

const Employees: FC<PropsType> = (props) => {
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
          <Table.HeaderCell>{"t(labels.)"}</Table.HeaderCell>
          <Table.HeaderCell>{t(labels.description)}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.lawyers.map((x) => (
          <Table.Row key={x.id}>
            <Table.Cell>{x.fullName}</Table.Cell>
            <Table.Cell>{x.email}</Table.Cell>
            <Table.Cell>{x.position}</Table.Cell>
            <Table.Cell>{x.description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Container>
  );
};

export default Employees;
