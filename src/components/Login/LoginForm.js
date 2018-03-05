import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { Formik } from 'formik';
import { RegisterUser } from '../../Api'

const LoginForm = () => (

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
      { setSubmitting, setErrors, setStatus }
    ) => {
      RegisterUser(values).then(
        res => {
          setSubmitting(false);
          sessionStorage.setItem('isAuthenticated', true)

        },
        errors => {
          setSubmitting(false);
          // Maybe transform your API's errors into the same shape as Formik's
          setStatus(errors.message);
        }
      );
    }}
    render={({
      values,
      errors,
      status,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
        <Form error={status} onSubmit={handleSubmit}>
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
          <Button type='submit' disabled={isSubmitting}>Login</Button>
          {status &&
            <Message
              error
              content={status}
            />
          }
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

export default LoginForm