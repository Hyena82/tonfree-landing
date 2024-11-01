import styled from "styled-components";

const Wrapper = styled.div<{ zoom?: boolean }>`
  width: 650px;
  height: 98px;
  margin: 0 auto;
  position: relative;
  zoom: ${(props) => (props.zoom ? "0.8" : "1")};

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 42px);
    white-space: nowrap;

    font-size: 25px;
    font-weight: 700;
    line-height: 34.13px;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 768px) {
      transform: translate(-50%, 16px);
    }
  }

  div {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -40%);

    background: linear-gradient(
      180deg,
      #ffffff -23.06%,
      rgba(255, 255, 255, 0) 60%
    );
    font-size: 150px;
    font-weight: 900;
    line-height: 180px;
    text-align: left;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;

    @media (max-width: 768px) {
      font-size: 120px;
      transform: translate(-50%, -50%);
    }
  }

  img {
    @media (max-width: 768px) {
      width: 180%;
      width: ${(props) => (props.zoom ? "90%" : "180%")};
      position: absolute;
      bottom: -7%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

interface TitleBoxProps {
  title: string;
  page?: string;
  zoom?: boolean;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title, page, zoom = false }) => {
  return (
    <Wrapper zoom={zoom}>
      <p>{title}</p>
      {page && <div>{page}</div>}
      <img src="/images/title-bg.png" alt="" />
    </Wrapper>
  );
};

export default TitleBox;
