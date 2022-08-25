import classes from "./SignUp.module.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import URLs from '../resources/URLs.json'
const URL = URLs.URL;

function SignUp() {
  const navigate = useNavigate();
  const nameInputRef = useRef();
  const useridInputRef = useRef();
  const phoneInputRef = useRef();
  const passwordInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const useridValue = useridInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    fetch(URL+"users.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data)
        var flag = true;
        for (const key in data) {
          if (data[key]["userid"] === useridValue) {
            alert("User Id taken");
            flag = false;
            break;
          }
        }
        if (flag) {
        //   alert(useridInputRef.current.value);
          if (passwordValue.trim().length > 7) {
            fetch(
              URL+"users.json",
              {
                method: "POST",
                body: JSON.stringify({
                  userid: useridValue,
                  password: passwordValue
                }),
                headers: {
                  "Content-Type": "application/json",
                },
              }
            ).then(() => {
                alert("signup successfull");
              navigate("/", { replace: true });
            });
          } else alert("password should be more than 7 character");
        }
      });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="userid">User Id</label>
        <input type="text" required id="userid" ref={useridInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="phone">Phone</label>
        <input type="number" required id="phone" ref={phoneInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
