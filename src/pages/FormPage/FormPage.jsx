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
import { CSSTransition } from "react-transition-group"

export default function FormPage({ handleModal }) {
    const [step, setStep] = useState(0);
    const [firstAnswer, setFirstAnswer] = useState([]);
    const [secondAnswer, setSecondAnswer] = useState([]);
    const [thirdAnswer, setThirdAnswer] = useState({
        surname: '',
        name: '',
        middle: '',
        company: '',
        telephone: '',
        email: ''
    });
    const [fourthAnswer, setFourthAnswer] = useState('SMS');
    const [isErrorCheckbox, setIsErrorCheckbox] = useState(false)
    // const [formErrors, serFormErrors] = useState()
    const {surname, name, middle, company, telephone, email} = thirdAnswer;
    const stepData = questions[step];
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

    const handleChange = (e) => {
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


    const handleChangePersonalData = (e, type) => {
        let value = e.target.value.trimStart().replace(/ +/g, " ");

        setThirdAnswer({
            ...thirdAnswer,
            [type]: value,
        });
    }

    const validatePersonalData = (input) => {
        return input !== "";
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
                // firstAnswer.length === 0 ? setIsErrorCheckbox(true) : setStep((step) => step + 1)
                break;
            case 1:
                if (secondAnswer.length !== 0) {
                    setStep((step) => step + 1)
                    setIsErrorCheckbox(false) 
                } else {
                    setIsErrorCheckbox(true) 
                }
                // secondAnswer.length === 0 ? console.log('Выберете значение') : setStep((step) => step + 1)
                break;
            case 2:
                let isValid = [surname, name, company, telephone].every((input) => validatePersonalData(input));

                // if (isValid) {
                //     setStep((step) => step + 1)
                // } else {
                //     console.log('Заполните обязательные поля')
                // }
                isValid ? setStep((step) => step + 1) : console.log('Заполните обязательные поля')
                break;
            case 3:
                console.log(`Ответ №1: ${firstAnswer},
                Ответ №2: ${secondAnswer},
                Ответ №3: ${surname}, ${name}, ${middle}, ${company}, ${telephone}, ${email}
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
                        Фамилия - {surname} <br />
                        Имя - {name} <br />
                        {middle && `Отчество - ${middle}`} {middle && <br />}
                        Название организации - {company} <br />
                        Контактный номер телефона - {telephone} <br />
                        {email && `Ваш e-mail - ${email}`}
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
                                        onChange={(e)=> handleChange(e)}
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
                                    data={stepData.data}
                                    onChange={handleChangePersonalData}/>
                            </div>
                        }

                        {
                            questions[step].type === 'radio' &&
                            <div className='form__radio'>
                            {
                                questions[step].options.map((item) => (
                                    <RadioButton
                                        onChange={(e)=> handleChange(e)}
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