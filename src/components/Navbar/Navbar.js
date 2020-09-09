/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Logo from "../Reusable/Logo/Logo";
import Container from "../Reusable/Container";

const Navbar = () => {
  return (
    <nav css={styles}>
      <Container>
        <Logo />
        <div>
          <a href="#!">Profile</a>
          <a href="#!">Sign up</a>
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
`

export default Navbar;
