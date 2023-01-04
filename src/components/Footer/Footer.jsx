import "./Footer.scss";
import { ReactComponent as TelegramIcon} from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WhatsAppIcon} from "../../assets/imgs/whatsapp_icon.svg";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";


export default function Footer({ handleModal }) {
  const [focus, setFocus] = useState(false);
  const logoReference = useRef(null);
  useEffect(() => {
    if (focus === true) {
      logoReference.current.focus();
      setFocus(false);
    }
  }, [focus]);

  const handleFocus = () => {
    console.log("focus on logo");
    setFocus(true);
  };

  const navigate = useNavigate();

  const handleClick = (url) => {
    console.log(`click ${url}`);
    navigate(url);
    /* window.scrollTo(0, 0);
    setTimeout(() => { window.scrollTo(0, 0); }, 100); //добавила, чтоб скролить на вверх */
    window.scrollTo({ // этот код меняет поведение прокрутки на "smooth"
      top: 0,
      behavior: "smooth"
  });
  }

  return (
    <footer className="footer container">
        <div className="footer__inner container__row">
            <div className="footer__requisitesAndRights">
              <div className="footer__requisites">2021, ООО “Экополимер”<br/>ИНН 2309176846<br/><a href="#" className="footer__focusReset" ref={logoReference} >ТЕЛ: </a><a className="footer__telLink" href="tel:+78003330816"  >+7 (800) 333-08-16</a><br/>АДРЕС: Москва, Пресненская набережная, д. 12, офис 405, помещ. 3
              </div>
              <div className="footer__rights">Все права защищены</div>
            </div>
            <div className="footer__links">
              <div className="footer__pages">
                <Link to="/privacy-policy" onClick={(e) => {handleClick(e.target.pathname);handleFocus();}} onKeyDown={(e) => e.key === "Enter" && handleClick("/privacy-policy")} tabIndex={"0"} className="footer__link">Политика конфиденциальности</Link>
                <Link to="/general-terms" onClick={(e) => {handleClick(e.target.pathname);handleFocus();}} onKeyDown={(e) => e.key === "Enter" && handleClick("/general-terms")} tabIndex={"0"} className="footer__link">Общие условия</Link>
                <Link to="/cookies-policy-page" onClick={(e) => {handleClick(e.target.pathname);handleFocus();}} onKeyDown={(e) => e.key === "Enter" && handleClick("/cookies-policy-page")} tabIndex={"0"} className="footer__link">Cookies Policy</Link>
              </div>
              <button className="footer__manager footer__manager_desktop" onClick={() => {handleModal();handleFocus();}}>Связь с менеджером</button>
            </div>
              <div className="footer__contacts">
                <div className="footer__email"><a className="footer__emailLink" href="mailto:info@recyclex.online" onClick={() => handleFocus()}  >info@recyclex.online</a></div>
                <button className="footer__manager footer__manager_mobile" onClick={()=>{handleModal();handleFocus();}}>Связь с менеджером</button>
                <div className="footer__social">
                    <a
                      href='https://t.me/+79585787495'
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleFocus()} >
                          <TelegramIcon className="footer__icon" />
                    </a>
                    <a
                      href='https://wa.me/+79585787495'
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => handleFocus()} >
                          <WhatsAppIcon className="footer__icon" />
                    </a>
                </div>
              </div>
        </div>
    </footer>
  );
}