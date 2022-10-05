import "./Contacts.scss";
import Worker from "../../components/Worker/Worker";

export default function Contacts() {
    return (
        <section className="contacts container__row">
            <h1 className="contacts__header">Контакты</h1>
            <div className="contacts__info">
                <div className="contacts__city contacts__column">
                    <span className="contacts__subtitle contacts__subtitle_bigger">г. Москва</span>
                </div>
                <div className="contacts__address contacts__column">
                    <span className="contacts__subtitle">Адрес</span>
                    <span className="contacts__description">Пресненская набережная д.12, офис 405, помещ.3</span>
                </div>
                <div className="contacts__contacts contacts__column">
                    <span className="contacts__subtitle">Для связи</span>
                    <div className="contacts__numbers contacts__description">
                        <span>+7 (473) 252-80-40</span>
                        <span>+7 (473) 252-80-37</span>
                        <span>+7 (473) 252-80-39</span>
                    </div>
                </div>
                <div className="contacts__director contacts__column">
                    <span className="contacts__subtitle contacts__description">Директор представительства</span>
                    <span>Юрьева Анна Владимировна</span>
                </div>
            </div>
            <div className="contacts__map"></div>
            <div className="contacts__workers">
                <Worker/>
                <Worker/>
            </div>
        </section>
    );
}