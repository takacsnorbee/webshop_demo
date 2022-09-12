import { useSelector } from 'react-redux';
import UISettingsDetails from '../UISettingsDetails/UISettingsDetails';
import './UISettings.css';
import {
  BrowserStorage,
  UISettingSectionNames,
  UISettingsFonts,
  UISettingsLangs,
  UISettingsThemes,
} from '../../../helper/types';
import { useAppDispatch } from '../../../hooks';
import {
  setFontSize,
  setLanguage,
  setTheme,
} from '../../../store/userInterface/actions';
import { getUISettings } from '../../../store/selectors';

interface props {
    openClass: string
    handleClickOnSection: (section:string) => void
}

function UISettings({ openClass, handleClickOnSection }:props):JSX.Element {
  const dispatch = useAppDispatch();
  const isEnglis = !!(useSelector(getUISettings).language === UISettingsLangs.LANG_ENG);
  const langs = [UISettingsLangs.LANG_ENG, UISettingsLangs.LANG_HUN];
  const themes = [UISettingsThemes.THEME_DARK, UISettingsThemes.THEME_NORMAL];
  const fontSizes = [
    UISettingsFonts.FONT_SMALL,
    UISettingsFonts.FONT_MIDDLE,
    UISettingsFonts.FONT_BIG,
    UISettingsFonts.FONT_HUGE,
  ];

  const handleClickOnBtn = (data:string):void => {
    if (langs.includes(data as UISettingsLangs)) {
      localStorage.setItem(BrowserStorage.LANG, data);
      dispatch(setLanguage(data));
    }
    if (fontSizes.includes(data as UISettingsFonts)) {
      localStorage.setItem(BrowserStorage.FONTSIZE, data);
      dispatch(setFontSize(data));
    }
    if (themes.includes(data as UISettingsThemes)) {
      localStorage.setItem(BrowserStorage.THEME, data);
      dispatch(setTheme(data));
    }
  };

  return (
    <section className="settings-section-wrapper">
      <button
        type="button"
        className="setttings-section-head"
        onClick={() => { handleClickOnSection(UISettingSectionNames.UI); }}
      >
        {isEnglis ? 'UI Settings' : 'Beállítások'}
      </button>
      <div className={`settings-section-body ${openClass}`}>
        <UISettingsDetails
          title={isEnglis ? 'Language' : 'Nyelv'}
          settingsData={langs}
          handleClickOnBtn={handleClickOnBtn}
        />
        <UISettingsDetails
          title={isEnglis ? 'Theme' : 'Téma'}
          settingsData={themes}
          handleClickOnBtn={handleClickOnBtn}
        />
        <UISettingsDetails
          title={isEnglis ? 'Font Size' : 'Betűméret'}
          settingsData={fontSizes}
          handleClickOnBtn={handleClickOnBtn}
        />
      </div>
    </section>
  );
}

export default UISettings;
