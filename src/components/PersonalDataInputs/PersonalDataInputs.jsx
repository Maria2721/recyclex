import "./PersonalDataInputs.scss";

export default function PersonalDataInputs(props) {
    return (
        <div className="personalData">
            <input className="personalData__input" type="text" placeholder="Фамилия*"/>
            <div className="personalData__firstAndMiddle">
                <input className="personalData__input" type="text" placeholder="Имя*"/>
                <input className="personalData__input" type="text" placeholder="Отчество"/>
            </div>
            <input className="personalData__input" type="text" placeholder="Название организации*"/>
            <input className="personalData__input" type="text" placeholder="Контактный номер телефона*"/>
            <input className="personalData__input" type="text" placeholder="Ваш E-mail"/>
        </div>
    );
}