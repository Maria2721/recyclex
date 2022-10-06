import "./Worker.scss";
import WorkerDesktop from "../../assets/imgs/workers_desktop.png";

export default function Worker({position, surname, name, phone, email}) {
    return (
        <div className="worker">
            <div className="worker__imgWrapper">
                <img className="worker__img" alt="Worker" src={WorkerDesktop}/>
            </div>
            <div className="worker__info">
                <span className="worker__position">{position}</span>
                <div className="worker__name">
                    <span className="worker__surname">{surname}</span>
                    <span className="worker__firstname">{name}</span>
                </div>
                <div className="worker__contacts">
                    <span>{phone}</span>
                    <span>{email}</span>
                </div>
            </div>
        </div>
    );
}