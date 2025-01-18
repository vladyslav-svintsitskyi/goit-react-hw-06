import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import React from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = ({ onAdd }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(3).max(50),
    number: Yup.string().required().min(3).max(50),
  });
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    onAdd({
      id: nanoid(),
      ...values,
    });
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} type="text" name="name" />
            <ErrorMessage name="name" className={s.error} component="div" />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} type="text" name="number" />
            <ErrorMessage name="number" className={s.error} component="div" />
          </label>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
