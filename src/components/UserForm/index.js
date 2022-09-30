import React from "react";
import { Formik, Form, Field } from "formik";
const UserForm = () => {
  return (
    <div>
      User Form:
      <hr />
      <Formik>
        <Form>
          <Field />
        </Form>
      </Formik>
    </div>
  );
};

export default UserForm;
