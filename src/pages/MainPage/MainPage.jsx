import FirstScreen from '../../components/FirstScreen/FirstScreen';
import Advantaget from '../../components/Advantages/Advantages';

import "./MainPage.scss";

export default function MainPage() {
  return (
      <div className="container__row">
        <FirstScreen/>
        <Advantaget/>
      </div>
  );
}
