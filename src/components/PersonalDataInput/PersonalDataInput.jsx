import "./PersonalDataInput.scss";
import * as cx from "classnames";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function PersonalDataInput({
  id,
  name,
  value,
  type,
  handleChange,
  blurHandler,
  errorMessage,
  isDirty,
  phoneValue,
  handlePhoneValue
}) {
  const classInput = cx("personalDataInput__input", {
    personalDataInput__input_error: errorMessage && isDirty,
  });

  return (
    <div className="personalDataInput_inputWrapper">
      <label className="personalDataInput__label" htmlFor={id}>
        {name}
      </label>
      {type === "tel" && (
        <PhoneInput
          international
          defaultCountry="RU"
          value={phoneValue}
          type={type}
          onBlur={() => blurHandler(id)}
          onChange={handlePhoneValue}
          className={classInput}
        />
      )}

      {type !== "tel" && (
        <input
          className={classInput}
          onChange={(e) => handleChange(e, id, type)}
          onBlur={() => blurHandler(id)}
          value={value}
          type={type}
        />
      )}
      {errorMessage && isDirty && (
        <div className="personalDataInput__error">
          <span className="personalDataInput__errorText">{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
