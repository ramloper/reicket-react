import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./centerBanner.css";

const CenterBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const banners = [
        { id: 1, text: "지점 이벤트 표시 1" },
        { id: 2, text: "지점 이벤트 표시 2" },
        { id: 3, text: "지점 이벤트 표시 3" },
        // 더 많은 배너 추가 가능
    ];

    return (
        <div className="banner-container">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id} className="banner-slide">
                        <div className="banner-content">
                            {banner.text}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CenterBanner;
