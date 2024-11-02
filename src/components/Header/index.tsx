import React, { useState } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { Drawer } from "antd";
import MobileMenu from "./MobileMenu";
import { menuHeader } from "@/config";
import Image from "next/image";

const Wrapper = styled.div<{ isShow: boolean }>`
  padding: 0 20px;
  color: #fff;
  height: 100px;
  display: flex;
  align-items: center;
  font-family: var(--font-inter);
  backdrop-filter: blur(10px);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 80px;
  }

  .header-menu {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  .logo-header {
    width: 81px;
    @media (max-width: 768px) {
      width: 60px;
    }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  @media (max-width: 768px) {
    display: none;
  }

  .menu-item {
    padding: 8px 35px;
    cursor: pointer;
    font-size: 24px;
    opacity: 0.8;
    transition: color 0.2s ease-in-out;
    font-size: 14px;
    font-weight: 500;
    line-height: 17.07px;
    text-align: left;

    &.active,
    &:hover {
      img {
        filter: sepia(1) saturate(10) hue-rotate(45deg);
        mix-blend-mode: multiply;
      }
      color: #36ef99;
    }
  }
`;

export const WhitePageButton = styled.div`
  max-width: 175px;
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  gap: 8px;
  border-radius: 20px;
  font-weight: 400;

  @media (max-width: 768px) {
    width: fit-content;
    padding: 8px 16px 8px 16px;
    gap: 4px;

    &.hidden {
      display: none;
    }
  }

  border: 2px solid #fff;
  border-radius: 50px;

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;

export const JoinButton = styled.div`
  max-width: 175px;
  width: 100%;
  height: 43px;
  padding: 8px 20px;
  gap: 8px;
  background-color: #fef901;
  border-radius: 20px;

  text-transform: uppercase;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #717400;
  text-shadow: 0px 2px 5px #00000040;

  @media (max-width: 768px) {
    width: fit-content;
    padding: 8px 16px 8px 16px;
    gap: 4px;
  }
`;

const Header = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <Wrapper isShow={isHeaderVisible}>
      <Drawer
        width="340px"
        zIndex={1000}
        title=" Drawer"
        onClose={onClose}
        open={open}
        headerStyle={{ display: "none" }}
        bodyStyle={{ padding: 0 }}
      >
        <MobileMenu onClose={onClose} />
      </Drawer>

      <div className="container h-100 flex justify-between align-center">
        <Link href="/">
          <img
            className="logo-header"
            src="/images/logo.svg"
            width={81}
            alt=""
          />
        </Link>

        <MenuWrapper>
          {menuHeader.map((item) => (
            <Link key={item.id} href={`#${item.id}`}>
              <div
                className={`menu-item flex align-center gap-2 ${
                  activeItem === item.name ? "active" : ""
                }`}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </div>
            </Link>
          ))}

          <div className="flex gap-4 align-center">
            {/* <Link href="#" target="_blank" rel="noopener noreferrer">
            <WhitePageButton className="center button-hover hidden">
              White Paper
            </WhitePageButton>
          </Link>

          <Link href="#" target="_blank" rel="noopener noreferrer">
            <JoinButton className="center button-hover">PlayNow</JoinButton>
          </Link> */}
          </div>
        </MenuWrapper>

        <div className="header-menu center" onClick={showDrawer}>
          <Image src="/images/icons/menu.svg" width={32} height={32} alt="" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
