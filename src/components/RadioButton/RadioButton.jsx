import "./RadioButton.scss";
import * as cx from "classnames";

export default function RadioButton({id, value, name}) {
    // const classRadioLabel = cx("radio__label", {
    //     "radio__label radio__label_big": isBig,
    //   });
    
    return (
        <div className="radio">
            <input className="radio__input" id={id} type="radio" value={value} name={name}/>
            <label className="radio__label" htmlFor={id}><span className="radio__mark"></span>{value}</label>
        </div>
    );
}

// <div className="radio__mark"></div>