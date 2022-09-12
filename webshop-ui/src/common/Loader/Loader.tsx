import { useSelector } from 'react-redux';
import { UISettingsLangs } from '../../helper/types';
import { getUISettings } from '../../store/selectors';
import './Loader.css';

function Loader():JSX.Element {
  const isEnglis = !!(useSelector(getUISettings).language === UISettingsLangs.LANG_ENG);

  return (
    <div className="loader-wrapper">
      <div className="loader-ring" />
      <span>{isEnglis ? 'Loading...' : 'Betöltés...'}</span>
    </div>
  );
}

export default Loader;
