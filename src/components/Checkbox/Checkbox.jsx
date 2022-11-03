import "./Checkbox.scss";

export default function Checkbox({id, value, onChange}) {
    return (
        <div className="checkbox">
            <input className="checkbox__input" onChange={onChange} id={id} type="checkbox" value={value}/>
            <label className="checkbox__label" htmlFor={id}>
                <div className="checkbox__mark"></div>
                <div className="checkbox__text">{value}</div>
            </label>
        </div>
    );
}