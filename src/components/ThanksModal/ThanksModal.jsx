import "./ThanksModal.scss";
import { ReactComponent as Thanks} from "../../assets/imgs/thanks.svg";
import * as cx from "classnames";


export default function ThanksModal({ handleModal, opened }) {
    const classThanksModal = cx("thanksModal", {
        "thanksModal_show": opened,
    });
    return (  
        <div className={classThanksModal}>
            <div className="thanksModal__inner">
                <div className="thanksModal__content">
                    <h1 className="thanksModal__header">Спасибо</h1>
                    <Thanks className="thanksModal__image"/>
                    <p className="thanksModal__description">Ваша заявка успешно отправлена!<br/>Ожидайте сообщения!</p>
                    <button onClick={handleModal} className="btn btn_smaller">Закрыть</button>
                </div>
            </div>
        </div>  
    );
}