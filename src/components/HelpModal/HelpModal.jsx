import "./HelpModal.scss";
import * as cx from "classnames";
import HelpInput from "../HelpInput/HelpInput";
import { helpFields } from "./helpFields";
import { Link } from "react-router-dom";
import { ReactComponent as AlertIcon } from "../../assets/imgs/alert_icon.svg";
import { ReactComponent as AlertIconWhite } from "../../assets/imgs/alert_icon_white.svg";
import { ReactComponent as LogoBlack } from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite } from "../../assets/imgs/logo_white.svg";
import { ReactComponent as CloseIcon } from "../../assets/imgs/close_icon.svg";
import { initialState } from "./initialState";
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import ButtonSend from "../ButtonSend/ButtonSend";
import { useState } from "react";

export default function HelpModal({ handleModal, opened, theme }) {
  const classModal = cx("help", {
    "help help_show": opened,
  });

const [state, setState] = useState(initialState)
const [phoneValue, setPhoneValue] = useState('');
const [valid, setValid] = useState(false);
const {helpSurname, helpName, helpMiddle, helpCompany, helpQuestion} = state;
console.log(helpSurname.value)
const data = { // данные, которые отправляем в форму
  companyName: helpCompany.value.trimStart().replace(/ +/g, " "),
  mobileMumber: phoneValue.trimStart().replace(/ +/g, " "),
  name: helpName.value.trimStart().replace(/ +/g, " "),
  patronymic: helpMiddle.value.trimStart().replace(/ +/g, " "),
  question: helpQuestion.value.trimStart().replace(/ +/g, " "),
  surname: helpSurname.value.trimStart().replace(/ +/g, " ")
}
  const handleChange = (e, id) => {
    // const value = e.target.value.trimStart().replace(/ +/g, " ");
    setState({
      ...state,
      [id]: {
          ...state[id],
          value: e.target.value
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

const validateForm = () => {
  setValid(true)
  const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
  
      for (const field of helpFields) {
          const { rule, id } = field;
          const value = state[id].value.trimStart().replace(/ +/g, " ");
          let error;
  
          switch (rule) {
              case 'name':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                if (!regName.test(value)) {
                    error = 'Недопустимые символы';
                    setValid(false);
                    break;
                  }
                break;
            case 'middle':
                if (value.length !== 0 && value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                if (value.length !== 0 && !regName.test(value)) {
                    error = 'Недопустимые символы';
                    setValid(false);
                    break;
                }
                break;
            case 'company':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                break;
            case 'phone':
                if (!isPossiblePhoneNumber(phoneValue)) {
                  error = 'Недопустимая длина';
                  setValid(false);
                  break;
                }
                break;
            case 'question':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length > 5000) {
                    error = 'Максимум 5000 символов';
                    setValid(false);
                    break;
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
const handleClick = () => {
  validateForm();

  for (let key in state) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
    setState((state) => ({
      ...state,
      [key]: {
          ...state[key],
          isDirty: true
      }
    }));
  }

  if (valid) {
    // console.log(`Фамилия: ${data.surname}
    //           Имя: ${data.name}
    //           Отчество: ${data.patronymic}
    //           Название компании:${data.companyName}
    //           Телефон: ${data.mobileMumber}
    //           Вопрос: ${data.question}`)
    // sendData(data)
    setState(initialState); // возвращаем состояние к началу
    setPhoneValue('');
  }
};

const sendData = (data) => {
  const URL = process.env.REACT_APP_API_ADDRESS_SUPPORT;

  fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        company_name: data.companyName,
        mobile_number: data.mobileMumber,
        name: data.name,
        patronymic: data.patronymic,
        question: data.question,
        surname: data.surname
      }),
      mode: 'cors'
  })

  .then((response) => {
      console.log(response)
  })
  
  .catch((e) => console.log(e))
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
                  phoneValue={phoneValue}
                  handlePhoneValue={setPhoneValue}
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
                      <div>
                        {theme === "light" ? (
                          <AlertIcon className="help__alertIcon" />
                        ) : (
                          <AlertIconWhite className="help__alertIcon" />
                        )}
                      </div>
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
                    <ButtonSend handleSendForm={handleClick} isValid={valid} handleModal={handleModal}>Отправить</ButtonSend>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}