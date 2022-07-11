import React, { useEffect, useState } from "react";
import Login from "./Login";

const Details = () => {
  const [logindata, setLoginData] = useState([]);
  const todayDate = new Date().toISOString().slice(0, 10);
  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");

    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);
      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });
      if (userbirth) {
        setTimeout(() => {}, 3000);
      }
    }
  };
  useEffect(() => {
    Birthday();
  }, []);
  return (
    <>
      {logindata.length === 0 ? (
        <Login />
      ) : (
        <>
          <h1>Details Page</h1>
        </>
      )}
    </>
  );
};

export default Details;
