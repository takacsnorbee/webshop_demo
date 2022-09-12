import './UISettingsDetails.css';

interface props {
    title: string
    settingsData: Array<string>
    handleClickOnBtn: (data:string)=> void
}

function UISettingsDetails({
  title,
  settingsData,
  handleClickOnBtn,
}:props):JSX.Element {
  return (
    <div className="ui-settings-wrapper">
      <p>{title}</p>
      <div className="ui-settings-btn-wrapper">
        {
          settingsData.map((data):JSX.Element => (
            <button
              key={data}
              type="button"
              onClick={() => handleClickOnBtn(data)}
            >
              {data}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default UISettingsDetails;
