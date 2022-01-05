import React from 'react';
import './DevTime.module.css';


const DevTime = () => {
    return (
        <div class="competencies without-padding-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="block-title">Наши профессиональные разработчики выполняют быстро любые задачи</h2>
                        <div class="Dev-tasks-description">
                        </div>
                    </div>
                </div>
                <div class="row row-flex Dev-tasks-row">
                    <div class="col-sm-4 col-xs-12">
                        <div class="Dev-tasks">
                            <div class="Dev-tasks-wrapper">
                                <div class="Dev-tasks-header">
                                    {/*<div class="Dev-tasks-img"><img src={logo1} class="img-responsive"></img></div>*/}
                                </div>
                                <div class="Dev-tasks-body">
                                    <div class="Dev-tasks-time">от 1ч</div>
                                    Настройка события GA <br></br> в интернет-магазине
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="Dev-tasks">
                            <div class="Dev-tasks-wrapper">
                                <div class="Dev-tasks-header">
                                    {/*<div class="Dev-tasks-img"><img src={logo2} class="img-responsive"></img></div>*/}
                                </div>
                                <div class="Dev-tasks-body">
                                    <div class="Dev-tasks-time">от 20ч</div>
                                    Разработка мобильной <br></br> версии сайта
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4 col-xs-12">
                        <div class="Dev-tasks">
                            <div class="Dev-tasks-wrapper">
                                <div class="Dev-tasks-header">
                                    {/*<div class="Dev-tasks-img"><img src={logo3} class="img-responsive"></img></div>*/}
                                </div>
                                <div class="Dev-tasks-body">
                                    <div class="Dev-tasks-time">от 8ч</div>
                                    Интеграция <br></br> модуля оплаты
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevTime;