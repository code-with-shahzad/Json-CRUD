import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import Api from './Api'

const Login = () => {
  const history = useNavigate();
  const result = useSelector((state) => state.SignUpData.signUpData);

  const [error, setError] = useState("");
  const [error2, setError2] = useState("");
  let ref1 = useRef();
  let ref2 = useRef();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const LoginSuccesfully = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "") {
      setError("*Please enter your email");
      ref1.current.focus();
      return false;
    }
    setError("");
    if (password === "") {
      setError2("*Please enter your password");
      ref2.current.focus();
      return false;
    }
    setError2("");

    let myResult = false;
    result.forEach((e)=>{
      if (e.email === data.email && e.password === data.password) {
         myResult = true;
       }
    })
    if(myResult){
      alert("Login Successfully")
       history("./details");
    }else{
      alert("User not exist")
    }
    
  };
  return (
    <div className="container py-5 px-4  border col-lg-4 col-11 col-md-6 bg-light">
      {/* <Api/> */}
      <Form>
        <h3 className="text-center mb-4">Login</h3>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={getData}
            ref={ref1}
          />
          <span style={{ color: "red" }}>{error}</span>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={getData}
            ref={ref2}
          />
          <span style={{ color: "red" }}>{error2}</span>
        </Form.Group>
        <a href="/">Forgot password?</a>
        <Button
          variant="primary"
          onClick={LoginSuccesfully}
          type="submit"
          className="col-12 mb-4 mt-4 "
        >
          Login Now
        </Button>
        <h6 className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Signup</Link>
        </h6>
      </Form>
    </div>
  );
};

export default Login;
