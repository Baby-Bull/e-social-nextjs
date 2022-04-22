import React, { useState } from "react";
import Slider from "react-slick";
import classNames from "classnames";

import styles from "src/components/home/home.module.scss";

import { bannersMockData, notificationMockData } from "../mockData/mockData";

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <div className={styles.slickArrow}>
        <img src="/assets/images/home_page/right_triangle.svg" alt="next" />
      </div>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={style} onClick={onClick}>
      <img src="/assets/images/home_page/left_triangle.svg" alt="prev" />
    </div>
  );
};

const BannerComponent = () => {
  const [banners] = useState(bannersMockData);
  const [notification] = useState(notificationMockData);

  const settingsSlick = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  const settingNotificationSlick = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    loop: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className={classNames(styles.sliderContainer, "homepage-banner")}>
      <Slider {...settingsSlick}>
        {banners.map((banner, index) => (
          <div key={index} className={styles.sliderItem}>
            <img className="pointer banner-item" alt={banner.src} src={banner.src} />
          </div>
        ))}
      </Slider>
      <div className={styles.notificationBanner}>
        <img src="/assets/images/home_page/ic_spiker_mute.svg" alt="spiker-mute" />
        <span className="title">{notification?.title}</span>
        <Slider style={{ display: "inline-grid", height: "initial" }} {...settingNotificationSlick}>
          {notification?.data?.map((item, index) => (
            <span key={index} className="content">
              {item?.content}
            </span>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerComponent;
