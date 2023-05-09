import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { signupData } from "../services/actions/Action";
// import "../App.css"

const Signup = () => {
  const history = useNavigate()
 const dispatch = useDispatch()
 const result = useSelector((state) => state.SignUpData.signUpData);
  const [error1, seterror1] = useState("");
  const [error2, seterror2] = useState("");
  const [error3, seterror3] = useState("");
  const [error4, seterror4] = useState("");

  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;

    setData( {...data,
        [name]: value,
      }
    );
  };

  const submit = (e) => {
    e.preventDefault();
    const { name, email, password, password2 } = data;
    //  eslint-disable-next-line
    let regs = /^([a-zA-Z0-9\.-]+)@([a-zA-Z\-]+).([a-z]{2,4})(.[a-z]{2,4})?$/;
    if (name === "") {
      seterror1("*Please enter your name");
      ref1.current.focus();
      return false;
    } else if (email === "") {
      seterror1("");
      seterror2("*Please enter your email");
      ref2.current.focus();
      return false;
    }
    if (regs.test(email)) {
    } else {
      seterror2("*Please enter a valid mail");
      ref2.current.focus();
      return false;
    }
    if (password === "") {
      seterror2("");
      seterror3("*Please enter your password");
      ref3.current.focus();
    } else if (password.length < 4) {
      seterror3("*Password must be greter than 4 digits");
      ref3.current.focus();
      return false;
    } else if (password2 === "") {
      seterror3("");
      seterror4("*Please confirm your password");
      ref4.current.focus();
    } else if (password !== password2) {
      seterror4("*Password not matched");
      ref4.current.focus();  
    } 
    else if(result){
       if(result.some((e)=> e.email === data.email)){
         alert('You already have an account')
         seterror3('')
         seterror4('')
         return false
       }
       else {
         seterror4("");
         alert("Data added");
         history("/");
         dispatch(signupData(data))     
       }
    }
  };
  return (
    <div className="container py-5 px-4  border mt-5 col-lg-4 col-11 col-md-6 bg-light">
      <Form >
        <h3 className="text-center mb-4">Registration form</h3>
        <Form.Group className="mb-4" controlId="text">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={getData}
            ref={ref1}
          />
          <span>{error1}</span>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email adress"
            onChange={getData}
            ref={ref2}
          />
          <span>{error2}</span>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword1">
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={getData}
            ref={ref3}
          />
          <span>{error3}</span>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicPassword2">
          <Form.Control
            type="password"
            placeholder="Confirm password"
            name="password2"
            onChange={getData}
            ref={ref4}
          />
          <span>{error4}</span>
        </Form.Group>
        <Button
          variant="primary"
          onClick={submit}
          type="submit"
          className="col-12"
        >
          Signup Now
        </Button>
        <h6 className=" mt-4 text-center">
          Already have an account? <Link to="/">Login</Link>
        </h6>
      </Form>
    </div>
  );
};

export default Signup;
