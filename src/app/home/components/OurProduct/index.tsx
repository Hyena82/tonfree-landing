import AnimatedInview from "@/components/AnimatedInview.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 6rem 0 12rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 6rem 0 6rem;
  }

  .title-page {
    font-size: 128.772px;

    @media (max-width: 768px) {
      font-size: 62.793px;
      font-style: normal;
      font-weight: 400;
      line-height: 62.793px;
      text-transform: uppercase;
    }
  }

  @keyframes bounceRightBottom {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    50% {
      -webkit-transform: translate3d(30%, 20px, 0);
      transform: translate3d(30%, 20px, 0);
    }
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .planet {
    position: absolute;
    bottom: 5%;
    right: 0;
    animation: bounceRightBottom 9s infinite;

    @media (max-width: 768px) {
      display: none;
    }
  }

  .description {
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
    margin-top: 4rem;

    font-family: var(--font-poppins);
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    line-height: 45px; /* 140.625% */
  }

  .content-list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .title-card {
      color: #36ef99;
      font-family: var(--font-inter);

      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      text-transform: uppercase;
      max-width: 137px;

      &.max-175 {
        max-width: 175px;
      }
    }

    .desc {
      color: #fff;
      font-family: var(--font-inter);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      max-width: 302px;

      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      }
    }

    .left-content {
      display: flex;
      align-items: center;
      height: 505px;
      gap: 20px;

      @media (max-width: 768px) {
        flex-direction: column;
        height: auto;
        width: 100%;
      }

      .yCard {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 370px;
        padding: 33px 25px;
        height: 100%;
        flex-shrink: 0;
        background: url("/images/product/item-1.png") no-repeat center center;

        @media (max-width: 768px) {
          flex-direction: column;
          height: 505px;
        }
      }

      .right-stack {
        flex: 1;
        display: flex;
        height: 100%;

        flex-direction: column;

        @media (max-width: 768px) {
          flex: unset;
        }
      }

      .XCard {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 542px;
        padding: 33px 25px;
        flex: 1;
        background: url("/images/product/item-2.png") no-repeat center center;

        &:nth-child(2) {
          background: url("/images/product/item-3.png") no-repeat center center;
          @media (max-width: 768px) {
            background-size: contain;
          }
        }

        @media (max-width: 768px) {
          width: 100%;
          height: 170px;
          background-size: contain;
          font-size: 20px;
          padding: 20px 25px;
          flex: unset;
        }
      }
    }

    .right-content {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      @media (max-width: 768px) {
        display: none;
      }

      img {
        position: absolute;
        left: -30%;
        width: 500px;
      }
    }
  }
`;

const OurProductPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <AnimatedInview duration={0.4}>
          <p className="title-page">
            Our <span>Product</span>
          </p>
        </AnimatedInview>

        <div className="content-list">
          <div className="left-content">
            <div className="yCard">
              <div className="title-card">One click to start</div>
              <div className="desc">Start mining with Telegram Bot!</div>
            </div>

            <div className="right-stack ">
              <div className="XCard">
                <div className="title-card max-175">Earning reward free</div>
                <div className="desc">
                  10,000 TOKEN/Month and Daily/Invite Reward are free to earn,
                </div>
              </div>

              <div className="XCard">
                <div className="title-card max-175">x100 tonfree by 1 ton</div>
                <div className="desc">
                  Transfer 1 TON to kickstart your earning session! The more you
                  pay, the more you can win in USDT/TON from our spin/wheel
                  game.
                </div>
              </div>
            </div>
          </div>
          <div className="right-content">
            <img className="bounce" src="/images/product/phone.png" alt="" />
          </div>
        </div>
      </div>

      <img className="planet" src="/images/product/planet.png" alt="" />
    </Wrapper>
  );
};

export default OurProductPage;
