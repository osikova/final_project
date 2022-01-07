import React from 'react';
import './Partners.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Partners = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        mobileFirst: false,
        arrows: false,
        responsive:
            [
                {
                    breakpoint: 600,
                    settings: {
                        autoplay: true,
                        pauseOnHover: false,
                        arrows: false,
                        slidesToShow: 2,
                        waitForAnimate: false
                    }
                }]
    };

    return (
        <div>
            <section class="views-element-container block block-views block-views-blockour-clients-block-1 clearfix" id="block-views-block-our-clients">
                <h2 class="block-title">С нами работают</h2>
                <div class="form-group">
                    <div class="view view-our-clients view-id-our_clients view-display-id-block_1 ">
                        <div class="view-header">
                            Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
                        </div>
                        <div class="attachment attachment-after">
                            <div class="views-element-container form-group">
                                <div class="view-content">
                                    <div id="slick-views-our-clients-block-1-2" class="slick slick--view--our-clients slick--view--our-clients--block-1 slick--optionset--our-clients-logo slick--multiple-view slick--initialized">
                                        <div id="slick-views-our-clients-block-1-2-slider" class="slick__slider slick-initialized slick-slider">
                                            <div class="slick-list draggable" aria-live="polite">
                                                <div class="slick-track">
                                                    <Slider {...settings}>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/lock-clock_com.png.webp?itok=aGZHj070'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/clinic-lor_ru.png.webp?itok=iCO6xw_s'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/welimir_com.png.webp?itok=WsIUe-tr'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/armscom_net.png.webp?itok=wrUd_q31'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/infodaymedia_com.png.webp?itok=WCRkD6E9'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/lightsstore_ru.png.webp?itok=2RReSL0c'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/semena-zakaz_ru.png.webp?itok=WjHIFtjg'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/scamatic.png.webp?itok=EAsPyLGY'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/kotlas-info_ru.gif.webp?itok=57DXrWxU'></img>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="attachment attachment-after">
                            <div class="views-element-container form-group">
                                <div class="view-content">
                                    <div id="slick-views-our-clients-block-1-2" class="slick slick--view--our-clients slick--view--our-clients--block-1 slick--optionset--our-clients-logo slick--multiple-view slick--initialized">
                                        <div id="slick-views-our-clients-block-1-2-slider" class="slick__slider slick-initialized slick-slider">
                                            <div class="slick-list draggable" aria-live="polite">
                                                <div class="slick-track">
                                                    <Slider {...settings}>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/lock-clock_com.png.webp?itok=aGZHj070'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/clinic-lor_ru.png.webp?itok=iCO6xw_s'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/welimir_com.png.webp?itok=WsIUe-tr'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/armscom_net.png.webp?itok=wrUd_q31'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/infodaymedia_com.png.webp?itok=WCRkD6E9'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/lightsstore_ru.png.webp?itok=2RReSL0c'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/semena-zakaz_ru.png.webp?itok=WjHIFtjg'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/scamatic.png.webp?itok=EAsPyLGY'></img>
                                                        </div>
                                                        <div>
                                                            <img class="img-responsive" src='https://drupal-coder.ru/sites/default/files/styles/our_clients_logo/public/projects/kotlas-info_ru.gif.webp?itok=57DXrWxU'></img>
                                                        </div>
                                                    </Slider>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Partners;