import "./Contacts.scss";
import Worker from "../../components/Worker/Worker";

export default function Contacts() {
    return (
        <section className="contacts container__row">
            <h1 className="contacts__header">Контакты</h1>
            <div className="contacts__info">
                <div className="contacts__column">
                    <span className="contacts__subtitle">г. Москва</span>
                </div>
                <div className="contacts__column">
                    <span className="contacts__subtitle">Адрес</span>
                    <span>Пресненская набережная д.12, офис 405, помещ.3</span>
                </div>
                <div className="contacts__column">
                    <span className="contacts__subtitle">Для связи</span>
                    <div className="contacts__numbers">
                        <span>+7 (473) 252-80-40</span>
                        <span>+7 (473) 252-80-37</span>
                        <span>+7 (473) 252-80-39</span>
                    </div>
                </div>
                <div className="contacts__column">
                    <span className="contacts__subtitle">Директор представительства</span>
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