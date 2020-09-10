/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

// Components
import Logo from "../Reusable/Logo/Logo";
import Container from "../Reusable/Container";
import { useContext } from "react";
import { AuthenticationContext } from "../Context/AuthenticationContext";

const Navbar = () => {
  const { user, handleUserLogout } = useContext(AuthenticationContext);
  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <div>
          <Link to="/userprofile">Profile</Link>
          {user ? (
            <Link to="/" onClick={handleUserLogout}>Log out</Link>
          ) : (
            <Link to="/signup">Sign up</Link>
          )}
        </div>
      </Container>
    </nav>
  );
};

const styles = css`
  width: 100%;
  background: #000;
  padding: 16px 0;
  position: absolute;
  top: 0;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 100%;
      max-width: 150px;
      display: flex;
      justify-content: space-between;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

export default Navbar;
