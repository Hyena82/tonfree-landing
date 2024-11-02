import AnimatedInview from "@/components/AnimatedInview.tsx";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  font-family: var(--font-inter);

  .map-content {
    position: relative;
    height: 700px;
    overflow-x: auto;
  }

  .title-page {
    font-size: 60px;
    font-family: var(--font-protest-strike);
    color: #fff;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 90px;
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: 50px;
    }
  }

  .time-line {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;

    min-width: 1058px;
    img {
      width: 100%;
    }
  }

  .card-1 {
    top: 50%;
    left: 10px;
    transform: translateY(40px);
  }

  .card-2 {
    top: 50%;
    left: 25%;
    transform: translateY(calc(-100% - 40px));
  }

  .card-3 {
    top: 50%;
    left: calc(50% + 15px);
    transform: translateY(40px);
  }

  .card-4 {
    top: 50%;
    left: calc(75% - 25px);
    transform: translateY(calc(-100% - 40px));
  }

  .card {
    display: flex;
    width: 318px;
    padding: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    position: absolute;

    border-radius: 20px;
    background: #01030e;
    border: 1px solid rgba(128, 128, 128, 0.55);

    @media (max-width: 768px) {
      width: 280px;
      padding: 20px;
    }

    &.in-active {
      img {
        filter: grayscale(100%);
      }
    }

    &.current {
      border: 1px solid #36ef99;
    }
    p {
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      text-transform: uppercase;
    }

    .title {
      color: #36ef99;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 30px;
      text-transform: uppercase;
      position: relative;
      padding-left: 25px;

      @media (max-width: 768px) {
        font-size: 18px;
      }

      &::before {
        content: "";
        display: block;
        width: 10px;
        height: 17px;
        background: #36ef99;
        box-shadow: 0px 0px 4px 0px #36ef99;
        margin-right: 10px;
        position: absolute;
        left: 5px;
        top: 7px;
      }
    }

    img {
      width: 66px;
    }
  }

  @keyframes bounceLeftBottom {
    0% {
      -webkit-transform: translate3d(-70%, 100px, 0);
      transform: translate3d(-70%, 100px, 0);
    }
    50% {
      -webkit-transform: translate3d(-50%, 50px, 0);
      transform: translate3d(-50%, 50px, 0);
    }
    100% {
      -webkit-transform: translate3d(-70%, 100px, 0);
      transform: translate3d(-70%, 100px, 0);
    }
  }

  .planet {
    position: absolute;
    top: 1%;
    left: 40px;

    animation: bounceLeftBottom 16s infinite;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const RoadmapPage = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "System Foundation",
      status: "Completed",
    },
    {
      phase: "Phase 2",
      title: "NFT & Staking Integration",
      status: "In Progress",
    },
    {
      phase: "Phase 3",
      title: "NFT Gaming & Enhanced Features",
      status: "In Progress",
    },
    {
      phase: "Phase 4",
      title: "Exchange Listings & Market Expansion",
      status: "Planned",
    },
  ];

  return (
    <Wrapper>
      <div className="container">
        <AnimatedInview duration={0.4}>
          <p className="title-page">Roadmap</p>
        </AnimatedInview>

        <div className="map-content">
          <div className="time-line">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`card card-${index + 1} ${
                  item.status !== "Completed" ? "in-active" : ""
                } ${index === 1 ? "current" : ""}`}
              >
                <img src="/images/roadmap/flag.png" alt="" />
                <p>{item.phase}</p>
                <div className="title">
                  {item.title} ({item.status})
                </div>
              </div>
            ))}

            <img src="/images/roadmap/line.png" alt="" />
          </div>
        </div>
      </div>

      <img className="planet " src="/images/roadmap/planet.png" alt="" />
    </Wrapper>
  );
};

export default RoadmapPage;
