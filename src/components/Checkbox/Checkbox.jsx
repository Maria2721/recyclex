import "./Checkbox.scss";

export default function Checkbox({id, value}) {
    return (
        <div className="checkbox">
            <input className="checkbox__input" id={id} type="checkbox" value={value}/>
            <label className="checkbox__label" htmlFor={id}>{value}</label>
        </div>
    );
}