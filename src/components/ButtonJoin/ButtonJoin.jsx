import './ButtonJoin.scss';
import { Link } from 'react-router-dom';
import * as cx from "classnames";
import { ReactComponent as Arrow} from "../../assets/imgs/arrow_button.svg";
import { useState } from 'react';


export default function ButtonJoin(props) {
    const [isActive, setIsActive] = useState(false);
    
    const classButton = cx("buttonJoin btn", {
      "buttonJoin_active": isActive
    });
  
    const handleClick = () => {
      setIsActive(true)
      setTimeout(() => {
        setIsActive(false)
      }, 1000)
    } 
  
    return (
        <div>
            <Link to="/form" className={classButton} onClick={handleClick}>
                {props.children}
            <div className='buttonJoin__arrowWrapper'>
                <Arrow className='buttonJoin__arrow'/>
            </div>
            </Link>
        </div>
    );
}