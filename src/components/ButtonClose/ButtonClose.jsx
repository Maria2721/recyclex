import "./ButtonClose.scss";
import * as cx from "classnames";
import { ReactComponent as Arrow } from "../../assets/imgs/arrow_button.svg";
import { useState } from "react";

export default function ButtonClose({ handleModal }) {
  const [isActive, setIsActive] = useState(false);

  const classButton = cx("buttonClose", {
    buttonClose_active: isActive,
  });

  const handleClick = () => {
    setIsActive(true);
    setTimeout(() => {
      handleModal()
      setIsActive(false);
    }, 250);
  };

  return (
    <button
      className="buttonCloseWrapper btn btn_smaller"
      onClick={handleClick}>
      <div className={classButton}>
        Закрыть
        <div className="buttonClose__arrowWrapper">
          <Arrow className="buttonClose__arrow" />
        </div>
      </div>
    </button>
  );
}
