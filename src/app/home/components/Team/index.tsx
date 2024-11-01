import TitleBox from "@/components/TitleBox";
import styled from "styled-components";
import { Row, Col } from "antd";

const Wrapper = styled.div`
  padding: calc(90px + 3rem) 0 0;

  .team-list {
    margin-bottom: 5rem;
  }
`;

const Card = styled.div`
  margin: 0 8px;
  text-align: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-top: 20px;
  }

  .name {
    padding-top: 20px;
    font-size: 22px;
    font-weight: 800;
    line-height: 26.82px;
    text-align: center;
    text-shadow: 0px 2px 0px #104a7e80;
  }

  .role {
    color: #92b7df;
    margin-top: 5px;

    font-size: 18px;
    font-weight: 700;
    line-height: 21.94px;
    text-align: center;
    text-transform: uppercase;

    &.advisor {
      height: 50px;
      font-size: 14px;
    }
  }

  .desc {
    margin-top: 10px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.85px;
    text-align: center;
  }
`;

const data = [
  {
    imgSrc: "/images/team/alan.png",
    name: "ALAN WANG",
    role: "CEO",
    desc: "Co-Founder and CEO of Nagoda Studios & Fishwar, Web3 Content Director, Funding supporter since 2018",
  },
  {
    imgSrc: "/images/team/mary.png",
    name: "MARY",
    role: "CMO",
    desc: "Mary has been active in the blockchain industry since 2017 and brings 8 years of management experience in marketing, social media, and PR. Prior to joining Fishwar, she held various marketing roles at BounceBit, HTR Group, Accenture, and Rackspace",
  },
  {
    imgSrc: "/images/team/abraham.png",
    name: "ABRAHAM",
    role: "CPO",
    desc: "He brings over 5 years of experience in the cryptocurrency industry, where he has led significant initiatives, including managing a crypto fund and facilitating exchange listings. His expertise in navigating the complex landscape of crypto has been invaluable in integrating blockchain technology and crypto-economic models, enhancing the game’s value proposition for players and investors alike",
  },
  {
    imgSrc: "/images/team/kingsley.png",
    name: "KINGSLEY",
    role: "CFO",
    desc: "Kingsley brings a wealth of experience from top crypto exchanges and Web3 projects, having led high-impact projects and regional expansions that have transformed industries. With an MBA in finance from MIT Sloan, he’s the strategic leader we need to push FishWar to new heights.",
  },
];

const advisors = [
  {
    imgSrc: "/images/team/dean.png",
    name: "DEAN",
    role: "Founder of GameOn VC",
    desc: "Dean, a seasoned expert in Web3 gaming and blockchain, advises Fishwar with a focus on strategy and innovation. With key roles at GameonVC, he has raised $30 million across seven projects and guided over 30 projects through exchange listings and incubation. His experience is pivotal in driving Fishwar’s growth and success in the crypto gaming space.",
  },

  {
    imgSrc: "/images/team/muaz.png",
    name: "Muaz Xinthi",
    role: "ex BDM at Seedify BDM at GTProtocol",
    desc: "Dean, a seasoned expert in Web3 gaming and blockchain, advises Fishwar with a focus on strategy and innovation. With key roles at GameonVC, he has raised $30 million across seven projects and guided over 30 projects through exchange listings and incubation. His experience is pivotal in driving Fishwar’s growth and success in the crypto gaming space.",
  },

  {
    imgSrc: "/images/team/eljaBoom.png",
    name: "EljaBoom",
    role: "Strategic Advisor",
    desc: "A Forbes 40 Under 40 honoree and Guinness World Record holder in AI & Robotics, EljaBoom is a passionate crypto enthusiast and entrepreneur. He founded Ajoobz, a tech venture, and actively bridges Web2 and Web3, sharing insights at events like Binance Blockchain Week. Beyond tech, he focuses on education and crypto awareness in Nigeria, blending innovation, investment, and philanthropy with a unique personal touch.",
  },
];

const TeamPage = () => {
  return (
    <Wrapper id="team-advisor">
      <div className="container">
        <div className="title-page">
          <TitleBox title="team" page="07" />
        </div>

        <div className="team-list">
          <Row gutter={[16, 16]} justify="center">
            {data.map((item, index) => (
              <Col xs={24} sm={6} key={index}>
                <Card>
                  <img src={item.imgSrc} alt={item.name} />
                  <div className="name">{item.name}</div>
                  <div className="role">{item.role}</div>
                  <div className="desc">{item.desc}</div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <h2 className="text-center mb-4">ADVISOR</h2>

        <Row gutter={[16, 16]} justify="center">
          {advisors.map((item, index) => (
            <Col xs={24} sm={6} key={index}>
              <Card>
                <img src={item.imgSrc} alt={item.name} />
                <div className="name">{item.name}</div>
                <div className="role advisor">{item.role}</div>
                <div className="desc">{item.desc}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Wrapper>
  );
};

export default TeamPage;
