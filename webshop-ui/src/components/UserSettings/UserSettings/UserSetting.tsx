import './UserSettings.css';
import { useState } from 'react';
import Header from '../../../common/Header/Header';
import Footer from '../../../common/Footer/Footer';
import UISettings from '../UISettings/UISettings';
import UserData from '../UserDatas/UserData';
import Orders from '../Orders/Orders';
import { UISettingSectionNames } from '../../../helper/types';

function UserSettings():JSX.Element {
  const [openSection, setOpenSection] = useState('ui');

  const handleOpenSection = (sectionName:string):void => {
    setOpenSection(sectionName);
  };

  return (
    <>
      <Header />
      <main>
        <h1>Beállítások</h1>
        <UISettings
          openClass={
            openSection === UISettingSectionNames.UI ? 'open-section' : ''
          }
          handleClickOnSection={handleOpenSection}
        />
        <UserData
          openClass={
            openSection === UISettingSectionNames.USER_DATA ? 'open-section' : ''
          }
          handleClickOnSection={handleOpenSection}
        />
        <Orders
          openClass={
            openSection === UISettingSectionNames.ORDERS ? 'open-section' : ''
          }
          handleClickOnSection={handleOpenSection}
        />
      </main>
      <Footer />
    </>
  );
}

export default UserSettings;
