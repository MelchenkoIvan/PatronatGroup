import { t } from "i18next";
import React, { FC, useEffect, useState } from "react";
import { Button, Container, Icon, Table } from "semantic-ui-react";
import { Lawyer } from "../../../../../application/models/Lawyers";
import Sc from "../../../../../application/models/Sc";
import AreYouSureModal from "../../../../../infrastructure/Common/components/modal/AreYouSureModal";
import TablePaginationg from "../../../../../infrastructure/Common/components/TablePaginationg";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";

interface SR {
  defaultRowsOnPage: number;
  totalCount: number;
  currentPageNumber: number;
  items: Array<Lawyer>;
}
interface PropsType {
  lawyers: SR;
  onGetPage: (sc: Sc) => void;
  onRowDelete: (rowId: number) => void;
}

const Employees: FC<PropsType> = (props) => {
  const onGetPage = () => {
    props.onGetPage({
      rowsOnPage: props.lawyers.defaultRowsOnPage,
      pageNumber:
        props.lawyers.currentPageNumber == 0
          ? 1
          : props.lawyers.currentPageNumber,
    } as Sc);
  };
  useEffect(() => {
    onGetPage();
  }, [props.onGetPage]);

  const [show, setShow] = useState<boolean>(false);
  const [rowId, setRowId] = useState<number | null>(null);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const onRowDelete = () => {
    if (rowId != null) {
      console.log(rowId)
      props.onRowDelete(rowId!);
      onGetPage();
      hideModal();
    }
  };
  const onRowEdit = (item: Lawyer) => {};

  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Table sortable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{t(labels.actions)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.name)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.email)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.position)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.description)}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.lawyers.items.map((x) => (
              <Table.Row key={x.id}>
                <Table.Cell collapsing textAlign="center">
                  <Icon
                    name="edit"
                    size="large"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      onRowEdit(x);
                    }}
                  />
                  <Icon
                    name="delete"
                    size="large"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      showModal();
                      setRowId(x.id);
                    }}
                  />
                </Table.Cell>
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
                <TablePaginationg
                  onCnahge={props.onGetPage}
                  rowsOnPage={props.lawyers.defaultRowsOnPage}
                  totalCount={props.lawyers.totalCount}
                  currentPageNumber={props.lawyers.currentPageNumber}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      <AreYouSureModal
        onSubmit={onRowDelete}
        handleClose={hideModal}
        show={show}
        content={t(labels.thisEmployeeDeleted)}
      ></AreYouSureModal>
    </div>
  );
};

export default Employees;
