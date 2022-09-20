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
          <a className="header__link" href="http://loveyoucinema.com/?lang=ru">О проекте</a>
          <a className="header__link" href="http://loveyoucinema.com/?lang=ru">Схема работы</a>
          <a className="header__link" href="http://loveyoucinema.com/?lang=ru">Контакты</a>
          {/* <Link to="/">О проекте</Link>
          <Link to="/">Схема работы</Link>
          <Link to="/">Контакты</Link> */}
        </nav>
        <Logo className="header__logo"/>
      </div>
    </header>
  );
}
