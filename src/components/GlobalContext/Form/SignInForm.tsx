import React from "react";
import { withFormik, FormikProps, Form } from "formik";
import * as Yup from 'yup';
import FormInput from "../../Form/FormInput";
import Button from "../../Button/Button";
import { BiLockOpen, BiUserPin } from "react-icons/bi";
import styles from './SignInForm.module.scss';
import { Link } from "react-router-dom";

export interface FormProps {
  onSubmit: Function
}

export interface FormValues {
  email: string,
  password: string
}

const InnerForm = (props: FormProps & FormikProps<FormValues>) => {
  return (
    <Form onSubmit={props.handleSubmit}>
      <div className={styles.body}>
        <FormInput
          prependIcon={<BiUserPin />}
          name="email"
          placeholder="Email"
          formik={props}
        />
        <FormInput
          prependIcon={<BiLockOpen />}
          name="password"
          type="password"
          placeholder="Password"
          formik={props}
        />
      </div>
      <div className={styles.linkContainer}>
        <Link className={styles.link} to="/forgot-password">
          Forgot Password?
        </Link>
        <Link className={styles.link} to="/signup">
          Dont have account?
        </Link>
      </div>
      <Button
        fullWidth
        color="primary"
        id="btnSubmit"
        type="submit"
      >Sign In</Button>
    </Form>
  );
};


const SignInSchema = Yup.object().shape({
  email: Yup.string().required('E-Mail is required'),
  password: Yup.string().required('Password is required'),
});

const SignInForm = withFormik<FormProps, FormValues>({
  enableReinitialize: true,
  mapPropsToValues: (_) => {
    return {
      email: "",
      password: ""
    };
  },
  validationSchema: SignInSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },
})(InnerForm);

export default SignInForm;
