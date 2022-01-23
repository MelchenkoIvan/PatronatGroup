import { Field, Form, Formik } from "formik";
import { t } from "i18next";
import React, { FC, useState } from "react";
import { Button, Container, Header, Icon, Modal } from "semantic-ui-react";
import { Lawyer } from "../../../../../application/models/Lawyers";
import SemanyicUiInput from "../../../../../infrastructure/Common/components/form/SemanticUiInput";
import { labels } from "../../../../../infrastructure/Common/i18n/translationsServices";
import * as Yup from "yup";
export interface initialFormType{
  id: number,
  name:string,
  surname:string,
  description:string,
  position:string,
  email:string,
  image:any,
}
interface Props {
  handleClose: () => void;
  show: boolean;
  onSubmit: (values: Lawyer) => void;
  initialValues:initialFormType;
  title:String 
}
const EmployeesModalForm: FC<Props> = ({ handleClose, show, onSubmit,initialValues,title }) => {
  const [image, setImage] = useState<File>();
  const validationSchema = Yup.object({
    name:Yup.string().required(t(labels.nameRequired)),
    surname:Yup.string().required(t(labels.nameRequired)),
    email:Yup.string().email(t(labels.invalidEmail)).required(t(labels.emailRequired)),
    position:Yup.string().required(t(labels.nameRequired)),
    //image:Yup.d().required(t(labels.nameRequired)),
    description:Yup.string().required(t(labels.descriptionRequired)).max(4000, t(labels.maxCharacters)),
  });

  return (
    <Modal onClose={handleClose} open={show} centered>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values) => onSubmit({...values,image:image})}
          >
            {({ handleSubmit, isSubmitting,setFieldValue }) => (
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
                <SemanyicUiInput id="image" type="file" name="image" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setImage(e.target.files![0])} } placeholder={t(labels.submit)}/>
                <Container textAlign="right">
                  <Button color="black" type="button" onClick={handleClose}>
                    <Icon name="remove" /> {t(labels.cancel)}
                  </Button>
                  <Button type="submit" positive >
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

export default EmployeesModalForm;
