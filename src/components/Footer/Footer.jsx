import { Link } from 'react-router-dom';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__inner container__row">
        <div className="footer__info">
          <div className="footer__requisites">2021, ИП КОВЕРДА ВАДИМ НИКОЛАЕВИЧ<br/>ИНН, 612509367304 ОГРН 319619600177064 ТЕЛ: 78003330816<br/>АДРЕС: ПЕРЕУЛОК ТЕНЕВОЙ, Д 178, КРАСНОДАРСКИЙ КРАЙ, Г.СОЧИ
          </div>
            <div className="footer__links">
            <Link to="/privacy-policy" className="footer__link">Политика конфиденциальности</Link>
            <Link to="/general-terms" className="footer__link">Общие условия</Link>
            <Link to="/cookiesPolicyPage" className="footer__link">Cookies Policy</Link>
            </div>
            <div className="footer__email">info@recyclex.online
            </div>
          </div>
        <div className="footer__description">Все права защищены</div>
      </div>
    </footer>
  );
}