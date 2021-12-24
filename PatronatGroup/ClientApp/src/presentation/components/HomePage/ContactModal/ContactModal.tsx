import { Field, Form, Formik, FormikHelpers } from "formik";
import { t } from "i18next";
import React, { FC } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import MyTextArea from "../../../../infrastructure/Common/components/form/MyTextArea";
import MyTextInput from "../../../../infrastructure/Common/components/form/MyTextInput";
import Underline from "../../../../infrastructure/Common/components/Underline";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import * as Yup from "yup";
//style
import style from "./ContactModal.module.css";

//img
import closeImg from "../../../../assets/close.png";
interface Props {
  handleClose: () => void;
  show: boolean;
}
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
const validationSchema = Yup.object({
});

const handleFormSubmit = (values: any) => {
  console.log(values);
};
const ContactModal: FC<Props> = ({ handleClose, show }) => {
  const showHideClassName = show
    ? `${style.modal} ${style.displayBlock}`
    : `${style.modal} ${style.displayNone}`;

  return (
    <div className={showHideClassName}>
      <section className={style.modalMain}>
        <button className={style.closeButton} onClick={handleClose}>
          <img src={closeImg} alt="close"/>
        </button>
        <div className={style.titileContainer}>
          <div className={style.titile}>
            {t(labels.toContactUs)}
            <Underline />
          </div>
        </div>
        <div className={style.form}>
          <Formik
            validationSchema={validationSchema}
            enableReinitialize
            initialValues={{}}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <MyTextInput name="name" placeholder={`${t(labels.name)} ${t(labels.requiredField)}`} />
                <MyTextInput name="email" placeholder={`${t(labels.email)} ${t(labels.requiredField)}`} />
                <MyTextInput name="phonenumber" placeholder={`${t(labels.phonenumber)} ${t(labels.requiredField)}`} />
                <MyTextArea
                  rows={3}
                  placeholder={t(labels.description)}
                  name="description"
                />
                  <Button style={{width:"40%",marginTop:"20px"}} type="submit" content={t(labels.send)} />
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default ContactModal;
