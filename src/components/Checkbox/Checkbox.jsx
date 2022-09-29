import "./Checkbox.scss";
import { ReactComponent as Mark} from "../../assets/imgs/checkbox_mark.svg";

export default function Checkbox({id, value}) {
    return (
        <div className="checkbox">
            <input className="checkbox__input" id={id} type="checkbox" value={value}/>
            <label className="checkbox__label" htmlFor={id}>
                <Mark className="checkbox__mark"/>
                <div className="checkbox__text">{value}</div>
                </label>
        </div>
    );
}