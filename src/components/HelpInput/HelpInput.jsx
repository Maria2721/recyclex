import "./HelpInput.scss";
import * as cx from "classnames";

export default function HelpInput({
  id,
  name,
  view,
  type,
  value,
  isDirty,
  handleChange,
  blurHandler,
  errorMessage
}) {
  const classInput = cx("help__input", {
    "help__input help__input_error": (errorMessage && isDirty) || errorMessage,
  });

  return (
    <div className="help__row">
      <label className="help__label" htmlFor={id}>
        {name}
      </label>
      <div className="help__inputWrapper">
        {((errorMessage && isDirty) || errorMessage) && <div className="help__error">Необходимо заполнить</div>}
        
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

        {view === "texterea" && (
            <textarea
              className={classInput}
              onBlur={() => blurHandler(id)}
              onChange={(e) => handleChange(e, id)}
              type={type}
              id={id}
              name={id}
              value={value}
            />
        )}
      </div>
    </div>
  );
}
