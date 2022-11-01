import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as LogoBlack} from "../../assets/imgs/logo_black.svg";
import { ReactComponent as LogoWhite} from "../../assets/imgs/logo_white.svg";
import { ReactComponent as BurgerBlack} from "../../assets/imgs/burger_menu.svg";
import { ReactComponent as Close } from "../../assets/imgs/close_icon.svg";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { useState } from "react";
import * as cx from "classnames";
import { useDisableBodyScroll } from "../../hooks/useDisableBodyScroll";


export default function Header({toggleTheme, theme}) {
  let [opened, setOpened] = useState(false);
  useDisableBodyScroll(opened)

  const classNav = cx("header__nav", {
    "header__nav header__nav_active": opened,
  });

  const classOverlay = cx("header__overlay", {
    "header__overlay header__overlay_active": opened,
  });

  const handleClick = () => {
    if(opened) {
      setOpened(false)
    }
  }
  
  return (
    <header className="header container">
      <div className="header__inner container__row_wide">
          <BurgerBlack onClick={() => setOpened(!opened)} className="header__burger"/>
          <Link to="/">{theme === 'light'? <LogoBlack className="header__logo"/> : <LogoWhite className="header__logo"/>}</Link>
          <div className={classOverlay}></div>
        <nav className={classNav} onClick={handleClick}>
          <div className="header__navInner">
          {opened && (
              <button className="header__close" onClick={handleClick}>
                <Close className="header__closeIcon" />
              </button>
            )}
            <div className="header__links" onClick={e => e.stopPropagation()}>
              <Link to="/about-project" onClick={handleClick} className="header__link">О проекте</Link>
              <Link to="/work-scheme" onClick={handleClick} className="header__link">Схема работы</Link>
              <Link to="/contacts" onClick={handleClick} className="header__link">Контакты</Link>
              <Link to="/form" onClick={handleClick} className="header__link ">Присоединиться</Link>
            </div>
          </div>
        </nav>
        <SwitchTheme toggleTheme={toggleTheme} theme={theme}/>
      </div>
    </header>
  );
}