import { Form, Formik } from "formik";
import { t } from "i18next";
import React, { FC } from "react";
import { Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import SemanyicUiInput from "../../../../../infrastructure/Common/components/form/SemanticUiInput";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";
import * as Yup from "yup";
import { Login } from "../../../../../application/models/User";
interface Props {
  handleClose: () => void;
  show: boolean;
  onSubmit: (values: Login) => void;
  title: String;
}
const AdminsModalForm: FC<Props> = ({ handleClose, show, onSubmit, title }) => {
  const validationSchema = Yup.object({
    email: Yup.string().required(t(labels.emailRequired)),
    password: Yup.string().required(t(labels.password)),
  });

  return (
    <Modal onClose={handleClose} open={show} centered>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => onSubmit(values)}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form
                className={`ui form`}
                onSubmit={handleSubmit}
                autoComplete="off"
              >
                <SemanyicUiInput name="email" placeholder={t(labels.email)} />

                <SemanyicUiInput
                  name="password"
                  placeholder={t(labels.password)}
                />

                <Container textAlign="right">
                  <Button color="black" type="button" onClick={handleClose}>
                    <Icon name="remove" /> {t(labels.cancel)}
                  </Button>
                  <Button type="submit" positive>
                    <Icon name="checkmark" /> {t(labels.submit)}
                  </Button>
                </Container>
              </Form>
            )}
          </Formik>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AdminsModalForm;
