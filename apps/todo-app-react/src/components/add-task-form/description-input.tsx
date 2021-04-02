import { IonInput, IonItem, IonText } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Violation } from '../../lib/validation';

type DescriptionInputProps = {
    value: string,
    violations: Violation[] | undefined,
    onChange: (value: string) => void
};

const DescriptionInput: FunctionComponent<DescriptionInputProps> = ({ value, onChange, violations }) => {
    return (
        <>
            <IonItem>
                <IonInput
                    value={value}
                    autocapitalize="on"
                    autocomplete="on"
                    autocorrect="on"
                    placeholder="Describe your Task"
                    required
                    minlength={1}
                    onIonChange={e => onChange(e.detail.value)}
                />

            </IonItem>
            {violations?.map(violation => (
                <IonText color="danger" key={violation.message}>
                    <p className="ion-padding-start">
                        {violation.message}
                    </p>
                </IonText>
            ))}
        </>
    );
};

export default DescriptionInput;
