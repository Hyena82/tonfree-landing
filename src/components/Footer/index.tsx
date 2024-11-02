import { socialLinks } from "@/config";
import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 6rem 0 0;
  height: 1173px;
  background: transparent;
  position: relative;
  overflow: hidden;
  background: url("/images/footer/bg.png") no-repeat center center / cover;
  font-family: var(--font-inter);
  color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 1128px;
  }

  .container-footer {
    margin: 0 auto -50px;
    padding: 3rem 3rem;
    width: 98%;

    border-radius: 20px;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);

    @media (max-width: 768px) {
      width: 95%;
    }
  }

  .header-content {
    text-align: center;
    margin-bottom: 4rem;

    h2 {
      background: linear-gradient(
        90deg,
        #36ef99 19.98%,
        #fff 51.38%,
        #36ef99 80.35%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      text-align: center;

      font-size: 60px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px; /* 133.333% */

      @media (max-width: 768px) {
        font-size: 40px;
        line-height: 48px;
      }

      span {
        color: #36ef99;
      }
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      margin-bottom: 2rem;
      margin-top: 10px;
    }

    .early-mover-btn {
      display: inline-flex;
      align-items: center;
      background: rgba(54, 239, 153, 0.1);
      color: #fff;
      padding: 8px 24px;
      border-radius: 100px;
      border: 1px solid #fff;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.3s ease;
      gap: 10px;

      &:hover {
        background: rgba(54, 239, 153, 0.2);
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 4rem;
  }

  .footer-content {
    gap: 4rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }

    .footer-column {
      h3 {
        background: var(
          --Main-color-Gr,
          linear-gradient(131deg, #7ef2c2 6.38%, #36ef99 53.19%, #04673e 100%)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
      }

      @media (max-width: 768px) {
        text-align: center;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 1rem;

          a {
            color: #fff;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
            font-size: 14px;
            transition: color 0.3s ease;

            &:hover {
              color: #36ef99;
            }
          }
        }
      }
    }
  }
`;

const CopyRight = styled.div`
  background-color: rgb(11, 6, 36);

  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    height: 180px;
    & > div {
      flex-direction: column;
      gap: 20px;
    }
  }

  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;

  & > div {
    width: 100%;
    max-width: 1200px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container-footer">
        <div className="header-content">
          <h2>Fist Come First Serve</h2>
          <p>Do you want to join us?</p>
          <button className="early-mover-btn">
            <img src="/images/icons/gift.svg" alt="" />
            BECOME EARLY MOVER
          </button>
        </div>

        <div className="social-links">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link}>
              <img src={item.icon} alt={item.name} />
            </a>
          ))}
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li>
                <a href="#">TELEGRAM BOT</a>
              </li>
              <li>
                <a href="#">LUCKY SPIN</a>
              </li>
              <li>
                <a href="#">EARNING</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Link</h3>
            <ul>
              <li>
                <a href="#">APP</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="mailto:SUPPRT@TONFREE.IO">SUPPRT@TONFREE.IO</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CopyRight>
        <div className="flex justify-between">
          <p>© 2024. All rights reserved..</p>

          <div className="flex gap-4">
            <p>support@tonfree.io</p>
            <p>Tonfree. © 2024</p>
          </div>
        </div>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
