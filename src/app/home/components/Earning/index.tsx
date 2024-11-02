import AnimatedInview from "@/components/AnimatedInview.tsx";
import { Col, Row } from "antd";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 6rem 0 12rem;
  background: url("/images/earning/bg.svg") no-repeat center center;
  background-size: 140% 140%;
  position: relative;

  @media (max-width: 768px) {
    padding: 6rem 0 1rem;
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-top: 4rem;

    font-family: var(--font-poppins);
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 45px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .list-data {
    margin: 0 auto;
  }

  .moon {
    position: absolute;
    top: 5%;
    left: 4%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .heart {
    position: absolute;
    bottom: 5%;
    right: 5%;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .m-description {
    display: none;

    @media (max-width: 768px) {
      display: block;
      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      margin-bottom: 1.5rem;
      font-family: var(--font-poppins);

      color: rgba(255, 255, 255, 0.7);
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 23px; /* 143.75% */
    }
  }
`;

const CardWrapper = styled.div<{ bg: string; isSecond: boolean }>`
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  background-position: center;
  width: 100%;
  height: 470px;
  padding: 25px 38px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .title {
    font-family: var(--font-protest-strike);
    color: #36ef99;
    text-align: center;
    font-size: 52.367px;
    font-style: normal;
    font-weight: 400;
    line-height: 67.111px;
    text-transform: uppercase;
  }

  .desc {
    font-family: var(--font-inter);
    color: ${(props) => (props.isSecond ? "#000" : "#fff")};
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

const EarningPage = () => {
  const data = [
    {
      title: "Simple and Easy!",
      bg: "/images/earning/card-1.png",
      description:
        "Begin mining TonFree tokens with only 1 TON. It's simple and direct!",
    },
    {
      title: "Clear and Equitable",
      description: "Earn money by playing games and completing tasks.",
      bg: "/images/earning/card-2.png",
    },
    {
      title: "Safe and Decentralized",
      description:
        "Leveraging Open Network (TON) technology, your transactions and earnings are secure.",
      bg: "/images/earning/card-3.png",
    },
  ];

  return (
    <Wrapper id="earning">
      <div className="container">
        <AnimatedInview duration={0.4}>
          <p className="title-page">
            Auto Earning <span>System</span>
          </p>
        </AnimatedInview>

        <div className="m-description">
          Tonfree was created with the mission to bring financial freedom to
          everyone through the decentralized TON platform
        </div>

        <Row gutter={[20, 20]} className="list-data">
          {data.map((item, index) => (
            <Col xs={24} sm={8} key={index}>
              <CardWrapper bg={item.bg} isSecond={index === 1}>
                <p className="title">{item.title}</p>
                <p className="desc">{item.description}</p>
              </CardWrapper>
            </Col>
          ))}
        </Row>

        <div className="description">
          Tonfree was created with the mission to bring financial freedom to
          everyone through the decentralized TON platform
        </div>
      </div>

      <img className="moon bounce" src="/images/earning/moon.png" alt="" />
      <img className="heart bounce" src="/images/earning/heart.png" alt="" />
    </Wrapper>
  );
};

export default EarningPage;
