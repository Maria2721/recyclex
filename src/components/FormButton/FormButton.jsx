import "./FormButton.scss";
import * as cx from "classnames";

export default function FormButton({children, isSelect}) {
    // const classFormAnswer = cx("formAnswer", {
    //     "formAnswer formAnswer_select": isSelect,
    //   });

    return (
        <div className="formButton">
        <button className="btn btn_smaller">Ответить</button>
        </div>
    );
}