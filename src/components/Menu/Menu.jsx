import React from 'react';
import s from './Menu.module.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animation';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} `;

const Menu = () => {
    return (
        <div>
            <header class="navbar navbar-default" id="navbar" role="banner">
                <div class="container">
                    <div class="navbar-header" class="d-sm-inline">
                        <div class="region region-navigation">


                            <a class="logo navbar-btn pull-left" href="" title="Главная" rel="home">
                                <img src="https://drupal-coder.ru/themes/custom/bootstrap_dc/images/logo-initlab.svg" alt="Главная" />
                            </a>

                        </div>
                    </div>

                    <div class="navbar-collapse-wrapper">

                        <div class="navbar-collapse collapse">
                            <div class="region region-navigation-collapsible">
                                <nav role="navigation" aria-labelledby="block-bootstrap-dc-main-menu-menu" id="block-bootstrap-dc-main-menu">

                                    <ul class="nav navbar-nav">
                                        <li><a href="" >Поддержка Drupal</a>
                                        </li>
                                        <li class="expanded dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">Администрирование </a>
                                            <div class="container-fluid dropdown-menu-wrapper">
                                                <ul className="menu dropdown-menu">
                                                    <li><a href="">Миграция</a>
                                                    </li>
                                                    <li><a href="">Бэкапы</a>
                                                    </li>
                                                    <li><a href="">Аудит безопасности</a>
                                                    </li>
                                                    <li><a href="">Оптимизация скорости</a>
                                                    </li>
                                                    <li><a href="" >Переезд на https</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                        <li><a href="" >Продвижение</a>
                                        </li>
                                        <li><a href="" >Реклама</a>
                                        </li>
                                        <li class="expanded dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">О нас </a>
                                            <div class="container-fluid dropdown-menu-wrapper">
                                                <ul class="menu dropdown-menu">
                                                    <li><a href="" >Команда</a>
                                                    </li>
                                                    <li><a href="" >Drupalgive</a>
                                                    </li>
                                                    <li><a href="">Блог</a>
                                                    </li>
                                                    <li><a href="" >Курсы Drupal</a>
                                                    </li>
                                                </ul>
                                            </div>

                                        </li>
                                        <li><a href="" >Проекты</a>
                                        </li>
                                        <li><a href="" >Контакты</a>
                                        </li>
                                    </ul>



                                </nav>

                            </div>

                        </div>

                        <Popup class={s.popup} trigger={<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse" ><span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span> </button>} position="left bottom">
                            <Bounce><div><nav role="navigation" aria-labelledby="block-bootstrap-dc-main-menu-menu" id="block-bootstrap-dc-main-menu">

                                <ul class="nav navbar-nav">
                                    <li><a href="" >Поддержка Drupal</a>
                                    </li>
                                    <li class="expanded dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown">Администрирование </a>
                                        <div class="container-fluid dropdown-menu-wrapper">
                                            <ul>
                                                <li><a href="">Миграция</a>
                                                </li>
                                                <li><a href="">Бэкапы</a>
                                                </li>
                                                <li><a href="">Аудит безопасности</a>
                                                </li>
                                                <li><a href="">Оптимизация скорости</a>
                                                </li>
                                                <li><a href="" >Переезд на https</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>
                                    <li><a href="" >Продвижение</a>
                                    </li>
                                    <li><a href="" >Реклама</a>
                                    </li>
                                    <li class="expanded dropdown"><a href="" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">О нас </a>
                                        <div class="container-fluid dropdown-menu-wrapper">
                                            <ul>
                                                <li><a href="" >Команда</a>
                                                </li>
                                                <li><a href="" >Drupalgive</a>
                                                </li>
                                                <li><a href="">Блог</a>
                                                </li>
                                                <li><a href="" >Курсы Drupal</a>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>
                                    <li><a href="" >Проекты</a>
                                    </li>
                                    <li><a href="" >Контакты</a>
                                    </li>
                                </ul>



                            </nav></div></Bounce>
                        </Popup>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Menu;