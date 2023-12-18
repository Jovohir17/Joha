import React, {Component} from 'react';
import '../../Style/eng/Index__eng.scss';
import {useTranslation} from "react-i18next";
import i18n from "../i18next"; // Или другой корректный путь




function Section__eng() {

    const { t } = useTranslation(); // Получаем функцию t для перевода текстов

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };
        return (
            <>
                <div className="dd">
                    <section>
                        <hr/>

                        <div className="tt">
                            <h2 className="h22">{t('section.projects')}</h2>
                        </div>

                        <div className="d-flexx">
                            <div className="div1">

                            </div>

                            <div className="div2">

                            </div>

                        </div>


                        <div className="d-flexx">
                            <div className="card1">
                                <h2>maxway Site</h2>
                                <img src="./imgs/Gamburger.png" alt=""/>

                                <h3>{t('section.Burger')}</h3>

                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="">

                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="card2">


                                <h2>atlas site</h2>
                                <img src="../imgs/medicine.png" alt=""/>
                                <h3>
                                    {t('section.medicines')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="">

                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="d-flexx">
                            <div className="div3">

                            </div>

                            <div className="div4">

                            </div>

                        </div>


                        <div className="d-flexx">
                            <div className="card3">
                                <h2>atlas site</h2>
                                <img src="../imgs/medicine.png" alt=""/>
                                <h3>
                                    {t('section.medicines2')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="">

                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>

                            </div>

                            <div className="card4">
                                <h2>pizza site</h2>
                                <img src="./imgs/pizza.png" alt=""/>
                                <h3>
                                    {t('section.pizza')}
                                </h3>
                                <div className="button__link">
                                    <div className="dd1">

                                    </div>

                                    <a href="">

                                        <button>
                                            READ MORE
                                        </button>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="more">
                            <h3 className="all">{t('section.not')}</h3>
                        </div>

                        <div className="moree">
                            <h3>{t('section.soon')}</h3>
                        </div>

                        <hr/>
                    </section>
                </div>



            </>
        );
}

export default Section__eng;