import styled from "styled-components";

import swiperArrow from "@/assets/images/swiper-arrow.png";

export const StyledBlog = styled.section``;

export const Inner = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  text-align: center;
  padding: 80px 0px;

  h2 {
    font-size: 24px;
    color: #004abf;
    padding: 0 0 16px;
    font-weight: 500;
  }

  p {
    font-size: 16px;
    padding: 0px 0px 60px 0px;
  }
`;

export const BlogList = styled.div`
  .blog-swiper {
    width: 1040px;
    position: static;
    min-height: 380px;

    .swiper-button-prev {
      position: absolute;
      width: 48px;
      height: 66px;
      left: 0;
      top: 375px;
      font-size: 0;
      text-indent: -999px;
      overflow: hidden;
      border: 1px solid rgba(221, 221, 221, 0.7);
      background-color: rgba(255, 255, 255, 0.7);
      background-image: url(${swiperArrow});
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 300ms;
      z-index: 10;
      cursor: pointer;
    }

    .swiper-button-next {
      position: absolute;
      width: 48px;
      height: 66px;
      right: 0;
      top: 375px;
      font-size: 0;
      text-indent: -999px;
      overflow: hidden;
      border: 1px solid rgba(221, 221, 221, 0.7);
      background-color: rgba(255, 255, 255, 0.7);
      background-image: url(${swiperArrow});
      background-repeat: no-repeat;
      background-position: center center;
      transition: all 300ms;
      z-index: 10;
      cursor: pointer;
      transform: scale(-1, 1);
    }
  }
`;

export const BlogThumbnail = styled.div`
  border: 1px solid hsla(0, 0%, 60.8%, 0.17);
  transition: all 0.1s linear;
  display: block;
  position: relative;
  border-radius: 5px 5px 0px 0px;

  img {
    width: 100%;
    border-radius: 5px 5px 0px 0px;
  }

  .white-mask {
    position: absolute;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0.25);
    opacity: 0;
    transition: all 0.125s ease-in;
  }
`;

export const BlogContent = styled.div`
  padding: 30px 15px;
  text-align: left;
  height: 214px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid hsla(0, 0%, 60.8%, 0.17);
  border-top: 0px;

  h3 {
    padding: 0 0 8px;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    padding: 0px;
    font-size: 14px;
    line-height: 24px;
  }
`;

export const MoreButton = styled.div`
  margin-top: 32px;
`;
