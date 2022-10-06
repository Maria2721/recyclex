import "./HelpModal.scss";
import { ReactComponent as AlertIcon} from "../../assets/imgs/alert_icon.svg";

export default function HelpModal() {
    return (
        <div className="help">
            <div className="help__inner">
                <div className="help__labels">
                    <label className="help__label" for="helpSurname">Фамилия*</label>
                    <label className="help__label" for="helpName">Имя*</label>
                    <label className="help__label" for="helpMiddle">Отчество</label>
                    <label className="help__label" for="helpCompany">Название компании</label>
                    <label className="help__label" for="helpPhone">Номер телефона*</label>
                    <label className="help__label" for="helpQuestion">Ваш вопрос*</label>
                </div>
                <div className="help__form">
                    <div className="help__inputs">
                        <input className="help__input" type="text" id="helpSurname" name="helpSurname"/>
                        <input className="help__input" type="text" id="helpName" name="helpName"/>
                        <input className="help__input" type="text" id="helpMiddle" name="helpMiddle"/>
                        <input className="help__input" type="text" id="helpCompany" name="helpCompany"/>
                        <input className="help__input" type="text" id="helpPhone" name="helpPhone"/>
                    </div>
                    <textarea className="help__input" type="text" id="helpQuestion" name="helpQuestion"/>
                    <div className="help__alert">
                        <AlertIcon/>
                        <span>Нажимая «Отправить», вы даете согласие на обработку персональных данных</span>
                    </div>
                    <button className="help__button btn btn_smaller">Отправить</button>
                </div>
            </div>

            {/* <input className="personalData__input" onChange={(e) => onChange(e, 'surname')} type={data.surname.type} placeholder={data.surname.placeholder}/>
            <div className="personalData__firstAndMiddle">
                <input className="personalData__input" onChange={(e) => onChange(e, 'name')} type={data.name.type} placeholder={data.name.placeholder}/>
                <input className="personalData__input" onChange={(e) => onChange(e, 'middle')} placeholder={data.middle.placeholder}/>
            </div>
            <input className="personalData__input" onChange={(e) => onChange(e, 'company')} type={data.surname.company} placeholder={data.company.placeholder}/>
            <input className="personalData__input" onChange={(e) => onChange(e, 'telephone')} placeholder={data.telephone.placeholder}/>
            <input className="personalData__input" onChange={(e) => onChange(e, 'email')} placeholder={data.email.placeholder}/> */}
        </div>
    );
}