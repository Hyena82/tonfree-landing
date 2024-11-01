import RoBotModelBox from "@/app/home/components/HomePage/RoBotModelBox";
import { Col, Row } from "antd";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 3;
  min-height: 100vh;
  padding-top: 6rem;
  background: url("/images/home/bg.png") no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    height: 700px;
    background-position: 25% 0;
    background-size: auto 630px;
  }

  .left-content {
    p {
      font-family: var(--font-protest-strike);
      color: #fff;
      font-size: 128.472px;
      font-style: normal;
      line-height: 128.472px;
      text-transform: uppercase;
    }

    .desc {
      color: #fff;
      font-family: var(--font-poppins);
      font-size: 24px;
      font-style: normal;
      font-weight: 300;
      line-height: 32px;
      max-width: 456px;
      margin: 6rem 0 4rem;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        top: -20px;
        left: 0;
        background: #36ef99;
        box-shadow: 0px 0px 4px 0px #36ef99;
        width: 122px;
        height: 10px;
      }
    }
  }

  .right-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .robot-box {
      width: 450px;
      height: 540px;
      /* border: 1px solid #fff; */
    }

    p {
      font-family: var(--font-protest-strike);
      color: #fff;
      font-size: 128.472px;
      font-style: normal;
      line-height: 128.472px;
      text-transform: uppercase;
      margin-top: 2rem;
    }
  }
`;

const LaunchButton = styled(motion.div)`
  width: fit-content;
  padding: 12px 24px;
  border-radius: 159.184px;
  border: 1.592px solid rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    131deg,
    #f2e47e 6.38%,
    #dbb02e 53.19%,
    #ff8703 100%
  );
  backdrop-filter: blur(7.959183692932129px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  color: #fff;
  font-family: var(--font-inter);
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  cursor: pointer;

  img {
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: translate(25px, -25px);
  }
`;

const HomePage = () => {
  return (
    <Wrapper>
      <div className="container">
        <Row>
          <Col sm={12}>
            <div className="left-content">
              <p>TONFREE</p>
              <div className="desc">
                Emphasizes a commitment to freedom and equality for all users
              </div>

              <LaunchButton whileHover={{ scale: 1.1 }}>
                Launch App
                <img src="/images/icons/rocket.svg" alt="" />
              </LaunchButton>
            </div>
          </Col>
          <Col sm={12}>
            <div className="right-content">
              <div className="robot-box relative">
                <RoBotModelBox />
              </div>
              <p>all free</p>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HomePage;
