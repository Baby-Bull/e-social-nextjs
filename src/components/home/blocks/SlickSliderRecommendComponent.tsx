import classNames from "classnames";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from "src/components/home/home.module.scss";
import { ISlickSliderRecommendComponentProps } from "src/constants/interfaces";

export const NextArrow = (props: any) => {
  const { className, style, onClick, srcImg } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <div className={styles.slickArrow}>
        <img src={srcImg} alt="next" />
      </div>
    </div>
  );
};

export const PrevArrow = (props: any) => {
  const { className, style, onClick, srcImg } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <div className={styles.slickArrow}>
        <img src={srcImg} alt="prev" className="rotate-180" />
      </div>
    </div>
  );
};

const setInfiniteSlick = (temp: number) => temp > 4;
const SlickSliderRecommendComponent: React.SFC<ISlickSliderRecommendComponentProps> = ({ items }) => {
  const settingsSlickOfNotification = {
    dots: 4,
    infinite: setInfiniteSlick(items?.length),
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow srcImg="/assets/images/home_page/ic_arrow_medium.svg" />,
    prevArrow: <PrevArrow srcImg="/assets/images/home_page/ic_arrow_medium.svg" />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className={classNames("slick-custom-recommend")}>
      <div className="box-content">
        <Slider {...settingsSlickOfNotification}>{items}</Slider>
      </div>
    </div>
  );
};

export default SlickSliderRecommendComponent;
