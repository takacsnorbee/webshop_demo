import { useSelector } from 'react-redux';
import { UISettingsLangs } from '../../helper/types';
import { getUISettings } from '../../store/selectors';

interface props {
    label: string
    name: string
    onChange: (
        event:
          React.ChangeEvent<HTMLSelectElement>
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLFormElement>,)=>void;
    value: string | number
    children: JSX.Element[]
    defaultValue: number | string
}

function SideBarSelect({
  label, name, onChange, value, children, defaultValue,
}:props):JSX.Element {
  const isEnglis = !!(useSelector(getUISettings).language === UISettingsLangs.LANG_ENG);

  return (
    <label htmlFor={name}>
      {label}
      <select
        aria-label={name}
        name={name}
        onChange={onChange}
        value={value}
      >
        <option value={defaultValue}>{isEnglis ? 'Show all' : 'Összes'}</option>
        {children}
      </select>
    </label>
  );
}

export default SideBarSelect;
