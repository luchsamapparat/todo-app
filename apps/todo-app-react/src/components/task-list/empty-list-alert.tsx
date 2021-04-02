import { IonCard, IonIcon, IonItem, IonText } from '@ionic/react';
import { checkmark } from 'ionicons/icons';
import React, { FunctionComponent } from 'react';

type EmptyListAlertProps = {
    text: string
}

const EmptyListAlert: FunctionComponent<EmptyListAlertProps> = ({ text }) => (
    <IonCard>
        <IonItem color="success">
            <IonIcon slot="start" icon={checkmark} />
            <IonText>{text}</IonText>
        </IonItem>
    </IonCard>
);

export default EmptyListAlert;
