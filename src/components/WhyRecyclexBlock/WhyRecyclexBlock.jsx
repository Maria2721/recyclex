import Exchange from "../../assets/imgs/screen_desktop.png";
import ExchangeTab from "../../assets/imgs/screen_table.png";
import ExchangeMob from "../../assets/imgs/screen_mobila.png";
import Exchange2k from "../../assets/imgs/screen_desktop@2k.png";
import ExchangeTab2k from "../../assets/imgs/screen_table@2k.png";
import ExchangeMob2k from "../../assets/imgs/screen_mobila@2k.png";

import "./WhyRecyclexBlock.scss";



export default function WhyRecyclexBlock() {
    return (  
        <section className="whyRecyclex">
            <h1 className="whyRecyclex__title">Почему Recyclex?</h1>
                <div className="whyRecyclex__inner">
                    <div className="whyRecyclex__items">
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle ">Готовая база предприятий и организаций сферы переработки вторичных ресурсов</h4>
                            <p className="whyRecyclex__text">Это теплая целевая аудитория для ваших предложений</p>
                        </div>
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle">Подробный каталог актуальных предложений по всем видам вторички</h4>
                            <p className="whyRecyclex__text">Находите сырье в заданном регионе, количестве. качестве и цене</p>
                        </div>
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle">Служба поддержки участников биржи</h4>
                            <p className="whyRecyclex__text">Совершайте безпасные сделки с проверенными контрагентами</p>
                            
                        </div>
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle">Средства аналитики рынка</h4>
                            <p className="whyRecyclex__text">Анализируйте динамику цен, рынок сбыта, тренды</p>
                            
                        </div>
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle">Тендеры и аукционы</h4>
                            <p className="whyRecyclex__text">Заключайте контракты на масштабные проекты</p>
                            
                        </div>
                        <div className="whyRecyclex__item">
                            
                            <h4 className="whyRecyclex__subTitle">Реклама своей продукции, услуг, предложений</h4>
                            <p className="whyRecyclex__text">Продвигайте объявления и увеличивайте охваты аудитории</p>
                            
                        </div>
                    </div>
                    <div className="whyRecyclex__img">
                            <img 
                                srcSet={`${ExchangeMob} 720w, ${ExchangeMob2k} 2x, ${ExchangeTab} 959w, ${ExchangeTab2k} 2x, ${Exchange} 1440w,  ${Exchange2k} 2x`} 
                                src={Exchange} 
                                alt="img exchange"/>
                    </div>
                </div>
        </section>  
    );
}