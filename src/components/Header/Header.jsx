import { Link, NavLink} from 'react-router-dom';
import "./Header.scss";


export default function Header() {
  return (
    <header className="header">
      <Link className="header__logo" to="/">
        <img src="../../assets/imgs/logo__black.svg" width="190"alt="Логотип Recyclex"></img>
      </Link>
      <nav className="app__menu">
        <ul>
          <li><NavLink to="/project">О проекте</NavLink></li>
          <li><NavLink to="/work">Схема работы</NavLink></li>
          <li><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
