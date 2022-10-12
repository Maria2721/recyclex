import "./FormPage.scss";
import FormMessage from "../../components/FormMessage/FormMessage";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import FormButton from "../../components/FormButton/FormButton";
import { questions } from "./questions";
import Checkbox from "../../components/Checkbox/Checkbox";
import RadioButton from "../../components/RadioButton/RadioButton";
import PersonalDataInputs from "../../components/PersonalDataInputs/PersonalDataInputs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group"

export default function FormPage() {
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
    let {surname, name, middle, company, telephone, email} = thirdAnswer;
    const stepData = questions[step];
    const navigate = useNavigate();

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
                    window.scrollTo({
                        top: 650,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    console.log('Выберете значение')
                }
                // firstAnswer.length === 0 ? console.log('Выберете значение') : setStep((step) => step + 1)
                break;
            case 1:
                if (secondAnswer.length !== 0) {
                    setStep((step) => step + 1)
                    window.scrollTo({
                        top: 700,
                        left: 0,
                        behavior: 'smooth'
                    });
                    
                } else {
                    console.log('Выберете значение')
                }
                // secondAnswer.length === 0 ? console.log('Выберете значение') : setStep((step) => step + 1)
                break;
            case 2:
                let isValid = [surname, name, company, telephone].every((input) => validatePersonalData(input));
                console.log(isValid);

                if (isValid) {
                    setStep((step) => step + 1)
                    window.scrollTo({
                        top: 900,
                        left: 0,
                        behavior: 'smooth'
                    });
                } else {
                    console.log('Заполните обязательные поля')
                }
                // isValid ? setStep((step) => step + 1) : console.log('Заполните обязательные поля')
                break;
            case 3:
                console.log(`Ответ №1: ${firstAnswer},
                Ответ №2: ${secondAnswer},
                Ответ №3: ${surname}, ${name}, ${middle}, ${company}, ${telephone}, ${email}
                Ответ №4:${fourthAnswer}. `)
                
                navigate('/thank-you');
                break;
            default:
                console.log('Клик по кнопке')
        }
    }

    return (
        <div className="form container__row">
            <div className="form__inner">
                <h1 className="form__header">Шаг {step + 1}</h1>
                <FormMessage direction='left'>С какими группами отходов Вы работаете?</FormMessage>

                <CSSTransition in={step >= 1} timeout={1000} classNames="transition-answer">
                    <div>
                        {step >= 1 && <FormMessage direction='right'>{firstAnswer.join(', ')}</FormMessage>}
                    </div>
                </CSSTransition>
                <CSSTransition in={step >= 1} timeout={1000} classNames="transition-question">
                    <div>
                        {step >= 1 && <FormMessage direction='left'>{questions[1].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <CSSTransition in={step >= 2} timeout={1000} classNames="transition-answer">
                    <div>
                        {step >= 2 && <FormMessage direction='right'>{secondAnswer.join(', ')}</FormMessage>}
                    </div>
                </CSSTransition>
                <CSSTransition in={step >= 2} timeout={1000} classNames="transition-question">
                    <div>
                        {step >= 2 && <FormMessage direction='left'>{questions[2].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <CSSTransition in={step >= 3} timeout={1000} classNames="transition-answer">
                    <div>
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
                <CSSTransition in={step >= 3} timeout={1000} classNames="transition-question">
                    <div>
                        {step >= 3 && <FormMessage direction='left'>{questions[3].question}</FormMessage>}
                    </div>
                </CSSTransition>

                <div className="form__answer">
                    <FormAnswer>
                        {
                            stepData.type === 'checkbox' &&
                            <div className='form__checkbox'>
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
                        }
                        
                        {
                            stepData.type === 'personalData' &&
                            <div className='form__personalData'>
                                <div className="form__personalData">
                                    <PersonalDataInputs
                                    data={stepData.data}
                                    onChange={handleChangePersonalData}/>
                                    </div>
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
                        <FormButton onClick={handleClick}/>
                    </FormAnswer>
                </div>
            </div>
        </div>
    );
}