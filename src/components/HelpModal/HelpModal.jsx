import "./HelpModal.scss";
import { ReactComponent as AlertIcon} from "../../assets/imgs/alert_icon.svg";
import { ReactComponent as LogoBlack} from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite} from "../../assets/imgs/logo_white.svg";
import { ReactComponent as CloseIcon} from "../../assets/imgs/close_icon.svg";
// import { useState } from "react";
import * as cx from "classnames";

export default function HelpModal({ handleModal, opened, theme}) {
    // const [shown, setShown] = useState(true);

    const classModal = cx('help', {
        'help help_show': opened,
    });

    return (
        <div className={classModal}>
            <div className="help__inner">
                <div className="help__content">
                    <div className="help__header">
                    {theme === 'light'? <LogoBlack className="help__logo"/> : <LogoWhite className="help__logo"/>}
                        <button className="help__close"><CloseIcon className="help__cross" onClick={handleModal}/></button>
                    </div>
                        <div className="help__form">
                                <div className="help__row">
                                    <label className="help__label" for="helpSurname">Фамилия*</label>
                                    <input className="help__input" type="text" id="helpSurname" name="helpSurname"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpName">Имя*</label>
                                    <input className="help__input" type="text" id="helpName" name="helpName"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpMiddle">Отчество</label>
                                    <input className="help__input" type="text" id="helpMiddle" name="helpMiddle"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpCompany">Название компании</label>
                                    <input className="help__input" type="text" id="helpCompany" name="helpCompany"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpCompany">Название компании</label>
                                    <input className="help__input" type="text" id="helpCompany" name="helpCompany"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpPhone">Номер телефона*</label>
                                    <input className="help__input" type="text" id="helpPhone" name="helpPhone"/>
                                </div>
                                <div className="help__row">
                                    <label className="help__label" for="helpQuestion">Ваш вопрос*</label>
                                    <div>
                                        <textarea className="help__input" type="text" id="helpQuestion" name="helpQuestion"/>
                                        <div className="help__alert">
                                            <div>
                                                <AlertIcon className="help__alertIcon"/>
                                            </div>
                                            <span>Нажимая «Отправить», вы даете согласие на обработку персональных данных</span>
                                        </div>
                                        {/* <button className="help__button btn btn_smaller">Отправить</button> */}
                                    </div>
                                </div>
                        </div>
                </div>
            </div>

        </div>
    );
}


