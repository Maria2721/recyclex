import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo} from "../../assets/imgs/logo_black.svg";
import SwitchTheme from "../SwitchTheme/SwitchTheme";


export default function Header() {
  return (
    <header className="header container">
      <div className="header__inner container__row">
          <SwitchTheme/>
        <nav className="header__nav">
          <Link to="/about-project" className="header__link">О проекте</Link>
          <Link to="/" className="header__link">Схема работы</Link>
          <Link to="/" className="header__link">Контакты</Link>
        </nav>
        <Link to="/"><Logo className="header__logo"/></Link>
      </div>
    </header>
  );
}
