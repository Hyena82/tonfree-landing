"use client";

import styled from "styled-components";
import Link from "next/link";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #343a40;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <Title>404 - Page Not Found</Title>
      <Description>
        Sorry, the page you are looking for does not exist.
      </Description>
      <HomeButton href="/">Go Home</HomeButton>
    </NotFoundWrapper>
  );
}
