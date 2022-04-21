import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {login} from '../redux/actions/action'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const[emailErr ,setEmailErr] = useState({});
  const[passwordErr ,setPasswordErr] = useState({});

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
    // const isValid = formvalidation();
  }

  // const formvalidation =(value) =>{
  //   console.log('111111', value)
  //   const emailErr = {};
  //   const passwordErr = {};
  //   let isValid = true;

  //   if(!value.email){
  //     emailErr.enterEmail="Enter a valid Email";
  //     isValid = false;
  //   }
  //   if(!value.password){
  //     passwordErr.enterPassword="Enter a valid Password";
  //     isValid = false;
  //   }

  //   setEmailErr(emailErr);
  //   setPasswordErr(passwordErr);
  //   return isValid;
  // }

  return (
    <div>
       <div>
            <Link to="/">&laquo;back to Home</Link>
         
        </div>
        <h4> Login here!</h4>
      <Form onSubmit={handleSubmit}>
        
      <label>Email</label>
          <input
            type="email"
            value={email}  
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {Object.keys(emailErr).map((key) =>{
            <div style={{color : "red"}}>{emailErr[key]}</div>
          })} */}
          <br /><br />
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
        <Button type="submit">
          Login
        </Button>
      </Form>
    </div>
  );

}


