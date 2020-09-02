import React, { useState } from "react";
import "./SignUp.scss";

export default function SignUp(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [fNameError, setFNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  let handleSubmitForm = (e) => {
    e.preventDefault();

    //Basic Validation Logic
    let fNameError = fName.length < 1 || fName.length > 80;
    let lNameError = lName.length < 1 || lName.length > 80;
    let emailError =
      email.length < 3 ||
      email.length > 80 ||
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let passError = pass.length < 1 || pass.length > 80;

    
    setFNameError(fNameError);
    setLNameError(lNameError);
    setEmailError(emailError);
    setPassError(passError);

    if (fName && !fNameError && lName && !lNameError && email && !emailError && pass && !passError) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="SignUp">
      {formSubmitted ? (
        <div className="submitted">Thanks for submitting!</div>
      ) : (
        <div>
          <form>
            <div className="text-input">
              <label htmlFor="first_name">First Name</label>
              <input
                className={`${fNameError ? "input-error-active" : ""}`}
                type="text"
                required
                id="first_name"
                name="first_name"
                placeholder="First Name"
                minLength={1}
                maxLength={80}
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              <p className={`error-msg ${fNameError ? "error-active" : ""}`}>
                First Name cannot be empty
              </p>
            </div>

            <div className="text-input">
              <label htmlFor="last_name">First Name</label>
              <input
                className={`${lNameError ? "input-error-active" : ""}`}
                type="text"
                required
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                minLength={1}
                maxLength={80}
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
              <p className={`error-msg ${lNameError ? "error-active" : ""}`}>
                Last Name cannot be empty
              </p>
            </div>

            <div className="text-input">
              <label htmlFor="email">Email Address</label>
              <input
                className={`${emailError ? "input-error-active" : ""}`}
                type="email"
                required
                id="email"
                name="email"
                placeholder="Email"
                minLength={3}
                maxLength={80}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className={`error-msg ${emailError ? "error-active" : ""}`}>
                Please enter a valid email
              </p>
            </div>

            <div className="text-input">
              <label htmlFor="password">Password</label>
              <input
                className={`${passError ? "input-error-active" : ""}`}
                type="password"
                required
                id="password"
                name="password"
                placeholder="Password"
                minLength={1}
                maxLength={80}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <p className={`error-msg ${passError ? "error-active" : ""}`}>
                Password cannot be empty
              </p>
            </div>

            <button
              className="button-button"
              onClick={(e) => handleSubmitForm(e)}
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </form>
          <p className="tos">
            By clicking the button, you are agreeing to our{" "}
            <a href="/">Terms and Services</a>
          </p>
        </div>
      )}
    </div>
  );
}
