"use client";

import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  p {
    font-size: 1.5rem;
  }
`;

const LoadingPage = () => {
  return (
    <Wrapper>
      <p>Loading...</p>
    </Wrapper>
  );
};

export default LoadingPage;
