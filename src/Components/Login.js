import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import SignImg from "./SignImg";

const Login = () => {
  const history = useNavigate();

  const [inpvalue, setInpValue] = useState({
    email: "",
    password: "",
  });
  const [data, setData] = useState([]);

  const getdata = (e) => {
    const { value, name } = e.target;
    setInpValue(() => {
      return {
        ...inpvalue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userscreate");
    console.log(getuserArr);

    const { email, password } = inpvalue;
    if (email === "") {
      alert("email field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length must be greater than 5");
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, indx) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalud details");
        } else {
          localStorage.setItem("user_login", JSON.stringify(userlogin));
          history("/details");
        }
      }
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  placeholder="Enter Your Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={getdata}
                  name="password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="col-lg-6"
                onClick={addData}
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an account? <span> Sign In </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Login;
