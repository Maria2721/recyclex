import { Link } from 'react-router-dom';
import "./Footer.scss";

export default function Footer() {
  
  return (
    <footer className="footer">
      
      <ul className="footer__list">
        <li><Link to="/politics">Политика кондефициальности</Link></li>
        <li><Link to="/terms">Общие условия</Link></li>
        <li><Link to="/cookies">Cookies Policy</Link></li>
      </ul>
      
    
    </footer>
  );
}
