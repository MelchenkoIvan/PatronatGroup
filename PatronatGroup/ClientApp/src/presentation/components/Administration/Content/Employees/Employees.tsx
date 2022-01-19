import { t } from "i18next";
import React,{ FC, useEffect } from "react";
import { Button, Container, Icon, Table } from "semantic-ui-react";
import { Lawyer } from "../../../../../application/models/Lawyers";
import Sc from "../../../../../application/models/Sc";
import TablePaginationg from "../../../../../infrastructure/Common/components/TablePaginationg";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";

interface SR {
  totalCount: number,
  currentPageNumber: number,
  items: Array<Lawyer>;
}
interface PropsType {
  lawyers: SR,
  onGetPage: (sc:Sc) => void;
}

const Employees: FC<PropsType> = (props) => {
  useEffect(() => {
    props.onGetPage({rowsOnPage:1, pageNumber:1}as Sc);
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
        {props.lawyers.items.map((x) => (
          <Table.Row key={x.id}>
            <Table.Cell>{x.fullName}</Table.Cell>
            <Table.Cell>{x.email}</Table.Cell>
            <Table.Cell>{x.position}</Table.Cell>
            <Table.Cell>{x.description}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                primary
                size="small"
              >
                <Icon name="user" /> Add User
              </Button>
             <TablePaginationg onCnahge={props.onGetPage} totalCount={props.lawyers.totalCount} currentPageNumber={props.lawyers.currentPageNumber}/>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
    </Table>
  </Container>
  );
};

export default Employees;
