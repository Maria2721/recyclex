import "./FormButton.scss";

export default function FormButton({ onClick }) {
    return (
        <div className="formButton">
        <button className="btn btn_smaller" onClick={onClick}>Ответить</button>
        </div>
    );
}