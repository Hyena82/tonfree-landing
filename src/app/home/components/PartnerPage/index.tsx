import TitleBox from "@/components/TitleBox";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 3rem 0;

  @media (max-width: 768px) {
    padding: 6rem 0;
  }

  .title-page {
    margin: 2rem 0;
  }

  .team-list {
    margin-bottom: 5rem;
  }

  .logo-list {
    margin-top: 50px;
    gap: 60px;
    margin: 50px auto 0;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .primary-partners {
    .sei-box {
      background-color: #ffffff;
      border-radius: 20.4px;
      padding: 13px 60px;
    }

    @media (max-width: 768px) {
      & > img {
        width: 100%;
      }

      .sei-box {
        padding: 13px 30px;
        border-radius: 12px;
        img {
          width: 90px;
        }
      }
    }
  }
`;

const data = [
  {
    name: "bitget",
    imgSrc: "/images/partners/bitget.svg",
  },

  {
    name: "gate",
    imgSrc: "/images/partners/gate.svg",
  },

  {
    name: "bingx",
    imgSrc: "/images/partners/bingx.svg",
  },
];

const PartnerPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex center column primary-partners">
          <img src="/images/partners/power-text.png" alt="" />
          <div className="sei-box center">
            <img src="/images/partners/sei.png" alt="" />
          </div>
        </div>

        <div className="title-page">
          <TitleBox title="partners" />
        </div>

        <div className="flex gap-4 logo-list">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.imgSrc} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default PartnerPage;
