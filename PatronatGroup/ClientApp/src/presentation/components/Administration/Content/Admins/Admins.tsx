import { t } from "i18next";
import React, { FC, useEffect, useState } from "react";
import { Button, Container, Icon, Table } from "semantic-ui-react";
import Sc from "../../../../../application/models/Sc";
import { Login, User } from "../../../../../application/models/User";
import AreYouSureModal from "../../../../../infrastructure/Common/components/modal/AreYouSureModal";
import TablePaginationg from "../../../../../infrastructure/Common/components/TablePaginationg";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";
import AdminsModalForm from "./AdminsModalForm";

interface SR {
  defaultRowsOnPage: number;
  totalCount: number;
  currentPageNumber: number;
  items: Array<User>;
}
interface PropsType {
  admins: SR;
  onGetPage: (sc: Sc) => void;
  onRowDelete: (login: string) => Promise<void>;
  register: (value: Login) => Promise<void>;
}

const Admins: FC<PropsType> = (props) => {
  const onGetPage = () => {
    props.onGetPage({
      rowsOnPage: props.admins.defaultRowsOnPage,
      pageNumber:
        props.admins.currentPageNumber == 0
          ? 1
          : props.admins.currentPageNumber,
    } as Sc);
  };
  useEffect(() => {
    onGetPage();
  }, [props.onGetPage]);

  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [login, setLogin] = useState<string>();
 

  const showModal = () => {
    setShowModal(true);
  };
  const hideModal = () => {
    setShowModal(false);
  };
  const onRowDelete = () => {
    if (login != null) {
      props.onRowDelete(login!).then(onGetPage);
      hideModal();
    }
  };

  const [isAddModalForm, addModalForm] =
    useState<boolean>(false);
  const showAddModalForm = () => {
    addModalForm(true);
  };
  const hideAddModalForm = () => {
    addModalForm(false);
  };
  const registerAdmin = async (value:Login) => {
    await props.register(value).then(onGetPage);
    hideAddModalForm();
  }

  return (
    <div>
      <Container style={{ marginTop: "2%" }}>
        <Table sortable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>{t(labels.actions)}</Table.HeaderCell>
              <Table.HeaderCell>{t(labels.email)}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {props.admins.items.map((x,i) => (
              <Table.Row key={i}>
                <Table.Cell collapsing textAlign="center">
                  <Icon
                    name="delete"
                    size="large"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      showModal();
                      setLogin(x.email);
                    }}
                  />
                </Table.Cell>
                <Table.Cell>{x.email}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  onClick={() => {
                    showAddModalForm();
                  }}
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> {t(labels.registerNewAdmin)}
                </Button>
                <TablePaginationg
                  onCnahge={props.onGetPage}
                  rowsOnPage={props.admins.defaultRowsOnPage}
                  totalCount={props.admins.totalCount}
                  currentPageNumber={props.admins.currentPageNumber}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <AdminsModalForm
        onSubmit={registerAdmin}
        handleClose={hideAddModalForm}
        show={isAddModalForm}
        title={t(labels.registerNewAdmin)}
      ></AdminsModalForm>

      <AreYouSureModal
        onSubmit={onRowDelete}
        handleClose={hideModal}
        show={isShowModal}
        content={t(labels.thisEmployeeDeleted)}
      ></AreYouSureModal>
    </div>
  );
};

export default Admins;
