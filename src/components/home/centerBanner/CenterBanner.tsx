import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./CenterBanner.module.css";
const CenterBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    };

    const banners = [
        { id: 1, text: "지점 이벤트 표시 1" },
        { id: 2, text: "지점 이벤트 표시 2" },
        { id: 3, text: "지점 이벤트 표시 3" },
        // 더 많은 배너 추가 가능
    ];

    return (
        <div className={styles.bannerContainer}>
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className={styles.bannerSlide}>
                        <div className={styles.bannerContent}>
                            {banner.text}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CenterBanner;
