import "./FormMessage.scss";

export default function FormMessage(props) {
    return (
        <div className="formMessage">
            <span  className="formMessage__text">{props.children}</span>
        </div>
    );
}