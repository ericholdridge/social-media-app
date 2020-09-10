/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import Navbar from "../Navbar/Navbar";
import Container from "../Reusable/Container";

const Hero = () => {
  return (
    <section css={styles} className="hero">
      <Navbar />
      <Container>
        
      </Container>
    </section>
  );
};

const styles = css`
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Hero;
