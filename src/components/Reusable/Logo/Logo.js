/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div css={styles}>
      <Link to="/">SocialMediaApp</Link>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 100px;
  color: #fff;
  a {
    font-size: 1.2rem;
    font-weight: 600;
  }
`

export default Logo;
