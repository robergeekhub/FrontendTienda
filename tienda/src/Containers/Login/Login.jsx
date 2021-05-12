import React, {Component} from 'react';
import '../Login/Login.scss';
import {useHistory} from 'react-router';
import axios from 'axios';

const Login = ({setClient}) => {
    const history = useHistory();
    const handleSubmit = event =>{
      event.preventDefault();
      const client ={
          email:event.target.email.value,
          password:event.target.password.value
      };
      console.log(client)
      axios.post('http://localhost:3000/api/login', client)
      .then(res=>{
          console.log('axios done')
          localStorage.setItem('authToken',res.data.token);
          localStorage.setItem('client',JSON.stringify(res.data))
          
          setTimeout(() => {
              history.push('/products')
          }, 1000);
      })
      .catch(error=> {throw (error)})
  }
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                    <div className="form-group">
                        <label>Usuario: </label>
                        <br/>
                        <input type="text" className="form-control"
                        name="username"
                        onChange={this.handleChange}/>
                        <br/>
                        <label>Contraseña: </label>
                        <br/>
                        <input type="password" className="form-control"
                        name="password"
                        onChange={this.handleChange}/>
                        <br/>
                        <button className="btn btn-primary" >Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        );
    }


export default Login;