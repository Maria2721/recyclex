import "./Worker.scss";
import WorkerDesktop from "../../assets/imgs/workers_desktop.png";

export default function Worker() {
    return (
        <div className="worker">
            <div className="worker__imgWrapper">
                <img className="worker__img" alt="Worker" src={WorkerDesktop}/>
            </div>
            <div className="worker__info">
                <span className="worker__position">Главный специалист отдела закупок и контроля затрат</span>
                <div className="worker__name">
                    <span className="worker__surname">Иванова</span>
                    <span className="worker__firstname">Алиса Ивановна</span>
                </div>
                <div className="worker__contacts">
                    <span>+7(495) 783-35-34 (доб. 51-42)</span>
                    <span>AASirotenko@vtbf.ru</span>
                </div>
            </div>
        </div>
    );
}