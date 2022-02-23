const settings = {
    dots: false,  // 점은 안 보이게
    infinite: true, // 무한으로 즐기게
    speed: 500,
    slidesToShow: 4, //4장씩 보이게 해주세요
    slidesToScroll: 1, //1장씩 넘어가세요

    responsive: [ // 반응형 웹 구현 옵션
        {
            breakpoint: 1050, // 화면 사이즈 1200px
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};

export default settings