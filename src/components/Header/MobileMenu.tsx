import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { socialLinks } from "@/config";
import { menuHeader } from "@/config";
import { JoinButton } from ".";

const Wrapper = styled.div`
  background: var(--primary-color);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 35px 24px;
  overflow-y: auto;

  .center-menu {
    display: flex;

    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    height: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: left;
    left: unset;

    .menu-item {
      padding: 20px 20px 8px;
      border-bottom: 2px solid transparent;

      &.active {
        border-bottom: 3px solid;
        border-image-slice: 1;
        border-color: #fff;
      }
    }

    a {
      font-family: var(--font-readex-pro);

      font-size: 18px;
      font-weight: 400;
      line-height: 19.73px;
      text-align: left;
      color: #fff;
    }
  }

  .line-slider {
    width: 100%;
    height: 1px;
    background: #fff;
    margin-top: 20px;
  }

  .socials {
    font-family: var(--font-readex-pro);

    font-size: 20px;
    font-weight: 400;
    line-height: 19.73px;
    text-align: center;
    margin-bottom: 20px;
  }

  .socials-list {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

const MobileMenu = ({ onClose }: any) => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleChangeTab = useCallback(
    (tab: string) => {
      setSelectedItem(tab);
      onClose();
    },
    [onClose]
  );

  return (
    <Wrapper>
      <div className="flex justify-center column">
        <div className="close-image" onClick={onClose}>
          <Image
            src="/images/icons/timeX.svg"
            width={24}
            height={24}
            alt=""
            quality={100}
          />
        </div>
        <div className="flex justify-center mt-3">
          <Image
            src="/images/logo.svg"
            width={165}
            height={62}
            alt=""
            quality={100}
          />
        </div>

        <div className="mt-4">
          <div className="flex center-menu">
            {menuHeader.map((item, index) => (
              <Link
                className={`${
                  selectedItem === item.name && "active"
                } menu-item`}
                onClick={() => handleChangeTab(item.name)}
                href={`#${item.id}`}
                key={index}
              >
                {item.name}
              </Link>
            ))}

            <div className="mt-4">
              <Link
                href="https://whitepaper.grabway.site/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <JoinButton>White Paper</JoinButton>
              </Link>
            </div>

            <div className="line-slider" />
          </div>
        </div>

        <div className="socials mt-4 mb-3">Official social media</div>

        <div className="flex justify-between socials-list">
          {socialLinks.map((item, index) => (
            <a href={item.link} key={index} className="social-item">
              <Image
                src={item.icon}
                width={40}
                height={40}
                alt=""
                quality={100}
              />
            </a>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileMenu;
