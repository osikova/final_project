import React from 'react';
import './Footer.module.css'; 
import s from './Footer.module.css';
import Form from '../Form/Form.jsx';

const Footer = () => {
    return (
        <div>
            <footer class={s.footer} role="contentinfo">
                <div class=" container">
                    <div class="region region-footer">
                        <div id="block-podderzhkasaytovkontaktnayaforma" class="block block-block-content block-block-contentaf0b0005-c219-441b-a07a-c00a51d93bf4 clearfix">
                            <div class="row">

                                <div class="col-md-6 col-xs-12 col-sm-6">

                                    <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">
                                        <div class="block-form-wrapper">
                                            <div class="block-form-title">Оставить заявку на <br /> поддержку сайта
                                            </div>
                                            <div class="block-form-description">Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!
                                            </div>
                                            <div class="block-form-contacts">
                                                <ul>
                                                    <li class="block-form-phone"><a href="tel:88002222673">8 800 222-26-73</a></li>
                                                    <li class="block-form-email"><a href="mailto:info@drupal-coder.ru">info@drupal-coder.ru</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-xs-12 col-sm-6">
                                    <div class="field field--name-field-block-with-form-value field--type-entity-reference field--label-hidden field--item">
                                        <Form />
                                    </div>

                                </div>
                            </div>






                            <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item"><div class="social-links">
                                <ul class="social-links-wrapper">
                                    <li class="social-links-item"><a target="_blank" href=""><i class="fab fa-facebook-f"></i></a></li>
                                    <li class="social-links-item"><a target="_blank" href=""><i class="fab fa-vk"></i></a></li>
                                    <li class="social-links-item"><a target="_blank" href="" title="Свяжитесь с нами"><i class="fab fa-telegram-plane"></i></a></li>
                                    <li class="social-links-item"><a target="_blank" href=""><i class="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>

                                <p>Проект ООО «Инитлаб», Краснодар, Россия.
                                    <a class="goal__tel" href="tel:+78002222673"><a href="tel:88002222673">8 800 222-26-73</a></a><br />
                                    Drupal является зарегистрированной торговой маркой Dries Buytaert.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;