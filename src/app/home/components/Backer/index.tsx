import { partnersData } from "@/config";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 100px;
  padding-bottom: 20px;

  p {
    color: rgba(255, 255, 255, 0.7);
    font-family: var(--font-popins);
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 25px;
    max-width: 600px;
    text-align: center;
    margin: 0 auto;

    span {
      color: rgba(255, 255, 255, 1);
    }
  }

  .backer-list {
    display: flex;
    justify-content: center;
    max-width: 100%;
    margin: 4rem auto 0;
    flex-wrap: wrap;
    gap: 20px 20px;
  }

  .item-backer {
    display: flex;
    gap: 10px;
    align-items: flex-start;

    .title {
      color: #36ef99;
      font-family: var(--font-popins);
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: 45px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 30px;
      }
    }

    .name {
      color: #fff;
      font-family: var(--font-protest-strike);
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;
      line-height: 67px;

      @media (max-width: 768px) {
        font-size: 30px;
        line-height: 40px;
      }
    }
  }
`;

const BackerPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <p>
          <span>Our backers</span> include top-tier VCs, funds, and companies,
          providing expertise, network and resources to fuel our project&apos;s
          success.
        </p>

        <div className="backer-list">
          {partnersData.map((partner, index) => (
            <div className="item-backer" key={index}>
              <p className="title">{partner.role}</p>
              <p className="name">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default BackerPage;
