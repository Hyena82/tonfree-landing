"use client";

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

//grid 
  .flex{
    display: flex;
  }

  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .justify-between{
    justify-content: space-between;
  }

  .column{
    flex-direction: column;
  }

  .row{
    flex-direction: row;
  }

  .mobile-reverse-column {
    @media (max-width: 768px) {
      flex-direction: column-reverse !important;
    }
  }

  .mobile-column {
    @media (max-width: 768px) {
      flex-direction: column ;
    }
  }

  .container{
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
      padding: 0 16px;
    }
  }

  .hover{
    transition: opacity 0.3s;

    &:hover{
      cursor: pointer;
      opacity: 0.8;
    }
  }

  .relative{
    position: relative;
  }

  .absolute{
    position: absolute;
  }

  .absolute-center{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .h-100{
    height: 100%;
  }

  .w-100{
    width: 100%;
  }

  // css page style
  .title-page{
    margin: 0  0 4rem;

    color: #fff;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 90px;
    text-transform: uppercase;

    span {
      color: #36ef99;
    }

    @media (max-width: 768px) {
      margin: 0  0 2rem;
      text-align: center;
      font-size: 50px;
      line-height: 48px;
    }
  }

  .top-title{
    font-family: var(--font-readex-pro);
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .desc-title{
    font-family: var(--font-readex-pro);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
  }

  .button-hover{
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
      cursor: pointer;  
    }
  }

  /* mobile */

  @media (max-width: 768px) {
    .hidden-mobile{
      display: none !important;
    }
  }
`;

export default GlobalStyles;