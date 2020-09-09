/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useContext } from "react";
import { AuthenticationContext } from "../Context/AuthenticationContext";

const LoginForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    handleUserSignin,
    handleUserSignup
  } = useContext(AuthenticationContext);
  return (
    <form css={styles}>
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      { hasAccount ?
      <div className="wrap">
        <button onClick={handleUserSignin}>Sign In</button>
        <div className="wrap-text">
          <p>Don't have an account?</p>
          <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
        </div>
      </div>
      :
      <div className="wrap">
        <button onClick={handleUserSignup}>Sign Up</button>
        <div className="wrap-text">
          <p>Have an account already?</p>
          <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
        </div>
      </div>
       }
    </form>
  );
};

const styles = css`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  background: #000;
  padding: 60px 20px;
  label {
    color: #fff;
  }
  input {
    width: 100%;
    height: 34px;
    margin: 4px 0 0 0;
    padding: 0 0 0 4px;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 100%;
    max-width: 100px;
    height: 40px;
    margin: 14px 0 0 0;
    cursor: pointer;
    border-radius: 4px;
    border: none;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .wrap-text {
      color: #fff;
      display: flex;
      padding: 20px 0 0 0;
      span {
        text-decoration: underline;
        cursor: pointer;
        margin: 0 0 0 6px;
      }
    }
  }
`;

export default LoginForm;
