import { Link } from 'react-router-dom';
import './ButtonJoin.scss';


export default function ButtonJoin(props) {
    return (
        <div>
            <Link to="/form" className="btn">{props.children}</Link>
        </div>
    );
}