import "./Checkbox.scss";

export default function Checkbox({id, value}) {
    return (
        <div className="checkbox">
            <input className="checkbox_input" id={id} type="checkbox" value={value}/>
            <label className="checkbox_label" htmlFor={id}>{value}</label>
        </div>
    );
}