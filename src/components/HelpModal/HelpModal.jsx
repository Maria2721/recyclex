import "./HelpModal.scss";
import HelpInput from "../HelpInput/HelpInput";
import { helpFields } from "./helpFields";
import { Link } from "react-router-dom";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert_icon.svg";
import { ReactComponent as AlertIconWhite } from "../../assets/imgs/alert_icon_white.svg";
import { ReactComponent as LogoBlack } from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite } from "../../assets/imgs/logo_white.svg";
import { ReactComponent as CloseIcon } from "../../assets/imgs/close_icon.svg";
import { useState } from "react";
import * as cx from "classnames";

export default function HelpModal({ handleModal, opened, theme }) {
  const classModal = cx("help", {
    "help help_show": opened,
  });

const [state, setState] = useState({
        helpSurname: {
            value: '',
            isDirty: false,
            error: ''
        },
        helpName: {
            value: '',
            isDirty: false,
            error: ''
        },
        helpMiddle: {
            value: '',
            isDirty: false,
            error: ''
        },
        helpCompany: {
            value: '',
            isDirty: false,
            error: ''
        },
        helpPhone: {
            value: '',
            isDirty: false,
            error: ''
        },
        helpQuestion: {
            value: '',
            isDirty: false,
            error: ''
        },
})
// const [isError, setIsError] = useState(false);

  const handleChange = (e, id, type) => {
      let value;
      switch (type) {
        case 'text':
            value = e.target.value.trimStart().replace(/ +/g, " ");
          break;
        case 'tel':
            value = e.target.value.trimStart().replace(/ +/g, " ").replace (/[^0-9+]/, '');
          break;
        default:
        value = e.target.value;
    }  

    setState({
      ...state,
      [id]: {
          ...state[id],
          value: value
      }
    });
  };

  const blurHandler = (type) => {
    setState((state) => ({
   ...state,
   [type]: {
       ...state[type],
       isDirty: true
   }
 }));
    validateForm()
}

const handleClick = () => {
    validateForm();
    //  пройтись и посмотреть, есть ли ошибки
};

const validateForm = () => {
    for (const field of helpFields) {
        const { rule, id } = field;
        const { value } = state[id];
        let error;

        switch (rule) {
            case 'required':
              if (value.length === 0) {
                error = 'Необходимо заполнить';
              }
              break;
            default:
            error = '';
        }    

        setState((state) => ({
            ...state,
            [id]: {
                ...state[id],
                error: error ? error : ''
            }
          }));
    }
}

  return (
    <div className={classModal}>
      <div className="help__inner">
        <div className="help__content">
          <div className="help__header">
            {theme === "light" ? (
              <LogoBlack className="help__logo" />
            ) : (
              <LogoWhite className="help__logo" />
            )}
            <button className="help__close">
              <CloseIcon className="help__cross" onClick={handleModal} />
            </button>
          </div>
          <div className="help__form">
            <div className="help__rows">
              {helpFields.map((item) => (
                <HelpInput
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  value={state[item.id].value}
                  type={item.type}
                  view={item.view}
                  theme={theme}
                  blurHandler={blurHandler}
                  handleChange={handleChange}
                  handleClick={handleClick}
                  errorMessage={state[item.id].error}
                  isDirty={state[item.id].isDirty}
                />
              ))}
            </div>
            <div className="help__footer">
               <div className="help__helper"></div>
                <div className="help__alertAndButton">
                    <div className="help__alert">
                      <>
                        {theme === "light" ? (
                          <AlertIcon className="help__alertIcon" />
                        ) : (
                          <AlertIconWhite className="help__alertIcon" />
                        )}
                      </>
                      <span>
                        Нажимая «Отправить», вы даете{" "}
                        <Link
                          to="/agreement"
                          target="_blank"
                          rel="noreferrer"
                          className="help__agreement">
                          согласие на обработку персональных данных
                        </Link>
                      </span>
                    </div>
                    <button
                      className="btn btn_modal"
                      onClick={handleClick}>
                      Отправить
                    </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}