import "./FormAnswer.scss";

export default function FormAnswer(props) {
    return (
        <div className="formAnswer">
            <div className="formAnswer__inner">{props.children}</div>
        </div>
    );
}