"use client"; // Error components must be Client Components

import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #343a40;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const HomeButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  margin: 0.5rem;

  &:hover {
    background-color: #218838;
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <ErrorWrapper>
      <Title>Something went wrong!</Title>
      <Description>Sorry, an unexpected error has occurred.</Description>
      <Button onClick={() => reset()}>Try Again</Button>
      <HomeButton href="/">Go Home</HomeButton>
    </ErrorWrapper>
  );
}
