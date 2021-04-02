import { IonText } from '@ionic/react';
import React, { FunctionComponent, useContext } from 'react';
import { LanguageContext } from '../../lib/language';

type DueDateProps = {
    dueDate: string | null
}

const DueDate: FunctionComponent<DueDateProps> = ({ dueDate }) => {
    const language = useContext(LanguageContext);

    if (dueDate === null) {
        return null;
    }

    return <IonText color="medium" className="ion-padding-start">{formatDate(dueDate, language)}</IonText>;
};

const formatDate = (date: string, language: string) => new Intl.DateTimeFormat(
    language,
    { year: '2-digit', month: '2-digit', day: '2-digit' }
)
    .format(new Date(date));

export default DueDate;
