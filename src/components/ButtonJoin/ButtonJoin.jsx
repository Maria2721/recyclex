import { Link } from 'react-router-dom';
import './ButtonJoin.scss';


export default function ButtonJoin() {
    return (
        <div>
            <Link to="/form" className="btn">Присоединиться</Link>
        </div>
    );
}