import React from 'react';
import s from './Support.module.css';
import logo1 from './images/support1.svg';
import logo2 from './images/support2.svg';
import logo3 from './images/support3.svg';
import logo4 from './images/support4.svg';
import logo5 from './images/support5.svg';
import logo6 from './images/support6.svg';
import logo7 from './images/support7.svg';
import logo8 from './images/support8.svg';

const Support = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center">Поддержка <br></br>от Drupal-coder</h2>
                </div>
            </div>
            <div id={s.bot} class="row row-flex sup_blocks-row">
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">01.</div>
                                <div class="sup_block-title">Постановка задачи по Email</div>
                            </div>
                            <div class="sup_block-body">
                                Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.
                            </div>
                            <div class="sup_block-img"><img alt="Почта" src={logo1} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">02.</div>
                                <div class="sup_block-title">Система Helpdesk – отчетность, прозрачность</div>
                            </div>
                            <div class="sup_block-body">
                                Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.
                            </div>
                            <div class="sup_block-img"><img alt="Диаграмма" src={logo2} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">03.</div>
                                <div class="sup_block-title">Расширенная техническая поддержка</div>
                            </div>
                            <div class="sup_block-body">
                                Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.
                            </div>
                            <div class="sup_block-img"><img alt="Поддержка" src={logo3} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">04.</div>
                                <div class="sup_block-title">Персональный менеджер проекта</div>
                            </div>
                            <div class="sup_block-body">
                                Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.
                            </div>
                            <div class="sup_block-img"><img alt="Пользователь" src={logo4} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">05.</div>
                                <div class="sup_block-title">Удобные способы оплаты</div>
                            </div>
                            <div class="sup_block-body">
                                Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.
                            </div>
                            <div class="sup_block-img"><img alt="Оплата" src={logo5} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">06.</div>
                                <div class="sup_block-title">Работаем с SLA и NDA</div>
                            </div>
                            <div class="sup_block-body">
                                Работа в рамках соглашений о конфиденциальности и об уровне качества работ.
                            </div>
                            <div class="sup_block-img"><img alt="Документ" src={logo6} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">07.</div>
                                <div class="sup_block-title">Штатные специалисты</div>
                            </div>
                            <div class="sup_block-body">
                                Надежные штатные специалисты, никаких фрилансеров.
                            </div>
                            <div class="sup_block-img"><img alt="Сотрудники" src={logo7} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xs-12 sup_block-col">
                    <div class="sup_block">
                        <div class="sup_block-wrapper">
                            <div class="sup_block-header">
                                <div class="sup_block-num">08.</div>
                                <div class="sup_block-title">Удобные каналы связи</div>
                            </div>
                            <div class="sup_block-body">
                                Консультации по телефону, скайпу, в месенджерах.
                            </div>
                            <div class="sup_block-img"><img alt="Вопросы" src={logo8} class="img-responsive"></img></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Support;