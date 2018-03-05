import React from 'react'
import { Button, Form, Dropdown } from 'semantic-ui-react'

const CustomersForm = () => (
  <Form>
    <Form.Field>
    <input type="text" placeholder='nome' name="name"/>
    </Form.Field>
    <Form.Field>
      <input type="number" placeholder='Valor do débito' name="debtor_value"/>
    </Form.Field>
    <Form.Field>
      <Dropdown placeholder='Cliente negativado?' fluid selection options={options} />
    </Form.Field>
    <Form.Field>
      <input type="number" placeholder='Score' name="score_id"/>
    </Form.Field>
    <Button type='submit'>Register</Button>
  </Form>
)

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