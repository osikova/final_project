import React from 'react';
import './Team.module.css';
import p1 from './1.jpg';
import p2 from './2.jpg';
import p3 from './3.jpg';
import p4 from './4.jpg';
import p0 from './0.jpg';

const Team = () => {
    return (
        <div>
            <section class="views-element-container container block block-views block-views-blockteam-team-new clearfix" id="block-views-block-team-new">

                <h2 class="block-title">Команда</h2>


                <div class="form-group"><div class="">
                    <div class="view-content">
                        <div class="col-xs-6 col-sm-6 col-md-4 views-row"><div class="user-teaser">
                            <div class="user-teaser-photo">
                                <img src={p0} width="280" height="280" alt="" typeof="Image" class="img-responsive" />
                            </div>
                            <div class="user-teaser-name"><a href="" title="Профиль на drupal.org" target="_blank">Сергей Синица</a></div>
                            <div class="user-teaser-post">Руководитель отдела веб-разработки, канд. техн. наук, заместитель директора</div>
                        </div></div>
                        <div class="col-xs-6 col-sm-6 col-md-4 views-row"><div class="user-teaser">
                            <div class="user-teaser-photo">
                                <img src={p1} width="280" height="280" alt="" typeof="Image" class="img-responsive" />
                            </div>
                            <div class="user-teaser-name"><a href="" title="Профиль на drupal.org" target="_blank">Роман Агабеков</a></div>
                            <div class="user-teaser-post">Руководитель отдела DevOPS, директор</div>
                        </div></div>
                        <div class="col-xs-6 col-sm-6 col-md-4 views-row"><div class="user-teaser">
                            <div class="user-teaser-photo">
                                <img src={p2} width="280" height="280" alt="" typeof="Image" class="img-responsive" />
                            </div>
                            <div class="user-teaser-name"><a href="" title="Профиль на drupal.org" target="_blank">Алексей Синица</a></div>
                            <div class="user-teaser-post">Руководитель отдела поддержки сайтов</div>
                        </div></div>
                        <div class="col-xs-6 col-sm-6 col-md-4 views-row"><div class="user-teaser">
                            <div class="user-teaser-photo">
                                <img src={p3} width="280" height="280" alt="" typeof="Image" class="img-responsive" />
                            </div>
                            <div class="user-teaser-name"><a href="" title="Профиль на drupal.org" target="_blank">Дарья Бочкарёва</a></div>
                            <div class="user-teaser-post">Руководитель отдела продвижения, контекстной рекламы и контент-поддержки сайтов</div>
                        </div></div>
                        <div class="col-xs-6 col-sm-6 col-md-4 views-row"><div class="user-teaser">
                            <div class="user-teaser-photo">
                                <img src={p4} width="280" height="280" alt="" typeof="Image" class="img-responsive" />
                            </div>
                            <div class="user-teaser-name">Ирина Торкунова</div>
                            <div class="user-teaser-post">Менеджер по работе с клиентами</div>
                        </div></div>

                    </div>

                    <div class="more-link form-group"><a href="">Вся команда</a></div>

                </div>
                </div>

            </section>
        </div>
    );
}

export default Team;