import "./HelpInput.scss";
import * as cx from "classnames";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function HelpInput({
  id,
  name,
  view,
  type,
  value,
  isDirty,
  handleChange,
  blurHandler,
  errorMessage,
  phoneValue,
  handlePhoneValue
}) {
  const classInput = cx("help__input", {
    "help__input help__input_error": errorMessage && isDirty
  });

  return (
    <div className="help__row">
      <label className="help__label" htmlFor={id}>
        {name}
      </label>
      <div className="help__inputWrapper">
        {errorMessage && isDirty && <div className="help__error">{errorMessage}</div>}
        
        {view === "input" && (
          <input
            className={classInput}
            onBlur={() => blurHandler(id)}
            onChange={(e) => handleChange(e, id, type)}
            type={type}
            id={id}
            name={id}
            value={value}
          />
        )}

        {view === "phone" && (
          <PhoneInput
          international
          defaultCountry="RU"
          name={id}
          value={phoneValue}
          type={type}
          onBlur={() => blurHandler(id)}
          onChange={handlePhoneValue}
          className={classInput}
          maxLength={25}
        />)}

        {view === "texterea" && (
            <textarea
              className={classInput}
              onBlur={() => blurHandler(id)}
              onChange={(e) => handleChange(e, id)}
              type={type}
              id={id}
              name={id}
              value={value}
              maxLength={5000}
            />
        )}
      </div>
    </div>
  );
}