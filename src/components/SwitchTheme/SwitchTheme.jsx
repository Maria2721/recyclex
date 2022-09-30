import "./SwitchTheme.scss";
import ReactSwitch from "react-switch";

export default function SwitchTheme({toggleTheme, theme}) {
  return (
    <div className="switch">
      <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}
      onColor="#000000"
      onHandleColor="#ffffff"
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 5px rgba(0, 0, 0, 0.2)"
      className="react-switch"
      id="material-switch"/>
      <span className="switch__label">Light mode</span>
    </div>
  );
}
