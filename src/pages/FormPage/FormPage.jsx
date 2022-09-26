import "./FormPage.scss";
import FormMessage from "../../components/FormMessage/FormMessage";
import FormAnswer from "../../components/FormAnswer/FormAnswer";
import { questions } from "./questions";
import Checkbox from "../../components/Checkbox/Checkbox";
import RadioButton from "../../components/RadioButton/RadioButton";

export default function FormPage() {
    return (
        <div className="form container__row">
            <div className="form__inner">
                <h1 className="form__header">Шаг 1</h1>
                <FormMessage>С какими группами отходов Вы работаете? </FormMessage>
                <div className="form__answer">
                    <FormAnswer>
                       {
                          questions[0].options.map((item) => (
                               <Checkbox key={item.id} value={item.value} id={item.id}/>
                           ))
                       }
                    </FormAnswer>
                    <FormAnswer>
                    {
                          questions[1].options.map((item) => (
                               <RadioButton key={item.id} value={item.value} id={item.id} name={item.name}/>
                           ))
                       }
                    </FormAnswer>
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


// баблы сделать пока просто рамкой, потом прихерачить туда жопку

// рисуем сразу все шаги, по состоянию переключаем их. По клику на кнопки переходим в следующее состояние