import React from 'react';
import './Expertise.module.css';
import laptop from './laptop.png';

const Expertise = () => {
    return (
        <div class="expertise">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-xs-12 col-md-offset-6">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="block-title">Экспертиза в Drupal,<br /> опыт 14 лет!</h2>
                            </div>
                        </div>
                        <div class="row row-flex expertise-row">
                            <div class="col-sm-6 col-xs-12 expertise-col">
                                <div class="expertise-item">
                                    <div class="expertise-item-body">
                                        Только системный подход – контроль версий, резервирование и тестирование!
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12 expertise-col">
                                <div class="expertise-item">
                                    <div class="expertise-item-body">
                                        Только Drupal сайты, не берем на поддержку сайты на других CMS!
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12 expertise-col">
                                <div class="expertise-item">
                                    <div class="expertise-item-body">
                                        Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем <a href="/drupalgive">свои модули Drupal</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6 col-xs-12 expertise-col">
                                <div class="expertise-item">
                                    <div class="expertise-item-body">
                                        Поддерживаем сайты на Drupal 5, 6, 7 и 8
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="expertise-img"><img alt="Helpdesk" class="img-responsive" src={laptop} /></div>
        </div>
    );
}

export default Expertise;