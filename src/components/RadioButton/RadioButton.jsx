import "./RadioButton.scss";

export default function RadioButton({id, value, name}) {
    return (
        <div className="radio">
            <input className="radio_input" id={id} type="radio" value={value} name={name}/>
            <label className="radio_label" htmlFor={id}>{value}</label>
        </div>
    );
}