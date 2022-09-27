import "./FormMessage.scss";
import * as cx from "classnames";

export default function FormMessage({children, direction, isBig}) {
    const classMessage = cx("formMessage", {
        "formMessage formMessage_right": direction === 'right',
      });

      const classMessageBorder = cx("formMessage__border", {
        "formMessage__border_right": direction === 'right',
        "formMessage__border_big": isBig,
      });

    return (
        <div className={classMessage}>
            <div className={classMessageBorder}><span  className="formMessage__text">{children}</span></div>
        </div>
    );
}