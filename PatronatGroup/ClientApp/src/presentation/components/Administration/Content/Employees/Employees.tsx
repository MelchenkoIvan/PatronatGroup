import { t } from "i18next";
import React, { FC, useEffect, useState } from "react";
import { Button, Container, Icon, Table } from "semantic-ui-react";
import { string } from "yup/lib/locale";
import { Lawyer } from "../../../../../application/models/Lawyers";
import Sc from "../../../../../application/models/Sc";
import AreYouSureModal from "../../../../../infrastructure/Common/components/modal/AreYouSureModal";
import TablePaginationg from "../../../../../infrastructure/Common/components/TablePaginationg";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";
import EmployeesModalForm from "./EmployeesModalForm";

interface SR {
  defaultRowsOnPage: number;
  totalCount: number;
  currentPageNumber: number;
  items: Array<Lawyer>;
}
interface PropsType {
  lawyers: SR;
  onGetPage: (sc: Sc) => void;
  onRowDelete: (rowId: number) => Promise<void>;
  onRowEdit: (value: Lawyer) => Promise<void>;
  onRowCreate: (value: Lawyer) => Promise<void>;
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

  const [isShowDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [rowId, setRowId] = useState<number | null>(null);

  const showDeleteModal = () => {
    setShowDeleteModal(true);
  };
  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };
  const onRowDelete = async () => {
    if (rowId != null) {
     await props.onRowDelete(rowId!).then(onGetPage);
      hideDeleteModal();
    }
  };

  const [isShowEmployessModalForm, setShowEmployessModalForm] =
    useState<boolean>(false);
  const [lawyer, setLawyer] = useState<Lawyer>();
  const [isCreate, setCreate] = useState<boolean>();
  const showEmployessModalForm = () => {
    setShowEmployessModalForm(true);
  };
  const hideEmployessModalForm = () => {
    setShowEmployessModalForm(false);
  };
  const onRowEdit = async (value:Lawyer) => {
    await props.onRowEdit(value).then(onGetPage);
    hideEmployessModalForm();
  }
  const onRowCreate = async (value:Lawyer) => {
    await props.onRowCreate(value).then(onGetPage);
    hideEmployessModalForm()
  }
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
                      setCreate(false);
                      showEmployessModalForm();
                      setLawyer(x);
                    }}
                  />
                  <Icon
                    name="delete"
                    size="large"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      showDeleteModal();
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
                  onClick={() => {
                    setCreate(true);
                    showEmployessModalForm();
                  }}
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> {t(labels.addLawyer)}
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
      {isCreate ? (
        <EmployeesModalForm
          onSubmit={onRowCreate}
          handleClose={hideEmployessModalForm}
          show={isShowEmployessModalForm}
          initialValues={{
            id:0,
            name: "",
            surname: "",
            descriptionUA: "",
            descriptionEN: "",
            position: "",
            email: "",
            image: "",
          }}
          title={t(labels.addLawyer)}
        ></EmployeesModalForm>
      ) : (
        <EmployeesModalForm
          onSubmit={onRowEdit}
          handleClose={hideEmployessModalForm}
          show={isShowEmployessModalForm}
          initialValues={{...lawyer!,image:""}}
          title={t(labels.updateLawyer)}
        ></EmployeesModalForm>
      )}
      <AreYouSureModal
        onSubmit={onRowDelete}
        handleClose={hideDeleteModal}
        show={isShowDeleteModal}
        content={t(labels.thisEmployeeDeleted)}
      ></AreYouSureModal>
    </div>
  );
};

export default Employees;
