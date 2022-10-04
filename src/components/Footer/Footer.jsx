import { Link } from 'react-router-dom';
import "./Footer.scss";
import { ReactComponent as TelegramIcon} from "../../assets/imgs/telegram_icon.svg";
import { ReactComponent as WhatsAppIcon} from "../../assets/imgs/whatsapp_icon.svg";


export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__inner container__row">
          <div className="footer__requisitesAndRights">
            <div className="footer__requisites">2021, ООО “Экополимер”<br/>ИНН, 612509367304,  ТЕЛ: +7 (800) 333-08-16<br/>АДРЕС: Москва, Пресненская наб. д.12, офис 405, помещ.3
            </div>
            <div className="footer__rights">Все права защищены</div>
          </div>
          <div className="footer__links">
            <div className="footer__pages">
              <Link to="/privacy-policy" className="footer__link">Политика конфиденциальности</Link>
              <Link to="/general-terms" className="footer__link">Общие условия</Link>
              <Link to="/cookies-policy-page" className="footer__link">Cookies Policy</Link>
            </div>
            <button className="footer__manager footer__manager_desktop">Связь с менеджером</button>
          </div>
            <div className="footer__contacts">
              <div className="footer__email">info@recyclex.online</div>
              <button className="footer__manager footer__manager_mobile">Связь с менеджером</button>
              <div className="footer__social">
                  <a
                    href='https://king-prawn-app-vja2f.ondigitalocean.app/'
                    target="_blank"
                    rel="noreferrer">
                        <TelegramIcon className="footer__icon" />
                  </a>
                  <a
                    href='https://king-prawn-app-vja2f.ondigitalocean.app/'
                    target="_blank"
                    rel="noreferrer">
                        <WhatsAppIcon className="footer__icon" />
                  </a>
              </div>
            </div>
      </div>
    </footer>
  );
}