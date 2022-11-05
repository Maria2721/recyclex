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
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { isPossiblePhoneNumber } from 'react-phone-number-input';

export default function FormPage({ handleModal }) {
    const [step, setStep] = useState(0);
    const [firstAnswer, setFirstAnswer] = useState([]);
    const [secondAnswer, setSecondAnswer] = useState([]);
    const [phoneValue, setPhoneValue] = useState('');
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
    const {surname, name, middle, company, phone, email} = thirdAnswer;
    const stepData = questions[step];
    const formFields = questions[2].fields;
    const navigate = useNavigate();
    const $buttonRef = useRef(null);
    const $messageRef1 = useRef(null);
    const $messageRef2 = useRef(null);
    const $messageRef3 = useRef(null);
    const $messageRef4 = useRef(null);
    const $messageRef5 = useRef(null);
    const $messageRef6 = useRef(null);

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

const handleChangePersonalData = (e, id, type) => {
    let value;
      switch (type) {
        case 'text':
            value = e.target.value.trimStart().replace(/ +/g, " ");
          break;
        default:
        value = e.target.value;
    }  

    setThirdAnswer({
      ...thirdAnswer,
      [id]: {
          ...thirdAnswer[id],
          value: value
      }
    });
}

const validatePersonalData = () => {
    setValid(true);
    const regName = /^[A-ZА-ЯЁ\s'-]+$/i;
    const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  
      for (const field of formFields) {
          const { rule, id } = field;
          const { value } = thirdAnswer[id];
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
                if (!regEmail.test(value)) { // еще пофиксить
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
        switch (step) {
            case 0:
                if (firstAnswer.length !== 0) {
                    setStep((step) => step + 1)
                    setIsErrorCheckbox(false) 
                } else {
                    setIsErrorCheckbox(true) 
                }
                break;
            case 1:
                if (secondAnswer.length !== 0) {
                    setStep((step) => step + 1)
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
                valid && setStep((step) => step + 1)
                break;
            case 3:
                console.log(`Ответ №1: ${firstAnswer},
                Ответ №2: ${secondAnswer},
                Ответ №3: ${surname.value}, ${name.value}, ${middle.value}, ${company.value}, ${thirdAnswer.telephone}, ${thirdAnswer.email}
                Ответ №4:${fourthAnswer}. `)
                
                navigate('/');
                handleModal()
                break;
            default:
                console.log('Клик по кнопке')
        }
    }

    return (
        <div className="form container__row">
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
                        {middle.value && `Отчество - ${middle.value}`} {middle.value && <br />}
                        Название организации - {company.value} <br />
                        Контактный номер телефона - {phone.value} <br />
                        {email.value && `Ваш e-mail - ${email.value}`}
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
                                        onChange={(e)=> handleChangeCheckboxAndRadio(e)}
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
                                        onChange={(e)=> handleChangeCheckboxAndRadio(e)}
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
                        <FormButton onClick={handleClick}/><span ref={$buttonRef}></span>
                    </FormAnswer>
                </div>
            </div>
        </div>
    );
}