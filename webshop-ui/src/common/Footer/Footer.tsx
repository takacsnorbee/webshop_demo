import './Footer.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUISettings } from '../../store/selectors';
import { UISettingsLangs } from '../../helper/types';

function Footer():JSX.Element {
  const isEnglis = !!(useSelector(getUISettings).language === UISettingsLangs.LANG_ENG);
  return (
    <footer>
      <div>
        <div className="footer-copy-wrapper">
          <small>
            &copy;2022 - Krisztián Nyikos - Norbert Takács
          </small>
        </div>
        <hr />
        <div className="footer-info-wrapper">
          <Link to="/about">{isEnglis ? 'About Us' : 'Rólunk'}</Link>
          <Link to="/terms">{isEnglis ? 'Terms of Use' : 'Felhasználási feltételek'}</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
