import "./FormPage.scss";
import * as cx from "classnames";
import { ReactComponent as AlertIcon} from "../../assets/imgs/alert_form.svg";
import FormMessage from "../../components/FormMessage/FormMessage";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import FormButton from "../../components/FormButton/FormButton";
import { questions } from "./questions";
import Checkbox from "../../components/Checkbox/Checkbox";
import RadioButton from "../../components/RadioButton/RadioButton";
import PersonalDataInputs from "../../components/PersonalDataInputs/PersonalDataInputs";
import { useState, useRef, useLayoutEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { isPossiblePhoneNumber } from 'react-phone-number-input';

export default function FormPage({ handleModal }) {
    const [step, setStep] = useState(0);
    const [firstAnswer, setFirstAnswer] = useState([]);
    const [secondAnswer, setSecondAnswer] = useState([]);
    const [phoneValue, setPhoneValue] = useState('');
    const [disabledButton, setDisabledButton] = useState(false);
    const [thirdAnswer, setThirdAnswer] = useState({
        surname: {
            value: '',
            isDirty: false,
            error: ''
        },
        name: {
            value: '',
            isDirty: false,
            error: ''
        },
        middle: {
            value: '',
            isDirty: false,
            error: ''
        },
        company: {
            value: '',
            isDirty: false,
            error: ''
        },
        phone: {
            value: '',
            isDirty: false,
            error: ''
        },
        email: {
            value: '',
            isDirty: false,
            error: ''
        },
});
    const [fourthAnswer, setFourthAnswer] = useState('SMS');
    const [isErrorCheckbox, setIsErrorCheckbox] = useState(false)
    const [valid, setValid] = useState(false);
    const {surname, name, middle, company, email} = thirdAnswer;
    const stepData = questions[step];
    const formFields = questions[2].fields;
    const $buttonRef = useRef(null);
    const $messageRef1 = useRef(null);
    const $messageRef2 = useRef(null);
    const $messageRef3 = useRef(null);
    const $messageRef4 = useRef(null);
    const $messageRef5 = useRef(null);
    const $messageRef6 = useRef(null);
    const data = { // данные, которые отправляем в форму
        activityProfile: secondAnswer.join("; "),
        companyName: company.value.trimStart().replace(/ +/g, " "),
        email: email.value.trimStart().replace(/ +/g, " "),
        mobileMumber: phoneValue.trimStart().replace(/ +/g, " "),
        name: name.value.trimStart().replace(/ +/g, " "),
        patronymic: middle.value.trimStart().replace(/ +/g, " "),
        replyType: fourthAnswer,
        scrapGroups: firstAnswer.join(', '),
        surname: surname.value.trimStart().replace(/ +/g, " ")
    }

    const classCheckboxError = cx("form__checkboxError", {
        "form__checkboxError_shown": isErrorCheckbox,
      });

    useLayoutEffect(() => {
        if (!$buttonRef.current) {
            return
        }
        const top = $buttonRef.current.offsetTop - window.innerHeight + 30
        window.scrollTo({
            top,
            left: 0,
            behavior: 'smooth'
        });
    }, [step])

    const handleChangeCheckboxAndRadio = (e) => {
        let newAnswer = null;
        let value = e.target.value;

        if (step === 0) {
            if (firstAnswer.includes(value)) {
                newAnswer = firstAnswer.filter((item) => item !== value);
                setFirstAnswer(newAnswer);
            } else {
                setFirstAnswer([...firstAnswer, value]) 
            }
        }

        if (step === 1) {
            if (secondAnswer.includes(value)) {
                newAnswer = secondAnswer.filter((item) => item !== value);
                setSecondAnswer(newAnswer);
            } else {
                setSecondAnswer([...secondAnswer, value]) 
            }
        }

        if (step === 3) {
            setFourthAnswer(value)
        }
    }
    const blurHandler = (type) => {
        setThirdAnswer((state) => ({
       ...state,
       [type]: {
           ...state[type],
           isDirty: true
       }
     }));
     validatePersonalData()
    }

const handleChangePersonalData = (e, id) => {
    // let value = e.target.value.trimStart().replace(/ +/g, " ");
    setThirdAnswer({
      ...thirdAnswer,
      [id]: {
          ...thirdAnswer[id],
          value: e.target.value
      }
    });
}

const validatePersonalData = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  
      for (const field of formFields) {
          const { rule, id } = field;
          const value = thirdAnswer[id].value.trimStart().replace(/ +/g, " ");
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
            case 'phone':
                if (!isPossiblePhoneNumber(phoneValue)) {
                  error = 'Недопустимая длина';
                  setValid(false);
                  break;
                }
                break;
            case 'email':
                if (value.length === 0) {
                  error = 'Необходимо заполнить';
                  setValid(false);
                  break;
                } 
                if (value.length < 5) {
                    error = 'Минимум 5 символов';
                    setValid(false);
                    break;
                  } 
                if (value.length > 200) {
                    error = 'Максимум 200 символов';
                    setValid(false);
                    break;
                }
                if (!regEmail.test(value)) {
                    error = 'Недопустимый формат';
                    setValid(false);
                    break;
                  }
                break;
              default:
              error = '';
          }    
  
          setThirdAnswer((state) => ({
              ...state,
              [id]: {
                  ...state[id],
                  error: error ? error : ''
              }
            }));
      }
  }

    const handleClick = () => {
        setDisabledButton(true)

        setTimeout(() => {
            setDisabledButton(false)
          }, 500);

        switch (step) {
            case 0:
                if (firstAnswer.length !== 0) {
                    setTimeout(() => {
                        setStep((step) => step + 1)
                      }, 300);

                    setIsErrorCheckbox(false) 
                } else {
                    setIsErrorCheckbox(true) 
                }
                break;
            case 1:
                if (secondAnswer.length !== 0) {
                    setTimeout(() => {
                        setStep((step) => step + 1)
                      }, 300);

                    setIsErrorCheckbox(false) 
                } else {
                    setIsErrorCheckbox(true) 
                }
                break;
            case 2:
                for (let key in thirdAnswer) { // проходим по стейту и отмечаем isDirty, чтобы отобразилась ошибка у всех
                    setThirdAnswer((state) => ({
                      ...state,
                      [key]: {
                          ...state[key],
                          isDirty: true
                      }
                    }));
                  }

                validatePersonalData()
                if (valid) {
                    setTimeout(() => {
                        setStep((step) => step + 1)
                      }, 300);
                }
                break;
            case 3:
                // console.log(`Ответ №1: ${data.scrapGroups}
                // Ответ №2: ${data.activityProfile}
                // Ответ №3: ${data.surname}, ${data.name}, ${data.patronymic}, ${data.companyName}, ${data.mobileMumber}, ${data.email}
                // Ответ №4:${data.replyType} `)
                sendData(data);
                
                setTimeout(() => {
                    handleModal()
                  }, 1000);

                break;
            default:
                console.log('Клик по кнопке')
        }
    }


