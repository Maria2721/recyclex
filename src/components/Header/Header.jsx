import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack} from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite} from "../../assets/imgs/logo_white.svg";
import { ReactComponent as BurgerBlack} from "../../assets/imgs/burger_menu.svg";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { useState } from "react";
import * as cx from "classnames";


export default function Header({toggleTheme, theme}) {
  let [opened, setOpened] = useState(false);

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const handleClick = () => {
    if(opened) {
      setOpened(false)
    }
  }
  
  return (
    <header className="header container">
      <div className="header__inner container__row">
          <SwitchTheme toggleTheme={toggleTheme} theme={theme}/>
        <nav className={classNav} onClick={handleClick}>
          <div className="header__links" onClick={e => e.stopPropagation()}>
            <Link to="/about-project" onClick={() => setOpened(!opened)} className="header__link">О проекте</Link>
            <Link to="/work-scheme" onClick={() => setOpened(!opened)} className="header__link">Схема работы</Link>
            <Link to="/contacts" onClick={() => setOpened(!opened)} className="header__link">Контакты</Link>
          </div>
        </nav>
        <Link to="/">{theme === 'light'? <LogoBlack className="header__logo"/> : <LogoWhite className="header__logo"/>}</Link>
        <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/>
      </div>
    </header>
  );
}