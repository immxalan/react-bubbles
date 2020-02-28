import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { axiosAuth } from "./utils/axiosAuth";
const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: ""
})
const handleChange = (e) => {
  setLogin({
      ...login,
      [e.target.name]: e.target.value})
//we use a spread operator for login so it only captures the last input as opposed to all of it
}
const history = useHistory()
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosAuth()
        .post("login", login)
        .then(res => {
            console.log(res);
            window.localStorage.setItem("token", res.data.payload)
            history.push("/bubblepage")
            //6.5. props.history.push("/creatures") - if you don't set up a useHistory hook use this instead
        })
        .catch(err => 
            console.log("There was an error", err.response))}
        //5.5 .post accepts 2 argument - the URL + the state
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
            <h1>Welcome to the Safari App!</h1>
            <form className="forms-style" onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <input type="text"
                            name="username"
                            label="username"
                            value={login.username}
                            onChange={handleChange}
                            className="input"/>
                            </label>
                <label htmlFor="password">
                    <input type="text"
                            name="password"
                            label="password"
                            value={login.password}
                            onChange={handleChange}
                            className="input"/>
                            </label>
            <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    </>
  );
};

export default Login;
