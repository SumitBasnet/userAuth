import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import SignImg from "./SignImg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [inpvalue, setInpValue] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, email, date, password } = inpvalue;
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
      alert("password field is required");
    } else if (password.length < 5) {
      alert("password length must be greater than 5");
    } else {
      localStorage.setItem("userscreate", JSON.stringify([...data, inpvalue]));
    }
  };
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={getdata}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  placeholder="Enter Your Email"
                  name="email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" onChange={getdata} name="date" />
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
              Already Have an account?{" "}
              <span>
                {" "}
                <NavLink to="/login"> Sign In </NavLink>{" "}
              </span>
            </p>
          </div>
          <SignImg />
        </section>
      </div>
    </>
  );
};

export default Home;
