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
      className="react-switch"
      id="material-switch"/>
      <span className="switch__label">{theme === 'light' ? "Light mode" : "Dark mode"}</span>
    </div>
  );
}
