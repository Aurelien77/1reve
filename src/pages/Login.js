import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

import logo from "../logos/favicon.jpg";
function Login() {
  const [username, setUsername] = useState("");
  /* const [email, setemail] = useState(""); */
  const [password, setPassword] = useState("");

  const { setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { username: username, /* email: email, */ password: password };
    axios
      .post("https://reves7.herokuapp.com/auth/login", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data.token);
          setAuthState({
            username: response.data.username,
            /*   email: response.data.email, */
            photo_profil: response.data.photo_profil,
            id: response.data.id,
            admin: response.data.admin, //tous ce qui est dans réponse concernant admin
            prof: response.data.prof,
            status: true,
          });
          history.push(`/postpriv2/${response.data.id}`);
        }
      });
  };

  return (
    <div className="background">
      <div className="loginContainer">
        <img className="fond" src={logo} alt="Logo" />

        {/*    <label>Email:</label> */}
        <input
          placeholder="Pseudo"
          type="text"
          onChange={(event) => {
            /*    setemail(event.target.value); */
            setUsername(event.target.value);
          }}
        />

        {/*   <input
          type="hidden"
          value="Mon Profil"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        /> */}

        <input
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button className="boutlog" onClick={login}>
          {" "}
          Login{" "}
        </button>
      </div>
    </div>
  );
}

export default Login;
