import React from 'react'
import { Button, Form, Dropdown, Message } from 'semantic-ui-react'
import { Formik } from 'formik';
import { RegisterCustomer } from '../../Api'

const CustomersForm = () => {
  return (
    < Formik
      initialValues={{
        name: '',
        cpf: '',
        customer_defaulter: false,
        debtor_value: 0,
        score_id: 1
      }}
      validate={
        values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Campo obrigatório';
          }
          if (!values.cpf) {
            errors.cpf = 'Campo obrigatório';
          }
          if (values.debtor_value < 0) {
            errors.debtor_value = 'Campo obrigatório';
          }
          return errors;
        }
      }
      onSubmit={(
        values,
        { setSubmitting, setErrors, setStatus }
      ) => {
        RegisterCustomer(values).then(
          res => {
            setSubmitting(false);
            setStatus({ success: "Cadastro realizado com sucesso" });
          },
          errors => {
            setSubmitting(false);
            if (errors.hasOwnProperty('description')) {
              setStatus(errors.error);
            }
            else {
              setStatus(errors.message);
            }
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
            onSubmit={handleSubmit}>
            <Form.Field>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="Nome"
              />
            </Form.Field>
            {touched.name && errors.name && <div>{errors.name}</div>}
            <Form.Field>
              <input
                type="number"
                placeholder='Valor do débito'
                name="debtor_value"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.debtor_value}
              />
            </Form.Field>
            {touched.debtor_value && errors.debtor_value && <div>{errors.debtor_value}</div>}
            <Form.Field>
              <input
                type="number"
                placeholder='CPF'
                name="cpf"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.cpf}
              />
            </Form.Field>
            {touched.cpf && errors.cpf && <div>{errors.cpf}</div>}
            <Form.Field>
              <Dropdown
                name="customer_defaulter"
                placeholder='Cliente negativado?'
                fluid
                selection
                options={options}
                value={values.customer_defaulter}
              />
            </Form.Field>
            {touched.customer_defaulter && errors.customer_defaulter && <div>{errors.customer_defaulter}</div>}
            <Form.Field>
              <input
                type="number"
                placeholder='Score'
                name="score_id"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.score_id}
              />
            </Form.Field>
            {touched.score_id && errors.score_id && <div>{errors.score_id}</div>}
            <Button type='submit' disabled={isSubmitting}>Cadastrar</Button>
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
}

const options = [
  {
    text: 'Sim',
    value: true,
  },
  {
    text: 'Não',
    value: false,
  },

]

export default CustomersForm