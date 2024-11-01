"use client";

import Header from "@/components/Header";
import Footer from "../Footer";

import styled from "styled-components";

const Wrapper = styled.div`
  font-family: var(--font-protest-strike);
`;
interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default LayoutPage;
