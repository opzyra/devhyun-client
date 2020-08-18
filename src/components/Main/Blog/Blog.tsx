import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { mdiArrowRight } from "@mdi/js";

import {
  StyledBlog,
  Inner,
  BlogList,
  BlogContent,
  BlogThumbnail,
  MoreButton,
} from "./Blog.style";

import Button from "@/components/Button";

const Blog: React.FC = () => {
  return (
    <StyledBlog>
      <Inner>
        <h2>Blog</h2>
        <p>개발과 관련된 다양한 이야기들을 정성을 담아 기록하고 있습니다.</p>
        <BlogList>
          <Swiper
            className="blog-swiper"
            navigation
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={1000}
            autoplay={{ delay: 5000 }}
          >
            <SwiperSlide>
              <Link href="/">
                <a>
                  <BlogThumbnail>
                    <img src="https://devhyun.com/uploads/20200105/th_Ii2VzC0206r9L10N20BdpG5l35hH.jpeg" />
                    <div className="white-mask"></div>
                  </BlogThumbnail>
                  <BlogContent>
                    <h3>SpringBoot 토이 프로젝트로 공부한 것들</h3>
                    <p>
                      1년간 서비스를 했었던 JABIS 웹 애플리케이션을
                      정리하였습니다. 토이 프로젝트로 진행했던 애플리케이션인
                      만큼 개발과정이 정말 재미있었고 누군가 사용하는게 참...
                    </p>
                  </BlogContent>
                </a>
              </Link>
            </SwiperSlide>
          </Swiper>
        </BlogList>
        <MoreButton>
          <Button
            buttonStyle="primary"
            size="large"
            type="button"
            label="블로그 더 보기"
            route="/s"
            mdi={mdiArrowRight}
          />
        </MoreButton>
      </Inner>
    </StyledBlog>
  );
};

export default Blog;
