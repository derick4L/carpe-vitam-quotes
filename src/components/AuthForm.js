import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Button } from "rsuite";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";
import "../styles/reactPhoneNumber.css";

const AuthForm = () => {
  const [valid, setValid] = useState();
  const [error, setError] = useState();
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [userCode, setUserCode] = useState("");

  let navigate = useNavigate();

  const recaptchaMethod = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
      },
      authenticate
    );
  };

  const validatePhoneNumber = (e) => {
    e.preventDefault();

    if (userPhoneNumber.length < 12 || userPhoneNumber.length > 13) {
      return setValid(false);
    } else {
      setValid(true);
      recaptchaMethod();

      let appVerifier = window.recaptchaVerifier;

      signInWithPhoneNumber(authenticate, userPhoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const validateCode = () => {
    if (userCode.length > 6 || userCode.length < 6) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, "33000");
    } else {
      window.confirmationResult.confirm(userCode).then((result) => {
        localStorage.setItem("user", result.user.toJSON().phoneNumber);
        navigate("/");
      });
    }
  };

  return (
    <div className="auth-layout-content">
      <div className="auth-form-container">
        <h1>
          Sign In Via OTP
          <br />
          (One Time Passcode)
        </h1>

        <form className="auth-form" onSubmit={validatePhoneNumber}>
          <div className="auth-phone-number-group">
            <PhoneInput
              placeholder="enter country code + your number"
              value={userPhoneNumber}
              onChange={setUserPhoneNumber}
              required
            />
          </div>
          {valid === true ? (
            <div className="auth-passcode-group">
              <input
                id="passcode-input"
                inputMode="number"
                value={userCode}
                onChange={(e) => setUserCode(e.target.value)}
              />
              <label>Passcode</label>
              {!error ? null : (
                <div className="error-code">
                  Please enter the code sent.
                  <br />
                  If you have not received a code, refresh the page and try
                  again.
                </div>
              )}
            </div>
          ) : null}

          {valid === true ? (
            <Button
              type="submit"
              id="send-code-button"
              onClick={() => validateCode()}
            >
              Validate Code
            </Button>
          ) : (
            <Button type="submit" id="send-code-button">
              Send Code
            </Button>
          )}
        </form>

        <Button
          id="back-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
      </div>
      <div id="recaptcha"></div>
    </div>
  );
};

export default AuthForm;
