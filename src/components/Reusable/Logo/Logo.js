/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const Logo = () => {
  return (
    <div css={styles}>
      <h1>Logo</h1>
    </div>
  );
};

const styles = css`
  width: 100%;
  max-width: 100px;
  color: #fff;
`

export default Logo;
