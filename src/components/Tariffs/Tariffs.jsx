import React from 'react';
import './Tariffs.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Form from "../Form/Form"

const Tariffs = () => {
    return (
        <div>
            <section id="block-tariffs" class="block block-block-content block-block-content44e135e8-5c7a-4c25-9a28-466de4b12816 clearfix">
                <h2 class="block-title">Тарифы</h2>



                <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item"><div class="tariffs">
                    <div class="container">
                        <div class="row row-flex tariffs-row">
                            <div class="col-sm-4 col-xs-12 col-flex">
                                <div class="tariff">
                                    <div class="tariff-wrapper">
                                        <div class="tariff-header">
                                            <div class="tariff-title">Стартовый</div><br />
                                        </div>
                                        <div class="tariff-body">
                                            <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                            <div class="tarrif-body-item">Услуги дизайнера</div>
                                            <div class="tarrif-body-item">Неиспользованные оплаченные часы переносятся на следующий месяц</div>
                                            <div class="tarrif-body-item">Предоплата от 6 000 рублей в месяц</div>
                                        </div>
                                        <Popup trigger={<button> <div class="contact-form tariff-footer-btn">Свяжитесь с нами!</div> </button>} position="right bottom">
                                            <Form />
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-flex col-xs-12">
                                <div class="tariff">
                                    <div class="tariff-wrapper">
                                        <div class="tariff-header">
                                            <div class="tariff-title">Бизнес</div><br />
                                        </div>
                                        <div class="tariff-body ">
                                            <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                            <div class="tarrif-body-item">Услуги дизайнера</div>
                                            <div class="tarrif-body-item">Высокое время реакции - до 2 рабочих дней</div>
                                            <div class="tarrif-body-item">Неиспользованные оплаченные часы не переносятся</div>
                                            <div class="tarrif-body-item">Предоплата от 30 000 рублей в месяц</div>
                                        </div>
                                        <Popup trigger={<button> <div class="contact-form tariff-footer-btn">Свяжитесь с нами!</div> </button>} position="right bottom">
                                            <Form />
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-flex col-xs-12">
                                <div class="tariff">
                                    <div class="tariff-wrapper">
                                        <div class="tariff-header">
                                            <div class="tariff-title">VIP</div><br />
                                        </div>
                                        <div class="tariff-body">
                                            <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                            <div class="tarrif-body-item">Услуги дизайнера</div>
                                            <div class="tarrif-body-item">Максимальное время реакции - в день обращения</div>
                                            <div class="tarrif-body-item">Неиспользованные оплаченные часы не переносятся</div>
                                            <div class="tarrif-body-item">Предоплата от 270 000 рублей в месяц</div>
                                        </div>
                                        <Popup trigger={<button> <div class="contact-form tariff-footer-btn">Свяжитесь с нами!</div> </button>} position="right bottom">
                                            <Form />
                                        </Popup>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12">
                                <div class="tariffs-ps" >
                                    Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
                                    <a href="#" class="contact-form tariffs-link" >Получить индивидуальный тариф</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
            </section>
        </div>
    );
}

export default Tariffs;