import './UserData.css';
import bulbasaur from '../../../pics/avatar/bulbasaur.png';
import charmander from '../../../pics/avatar/charmander.png';
import geodude from '../../../pics/avatar/geodude.png';
import pikachu from '../../../pics/avatar/pikachu.png';
import something from '../../../pics/avatar/something.png';
import { AvatarNames, AvatarIDs, UISettingSectionNames } from '../../../helper/types';
import AvatarSettingsBtn from '../AvatarSettingsBtn/AvatarSettingsBtn';

interface props {
  openClass: string
  handleClickOnSection: (section:string) => void
}

function UserData({ openClass, handleClickOnSection }:props):JSX.Element {
  const chooseNewAvatar = (id:number):void => {
    console.log(id);
  };

  return (
    <section className="settings-section-wrapper">
      <button
        type="button"
        className="setttings-section-head"
        onClick={() => {
          handleClickOnSection(UISettingSectionNames.USER_DATA);
        }}
      >
        User Data
      </button>
      <div className={`settings-section-body ${openClass}`}>
        <form className="userdata-settings-wrapper">
          <label htmlFor="new-username">
            Change username:
            <input type="text" name="new-username" />
          </label>
          <button type="button">Save</button>
        </form>
        <form className="userdata-settings-wrapper">
          <label htmlFor="new-password">
            Change password:
            <input type="password" name="new-password" />
          </label>
          <label htmlFor="new-password-again">
            Repeat your password:
            <input type="password" name="new-password-again" />
          </label>
          <button type="button">Save</button>
        </form>
        <div className="userdata-settings-wrapper">
          <p>Change your avatar:</p>
          <div className="userdata-settings-btn-wrapper">
            <AvatarSettingsBtn
              src={bulbasaur}
              alt={AvatarNames.BULBASAUR}
              avatarID={AvatarIDs.BULBASAUR}
              chooseNewAvatar={chooseNewAvatar}
            />
            <AvatarSettingsBtn
              src={charmander}
              alt={AvatarNames.CHARMANDER}
              avatarID={AvatarIDs.CHARMANDER}
              chooseNewAvatar={chooseNewAvatar}
            />
            <AvatarSettingsBtn
              src={geodude}
              alt={AvatarNames.GEODUDE}
              avatarID={AvatarIDs.GEODUDE}
              chooseNewAvatar={chooseNewAvatar}
            />
            <AvatarSettingsBtn
              src={pikachu}
              alt={AvatarNames.PIKACHU}
              avatarID={AvatarIDs.PIKACHU}
              chooseNewAvatar={chooseNewAvatar}
            />
            <AvatarSettingsBtn
              src={something}
              alt={AvatarNames.SOMETHING}
              avatarID={AvatarIDs.SOMETHING}
              chooseNewAvatar={chooseNewAvatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserData;
