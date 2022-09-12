import './FormInfoButton.css';
import { IonIcon } from '@ionic/react';

interface props {
    showInfo: (
        event:React.MouseEvent<HTMLButtonElement>
    ) => void
}

export default function FormInfoButton({ showInfo }:props):JSX.Element {
  return (
    <button className="info-button" type="button" onClick={showInfo}>
      <IonIcon icon="information-circle-outline" />
    </button>
  );
}
