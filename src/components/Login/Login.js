import React from 'react'
import LoginForm from './LoginForm'
import { Link } from "react-router-dom";



const Login = () => (
  <div>
    <h2>Faça o login</h2>
    <LoginForm/>
    <h4>Ainda não tem cadastro, <Link to="/register">registre-se</Link></h4>
  </div>
)

export default Login