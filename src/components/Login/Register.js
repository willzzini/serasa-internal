import React from 'react'
import RegisterForm from './RegisterForm'
import { Link } from "react-router-dom";

const Register = () => (
  <div>
    <h2>Faça o registro</h2>
    <RegisterForm/>
    <h4>Já tem cadastro, faça o <Link to="/login">login</Link></h4>
  </div>
)

export default Register