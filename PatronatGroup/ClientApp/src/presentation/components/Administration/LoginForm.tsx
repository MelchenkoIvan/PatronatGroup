import React from "react";
import { Formik } from "formik";
import { FC } from "react";
import { Button, Container, Form, Header} from "semantic-ui-react";
import User from "../../../application/models/User";
import MyTextInput from "../../../infrastructure/Common/components/form/MyTextInput";

//style
import style from "./Login.module.css";
interface PropsType {
  login: (user: User) => Promise<void>;
}

const LogiForm: FC<PropsType> = (props) => {
  return (
    <Container className={style.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => props.login(values)}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form
            className={`ui form ${style.form}`}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Header
              as="h2"
              content="Login as Admin"
              color="teal"
              textAlign="center"
            />
            <MyTextInput name="email" placeholder="Email" />
            <div style={{ margin: "5px 0" }}>
              <MyTextInput
                name="password"
                placeholder="Password"
                type="password"
              />
            </div>
            <Button
              loading={isSubmitting}
              positive
              content="Login"
              type="submit"
              fluid
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LogiForm;
