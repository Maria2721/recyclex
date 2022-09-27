import "./FormPage.scss";
import FormMessage from "../../components/FormMessage/FormMessage";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import { questions } from "./questions";
import Checkbox from "../../components/Checkbox/Checkbox";
import RadioButton from "../../components/RadioButton/RadioButton";
import PersonalDataInputs from "../../components/PersonalDataInputs/PersonalDataInputs";
import { useState } from "react";

export default function FormPage() {
    const [step, setStep] = useState(1)

    return (
        <div className="form container__row">
            <div className="form__inner">
                <h1 className="form__header">Шаг {step}</h1>
                <FormMessage direction='left'>С какими группами отходов Вы работаете?</FormMessage>
                <FormMessage direction='right' isBig={true}>Полимеры, металл</FormMessage>
                <div className="form__answer">
                    <FormAnswer isSelect={true}>
                       {
                          questions[0].options.map((item) => (
                               <Checkbox key={item.id} value={item.value} id={item.id}/>
                           ))
                       }
                    </FormAnswer>
                    {/* <FormAnswer>
                    {
                          questions[2].options.map((item) => (
                               <RadioButton key={item.id} value={item.value} id={item.id} name={item.name} isBig={true}/>
                           ))
                       }
                    </FormAnswer> */}
                    {/* <FormAnswer isSelect={false}>
                        <PersonalDataInputs/>
                    </FormAnswer> */}
                </div>
            </div>
        </div>
    );
}



// массив с объектами, в которых вопрос, тип ответа, вариант ответа и порядковый номер (шаг)

// первый – селект с выбором своего ответа (множественный выбор ответов или нет?)
// второй - то же самое
// третий - форма с заполнением данных
// Фамилия Имя Отчество Организация Телефон Email
// четвертый – селект

// На каждом шаге сохраняем инфу и записываем в ответ, потом отправляем на бэк (пока что в консоль)


// рисуем сразу все шаги, по состоянию переключаем их. По клику на кнопки переходим в следующее состояние