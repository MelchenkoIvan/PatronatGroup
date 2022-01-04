import { Field, Form, Formik, FormikHelpers } from "formik";
import { t } from "i18next";
import React, { FC } from "react";
import Button from "../../../../infrastructure/Common/components/Button";
import MyTextArea from "../../../../infrastructure/Common/components/form/MyTextArea";
import MyTextInput from "../../../../infrastructure/Common/components/form/MyTextInput";
import Underline from "../../../../infrastructure/Common/components/Underline";
import { labels } from "../../../../infrastructure/Common/i18n/translationsServices";
import ToContactUs from "../../../../application/models/ToContactUs";
import * as Yup from "yup";
//style
import style from "./ContactModal.module.css";

//img
import closeImg from "../../../../assets/close.png";
interface Props {
  handleClose: () => void;
  show: boolean;
  onSubmit: (values:ToContactUs) => void
}

const ContactModal: FC<Props> = ({ handleClose, show, onSubmit}) => {
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object({
    fullName:Yup.string().required('Name is required'),
    email:Yup.string().email("Invalid email format").required('Email is required'),
    phoneNumber:Yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not correct !'),
    description:Yup.string().required('Description is required').max(240, "Max 240 characters"),
  });


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
            initialValues={{fullName: "",email:"",phoneNumber:"",description:""} as ToContactUs}
            onSubmit={(values:ToContactUs) => onSubmit(values)}
          >
            {({ handleSubmit, isValid, isSubmitting, dirty }) => (
              <Form onSubmit={handleSubmit}>
                <MyTextInput name="fullName" placeholder={`${t(labels.name)} ${t(labels.requiredField)}`} />
                <MyTextInput name="email" placeholder={`${t(labels.email)} ${t(labels.requiredField)}`} />
                <MyTextInput name="phoneNumber" placeholder={`${t(labels.phonenumber)} ${t(labels.requiredField)}`} />
                <MyTextArea
                  rows={3}
                  placeholder={`${t(labels.description)} ${t(labels.requiredField)}`}
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
