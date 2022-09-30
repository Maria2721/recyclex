import "./RadioButton.scss";

export default function RadioButton({id, value, name, onChange, defaultChecked}) {
    return (
        <div className="radio">
            <input className="radio__input" onChange={onChange} id={id} type="radio" value={value} name={name} defaultChecked={defaultChecked}/>
            <label className="radio__label" htmlFor={id}><span className="radio__mark"></span>{value}</label>
        </div>
    );
}