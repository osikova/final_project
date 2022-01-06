import React from 'react';
import './Header.module.css';
import video from './video.mp4';
import cup from './cup.png';


const Header = () => {
    return (
        <div class="">
            <div className="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                <div className="support-main">
                    <div className="support-main-background">
                        <video autoplay="autoplay" loop="" class="fillWidth" playsinline="" preload="auto" muted="">
                            <source src={video} type="video/mp4" width="100%" />Your browser does not support the video tag. I suggest you upgrade your browser.
                        </video>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h1 className="page-title">Поддержка <br /> сайтов на Drupal</h1>
                                <div className="support-main-description">
                                    Сопровождение и поддержка сайтов <br />
                                    на CMS Drupal любых версий и запущенности
                                </div>
                                <div className="support-main-wrapper">
                                    <a href="#block-tariffs" class="support-main-btn flowing-scroll">Тарифы</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="row support-achievements">
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">#1 <img alt="1 место" src={cup} />
                                            </div>
                                            <div class="support-achievement-description">
                                                Drupal-разработчик <br /> в России по версии Рейтинга Рунета
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">3+
                                            </div>
                                            <div class="support-achievement-description">
                                                средний опыт <br /> специалистов более <br /> 3 лет
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">14
                                            </div>
                                            <div class="support-achievement-description">
                                                лет опыта в сфере Drupal
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">50+
                                            </div>
                                            <div class="support-achievement-description">
                                                модулей и тем <br /> в формате DrupalGive
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">90 000+</div>
                                            <div class="support-achievement-description">
                                                часов поддержки <br /> сайтов на Drupal
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-4 col-xs-6 support-achievement">
                                        <div class="support-achievement-wrapper">
                                            <div class="support-achievement-title">300+</div>
                                            <div class="support-achievement-description">
                                                Проектов <br /> на поддержке
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;