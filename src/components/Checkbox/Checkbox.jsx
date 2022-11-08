import "./Checkbox.scss";

export default function Checkbox({id, value, handleChange}) {
    return (
        <div className="checkbox">
            <input className="checkbox__input" onChange={(e)=> handleChange(e)} id={id} type="checkbox" value={value}/>
            <label className="checkbox__label" htmlFor={id}>
                <div className="checkbox__mark"></div>
                <div className="checkbox__text">{value}</div>
            </label>
        </div>
    );
}