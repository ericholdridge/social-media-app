/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { AuthenticationContext } from "../Context/AuthenticationContext";
import Navbar from "../Navbar/Navbar";

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    handleUserSignin,
    handleUserSignup,
  } = useContext(AuthenticationContext);
  return (
    <div css={styles}>
      <Navbar />
      <form>
        <div className="form-title">
          <h1>Login/Sign up</h1>
        </div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your username here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {hasAccount ? (
          <div className="wrap">
            <button onClick={handleUserSignin}>Sign In</button>
            <div className="wrap-text">
              <p>Don't have an account?</p>
              <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
            </div>
          </div>
        ) : (
          <div className="wrap">
            <button onClick={handleUserSignup}>Sign Up</button>
            <div className="wrap-text">
              <p>Have an account already?</p>
              <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

const styles = css`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background: #000;
    height: 380px;
    padding: 20px 20px 0 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 16px 0px, rgba(0, 0, 0, 0.19) 20px 20px 40px 20px;
    .form-title {
      text-align: center;
      padding: 20px 0 30px 0;
      h1 {
        color: #fff;
        font-size: 1.6rem;
      }
    }
    label {
      color: #fff;
      padding: 10px 0 4px 0;
      font-size: 1.1rem;
    }
    input[type="text"],
    input[type="password"] {
      width: 100%;
      height: 34px;
      border: none;
      border-bottom: 1px solid #ffff;
      background: transparent;
      outline: none;
      color: #fff;
      &:focus {
        outline: none;
      }
      &::placeholder {
        font-size: 0.9rem;
      }
    }
    .wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0 0 0;
      button {
        background-image: linear-gradient(to right, #f26fc9, #8772ef);
        border: none;
        padding: 10px 20px;
        color: #fff;
        text-transform: uppercase;
        border-radius: 4px;
        cursor: pointer;
        min-width: 100px;
      }
      .wrap-text {
        color: #fff;
        display: flex;
        padding: 5px 0 0 0;
        p {
          font-size: 0.9rem;
        }
        span {
          text-decoration: underline;
          cursor: pointer;
          margin: 0 0 0 6px;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export default LoginForm;
