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
    padding-top: 8rem;
  }

  .left-content {
    p {
      font-family: var(--font-protest-strike);
      color: #fff;
      font-size: 128.472px;
      font-style: normal;
      line-height: 128.472px;
      text-transform: uppercase;

      @media (max-width: 768px) {
        font-size: 74px;
        line-height: 64px;
      }
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

      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 24px;
        margin: 3rem 0 2rem;
      }

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

    @media (max-width: 768px) {
      .action-button {
        display: none;
      }
    }
  }

  .right-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media (max-width: 768px) {
      align-items: center;
    }

    .robot-box {
      width: 450px;
      height: 540px;

      @media (max-width: 768px) {
        width: 100%;
        height: 500px;
        max-width: 450px;
      }
    }

    .action-button {
      display: none;
      @media (max-width: 768px) {
        display: flex;
      }
    }

    p {
      font-family: var(--font-protest-strike);
      color: #fff;
      font-size: 128.472px;
      font-style: normal;
      line-height: 128.472px;
      text-transform: uppercase;
      margin-top: 2rem;

      @media (max-width: 768px) {
        font-size: 74px;
        line-height: 64px;
      }
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

  @media (max-width: 768px) {
    font-size: 24px;
    padding: 10px 20px;
  }

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
          <Col xs={24} sm={12}>
            <div className="left-content">
              <p>TONFREE</p>
              <div className="desc">
                Emphasizes a commitment to freedom and equality for all users
              </div>

              <LaunchButton
                className="action-button"
                whileHover={{ scale: 1.1 }}
              >
                Launch App
                <img src="/images/icons/rocket.svg" alt="" />
              </LaunchButton>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className="right-content">
              <div className="robot-box relative">
                <RoBotModelBox />
              </div>

              <LaunchButton
                className="action-button"
                whileHover={{ scale: 1.1 }}
              >
                Launch App
                <img src="/images/icons/rocket.svg" alt="" />
              </LaunchButton>
              <p>all free</p>
            </div>
          </Col>
        </Row>
      </div>
    </Wrapper>
  );
};

export default HomePage;
