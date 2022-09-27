import "./FormAnswer.scss";
import * as cx from "classnames";

export default function FormAnswer({children, isSelect}) {
    const classFormAnswer = cx("formAnswer", {
        "formAnswer formAnswer_select": isSelect,
      });

    return (
        <div className={classFormAnswer}>
            {children}
        </div>
    );
}