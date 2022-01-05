import React from 'react';
import './Competencies.module.css';
import c1 from './competency-1.svg';
import c2 from './competency-2.svg';
import c3 from './competency-3.svg';
import c4 from './competency-4.svg';
import c5 from './competency-5.svg';
import c6 from './competency-6.svg';
import c7 from './competency-7.svg';
import c8 from './competency-8.svg';

const Competencies = () => {
    return (
        <div>
            <section id="block-podderzhkasaytovkompetencii" class="block block-block-content block-block-content98f5a882-8740-43a4-ba85-7d4e48bd6007 clearfix">
                <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item"><div class="competencies">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <h2 class="block-title" >13  лет совершенствуем <br /> компетенции в Drupal <br /> разработке!</h2>
                                <div class="competencies-description">
                                    Разрабатываем и оптимизируем модули, расширяем <br /> функциональность сайтов, обновляем дизайн
                                </div>
                            </div>
                        </div>
                        <div class="row row-flex competencies-row">
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c1} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Добавление <br /> информации на сайт,<br /> создание новых <br /> разделов
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c2} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Разработка <br /> и оптимизация <br /> модулей сайта
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c3} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Интеграция с CRM, <br /> 1C, платежными <br /> системами, любыми <br /> веб-сервисами
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c4} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Любые доработки <br /> функционала <br /> и дизайна
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c5} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Аудит и мониторинг <br /> безопасности Drupal <br /> сайтов
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c6} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Миграция, импорт <br /> контента и апгрейд <br /> Drupal
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c7} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Оптимизация <br /> и ускорение <br /> Drupal-сайтов
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3 col-xs-6">
                                <div class="competency">
                                    <div class="competency-wrapper">
                                        <div class="competency-header">
                                            <div class="competency-icon"><img src={c8} class="img-responsive" /></div>
                                        </div>
                                        <div class="competency-body">
                                            Веб-маркетинг, <br /> консультации <br /> и работы по SEO
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

export default Competencies;