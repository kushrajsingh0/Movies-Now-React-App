import classes from "./SignUp.module.css";
import { useRef } from "react";
import URLs from '../resources/URLs.json';
const URL = URLs.URL;
function Login() {
  var userKey = "";
  const useridInputRef = useRef();
  const passwordInputRef = useRef();
  function loginHandler(event) {
    event.preventDefault();
    const useridValue = useridInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    fetch(URL+"users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        var flag = false;
        for (const key in data) {
          if (data[key]["userid"] === useridValue && data[key]["password"]) {
            userKey = key;
            flag = true;
          }
        }
        if (flag) {
          localStorage.setItem("userKey",userKey);
          localStorage.setItem("isLoggedIn", "1");
          localStorage.setItem("userId", useridValue);
          localStorage.setItem("password", passwordValue);
          alert("login successfull");
          window.location.href = ".";
        }
        else{
            alert("wrong username or password");
        }
      });
  }
  return (
    <form className={classes.form} onSubmit={loginHandler}>
      <div className={classes.control}>
        <label htmlFor="userid">User Id</label>
        <input type="text" required id="userid" ref={useridInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Login</button>
      </div>
    </form>
  );
}

export default Login;
