import { IonDatetime, IonItem, IonText } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Violation } from '../../lib/validation';

type DueDateInputProps = {
    value: string | null,
    violations: Violation[] | undefined,
    onChange: (value: string | null) => void
};

const DueDateInput: FunctionComponent<DueDateInputProps> = ({ value, onChange, violations }) => {
    const today = new Date();
    const min = toIsoDate(today);
    const max = (today.getFullYear() + 10).toString();

    const handleChange = (dueDate: string) => onChange(dueDate?.substr(0, 10));

    return (
        <>
            <IonItem>
                <IonDatetime
                    value={value}
                    min={min}
                    max={max}
                    displayFormat="DD.MM.YYYY"
                    placeholder="Select a Due Date (optional)"
                    onIonChange={e => handleChange(e.detail.value)}
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

const toIsoDate = (date: Date) => date.toISOString().split('T')[0];

export default DueDateInput;
