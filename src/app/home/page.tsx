"use client";

import styled from "styled-components";
import HomeSection from "./components/HomePage";
import RoadmapPage from "@/app/home/components/Roadmap";
import OurProductPage from "@/app/home/components/OurProduct";
import EaringPage from "@/app/home/components/Earning";
import BackerPage from "@/app/home/components/Backer";

const Wrapper = styled.div`
  width: 100%;
  color: #fff;
  background: #01030e;
`;

const HomePage = () => {
  return (
    <Wrapper>
      <HomeSection />

      <EaringPage />

      <OurProductPage />

      <RoadmapPage />

      <BackerPage />
    </Wrapper>
  );
};

export default HomePage;
