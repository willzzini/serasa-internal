import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
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
      { setSubmitting, setErrors, setStatus }
    ) => {
      RegisterUser(values).then(
        res => {
          setSubmitting(false);
          setStatus({ success: res.message })
        },
        errors => {
          setSubmitting(false);
          setStatus({ error: errors.message });
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
        <Form
          error={status && status.hasOwnProperty('error')}
          success={status && status.hasOwnProperty('success')}
          onSubmit={handleSubmit}
        >
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
          {(() => {
            if (status && status.hasOwnProperty('error')) {
              return (
                <Message
                  error
                  content={status.error}
                />
              )
            }
            if (status && status.hasOwnProperty('success')) {
              return (
                <Message
                  success
                  content={status.success}
                />
              )
            }
          }
          )()}
        </Form>
      )}
  />
)

export default RegisterForm