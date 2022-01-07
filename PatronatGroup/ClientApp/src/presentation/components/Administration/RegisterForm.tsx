import React from "react";
import { Formik } from "formik";
import { FC } from "react";
import { Button, Container, Form, Header} from "semantic-ui-react";
import {Login} from "../../../application/models/User";
import MyTextInput from "../../../infrastructure/Common/components/form/MyTextInput";
import { t } from "i18next";
import { labels } from "../../../infrastructure/Common/i18n/translationsServices";
//style
import style from "./Login.module.css";

interface PropsType {
  register: (user: Login) => Promise<void>;
}

const RegisterForm: FC<PropsType> = (props) => {
  return (
    <Container className={style.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => props.register(values)}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            className={`ui form ${style.form}`}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Header
              as="h2"
              content={t(labels.registerNewAdmin)}
              color="teal"
              textAlign="center"
            />
            <MyTextInput name="email" placeholder={t(labels.email)} />
            <div style={{ margin: "5px 0" }}>
              <MyTextInput
                name="password"
                placeholder={t(labels.password)}
              />
            </div>
            <Button
              loading={isSubmitting}
              positive
              content={t(labels.registerNewAdmin)}
              type="submit"
              fluid
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default RegisterForm;