const sendData = (data) => {
    const URL = process.env.REACT_APP_API_ADDRESS;

    fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                activity_profile: data.activityProfile,
                company_name: data.companyName,
                email: data.email,
                mobile_number: data.mobileMumber,
                name: data.name,
                patronymic: data.patronymic,
                reply_type: data.replyType,
                scrap_groups: data.scrapGroups,
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
        <section className="form container__row">
            <div className="form__inner">
                <h1 className="form__header">Шаг {step + 1} из 4</h1>
                <FormMessage direction='left'>С какими группами отходов Вы работаете?</FormMessage>

                <CSSTransition in={step >= 1} timeout={1000} classNames="transition-answer" nodeRef={$messageRef1}>
                    <div ref={$messageRef1} >
                        {step >= 1 && <FormMessage direction='right'>{firstAnswer.join(', ')}</FormMessage>}
                    </div>
                </CSSTransition>
                <CSSTransition in={step >= 1} timeout={1000} classNames="transition-question" nodeRef={$messageRef2}>
                    <div ref={$messageRef2}>
                        {step >= 1 && <FormMessage direction='left'>{questions[1].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <CSSTransition in={step >= 2} timeout={1000} classNames="transition-answer" nodeRef={$messageRef3}>
                    <div ref={$messageRef3}>
                        {step >= 2 && <FormMessage direction='right'>{secondAnswer.join(', ')}</FormMessage>}
                    </div>
                </CSSTransition>
                <CSSTransition in={step >= 2} timeout={1000} classNames="transition-question" nodeRef={$messageRef4}>
                    <div ref={$messageRef4}>
                        {step >= 2 && <FormMessage direction='left'>{questions[2].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <CSSTransition in={step >= 3} timeout={1000} classNames="transition-answer" nodeRef={$messageRef5}>
                    <div ref={$messageRef5}>
                        {step >= 3 && <FormMessage direction='right'>
                        Фамилия - {surname.value} <br />
                        Имя - {name.value} <br />
                        {middle.value && `Отчество - ${middle.value.trimStart().replace(/ +/g, " ")}`} {middle.value.trimStart().replace(/ +/g, " ") && <br />}
                        Название организации - {company.value.trimStart().replace(/ +/g, " ")} <br />
                        Контактный номер телефона - {phoneValue.trimStart().replace(/ +/g, " ")} <br />
                        {email.value && `Ваш e-mail - ${email.value.trimStart().replace(/ +/g, " ")}`}
                    </FormMessage>} 
                    </div>
                </CSSTransition>
                <CSSTransition in={step >= 3} timeout={1000} classNames="transition-question" nodeRef={$messageRef6}>
                    <div ref={$messageRef6}>
                        {step >= 3 && <FormMessage direction='left'>{questions[3].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <div className="form__answer">
                    <FormAnswer>
                        {
                            stepData.type === 'checkbox' &&
                            <div className='form__checkbox'>
                            <div className='form__checkboxInner'>
                                <div className={classCheckboxError}>
                                    <AlertIcon className="form__checkboxErrorIcon"/>
                                    <span className="form__checkboxErrorText">Ответьте, пожалуйста, на вопрос.</span>
                                </div>
                                {
                                    stepData.options.map((item) => (
                                        <Checkbox
                                        handleChange={handleChangeCheckboxAndRadio}
                                        key={item.id}
                                        value={item.value}
                                        id={item.id}/>
                                    ))
                                }
                                                        </div>
                            </div>
                        }
                        
                        {
                            stepData.type === 'personalData' &&
                            <div className='form__personalData'>
                                    <PersonalDataInputs
                                    data={stepData.fields}
                                    state={thirdAnswer}
                                    phoneValue={phoneValue}
                                    handlePhoneValue={setPhoneValue}
                                    blurHandler={blurHandler}
                                    handleChangePersonalData={handleChangePersonalData}/>
                            </div>
                        }

                        {
                            questions[step].type === 'radio' &&
                            <div className='form__radio'>
                            {
                                questions[step].options.map((item) => (
                                    <RadioButton
                                        handleChange={handleChangeCheckboxAndRadio}
                                        key={item.id}
                                        defaultChecked={item.checked}
                                        value={item.value}
                                        id={item.id}
                                        name={item.name}
                                    />
                                ))
                            }
                        </div>
                        }
                        <FormButton
                        disabled={disabledButton}
                        handleForm={handleClick}
                        step={step}
                        isValid={valid}
                        firstAnswer={firstAnswer}
                        secondAnswer={secondAnswer}/>
                        <span ref={$buttonRef}></span>
                    </FormAnswer>
                </div>
            </div>
        </section>
    );
}