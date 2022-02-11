import { t } from "i18next";
import React, { FC, useEffect, useRef, useState } from "react";
import { Button, Checkbox, Container, Icon, Table } from "semantic-ui-react";
import Client from "../../../../../application/models/Client";
import Sc from "../../../../../application/models/Sc";
import AreYouSureModal from "../../../../../infrastructure/Common/components/modal/AreYouSureModal";
import SimpleSearch from "../../../../../infrastructure/Common/components/SimpleSearch";
import TablePaginationg from "../../../../../infrastructure/Common/components/TablePaginationg";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";

interface SR {
  defaultRowsOnPage: number;
  totalCount: number;
  currentPageNumber: number;
  items: Array<Client>;
  simpleSearch: {
    isSearching: boolean;
    searchingValue: string;
  };
}
interface PropsType {
  clients: SR;
  onGetPage: (sc: Sc) => void;
  onSearch: (sc: Sc) => void;
  onRowDelete: (rowId: number) => Promise<void>;
}

const Clients: FC<PropsType> = (props) => {
  const onGetPage = () => {
    props.onGetPage({
      rowsOnPage: props.clients.defaultRowsOnPage,
      pageNumber:
        props.clients.currentPageNumber == 0
          ? 1
          : props.clients.currentPageNumber,
      search:
        props.clients.simpleSearch.searchingValue == ""
          ? undefined
          : props.clients.simpleSearch.searchingValue,
    } as Sc);
  };
  useEffect(() => {
    onGetPage();
  }, [props.onGetPage]);

  const onSearch = (value: string) => {
    props.onSearch({
      rowsOnPage: props.clients.defaultRowsOnPage,
      pageNumber: props.clients.currentPageNumber,
      search: value,
    } as Sc);
  };
 
  const [show, setShow] = useState<boolean>(false);
  const [rowId, setRowId] = useState<number | null>(null);

  const showModal = () => {
    setShow(true);
  };
  const hideModal = () => {
    setShow(false);
  };
  const onRowDelete = async () => {
    if(rowId != null){
      await props.onRowDelete(rowId!).then(onGetPage); 
      hideModal();
    }
  };
  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Table sortable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{t(labels.delete)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.name)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.email)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.phonenumber)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.description)}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.clients.items.map((x) => (
              <Table.Row key={x.id}>
                <Table.Cell collapsing textAlign="center">
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
                <Table.Cell collapsing>{x.phoneNumber}</Table.Cell>
                <Table.Cell>{x.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />

              <Table.HeaderCell colSpan="4">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <TablePaginationg
                    onCnahge={props.onGetPage}
                    rowsOnPage={props.clients.defaultRowsOnPage}
                    totalCount={props.clients.totalCount}
                    currentPageNumber={props.clients.currentPageNumber}
                  />
                  <SimpleSearch
                    loading={props.clients.simpleSearch.isSearching}
                    searchingValue={props.clients.simpleSearch.searchingValue}
                    onSearch={onSearch}
                  />
                </div>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
      <AreYouSureModal
        onSubmit={onRowDelete}
        handleClose={hideModal}
        show={show}
        content={t(labels.thisRequestDeleted)}
      ></AreYouSureModal>
    </div>
  );
};

export default Clients;
