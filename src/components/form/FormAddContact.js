import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object({
//   email: Yup.string().name('Invalid email address').required('Required'),
//   password: Yup.string()
//     .min(6, 'Минимум 6 символов')
//     .max(20, 'Максимум 20 символов')
//     .required('Обязательное поле'),
// });

function FormAddContact({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: '' }}
      //   validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(onSubmit);
        setSubmitting(false);
      }}
    >
      <Form onSubmit={() => onSubmit()} autoComplete="off">
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormAddContact;
