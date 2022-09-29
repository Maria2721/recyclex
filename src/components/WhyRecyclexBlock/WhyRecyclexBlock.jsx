import BorderThin from '../BorderThin/BorderThin';
import Exchange from "../../assets/imgs/screen_desktop.png";
import ExchangeTab from "../../assets/imgs/screen_table.png";

import "./WhyRecyclexBlock.scss";



export default function WhyRecyclexBlock() {
    return (  
        <section className="whyRecyclex">
            <h1 className="whyRecyclex__title">Почему Recyclex?</h1>
            <BorderThin> 
                <div className="whyRecyclex__inner">
                    <div className="whyRecyclex__items">
                        <div className="whyRecyclex__item whyRecyclex__divider">
                            <h4 className="whyRecyclex__subTitle ">Готовая база предприятий и организаций сферы переработки вторичных ресурсов</h4>
                            <p className="whyRecyclex__text">Это теплая целевая аудитория для ваших предложений</p>
                        </div>
                        <div className="whyRecyclex__item whyRecyclex__divider item_gradient">
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
                            <img srcSet={`${ExchangeTab} 256w, ${Exchange} 476w`} sizes="(max-width: 959px) 250px, (min-width:960px) 400px"  src={Exchange} width="476px" alt="img exchange"/>
                    </div>
                    </div>
                </BorderThin>
        </section>  
    );
}