import { Form, Formik } from "formik";
import { t } from "i18next";
import React, { FC } from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Lawyer } from "../../../../../application/models/Lawyers";
import SemanyicUiInput from "../../../../../infrastructure/Common/components/form/SemanticUiInput";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";

interface Props {
  handleClose: () => void;
  show: boolean;
  onSubmit: (values: any) => void;
  lawyer:Lawyer;
}

const EmployeesModalForm: FC<Props> = ({ handleClose, show, onSubmit,lawyer }) => {
  return (
    <Modal onClose={handleClose} open={show} centered>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <Formik
            initialValues={{...lawyer}}
            onSubmit={(values) => onSubmit(values)}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form
                className={`ui form`}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <SemanyicUiInput name="name" placeholder={t(labels.name)}/>
                <SemanyicUiInput name="surname" placeholder={t(labels.surname)}/>
                <SemanyicUiInput name="email" placeholder={t(labels.email)}/>
                <SemanyicUiInput name="position" placeholder={t(labels.position)}/>
                <SemanyicUiInput name="description" placeholder={t(labels.description)}/>
                <SemanyicUiInput type="file" name="image" placeholder={t(labels.submit)}/>
                {/* <Button
                  loading={isSubmitting}
                  positive
                  content={t(labels.registerNewAdmin)}
                  type="submit"
                  fluid
                /> */}
              </Form>
            )}
          </Formik>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={handleClose}>
          <Icon name="remove" /> {t(labels.cancel)}
        </Button>
        <Button type="submit" positive onClick={onSubmit}>
          <Icon name="checkmark" /> {t(labels.submit)}
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default EmployeesModalForm;
