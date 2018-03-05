import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { Formik } from 'formik';
import { RegisterUser } from '../../Api'

const RegisterForm = () => (

  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validate={values => {
      let errors = {};
      if (!values.username) {
        errors.username = 'Campo obrigatório';
      }
      if (!values.password) {
        errors.password = 'Campo obrigatório';
      }
      return errors;
    }}
    onSubmit={(
      values,
      { setSubmitting, setErrors }
    ) => {
      RegisterUser(values).then(
        res => {
          setSubmitting(false);
          localStorage.setItem('isAuthenticated', true)
        },
        errors => {
          setSubmitting(false);
          // Maybe transform your API's errors into the same shape as Formik's
          setErrors(errors);
        }
      );
    }}
    render={({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Form.Field>
          {touched.username && errors.username && <div>{errors.username}</div>}
          <Form.Field>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Form.Field>
          {touched.password && errors.password && <div>{errors.password}</div>}
          <Button type='submit' disabled={isSubmitting}>Register</Button>
        </Form>
      )}
  />
  // <Form>
  //   <Form.Field>
  //     <input placeholder='Username' />
  //   </Form.Field>
  //   <Form.Field>
  //     <input type="password" placeholder='Password' />
  //   </Form.Field>
  //   <Button type='submit'>Login</Button>
  //   <Button type='submit'>Register</Button>
  // </Form>
)

export default RegisterForm