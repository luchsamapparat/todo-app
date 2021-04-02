import { IonText } from '@ionic/react';
import TimeAgo from 'javascript-time-ago';
import de from 'javascript-time-ago/locale/de';
import en from 'javascript-time-ago/locale/en';
import React, { FunctionComponent, useContext } from 'react';
import { LanguageContext } from '../../lib/language';

type CompletedDateProps = {
    completedDate: string | null
}

const CompletedDate: FunctionComponent<CompletedDateProps> = ({ completedDate }) => {
    const language = useContext(LanguageContext);

    if (completedDate === null) {
        return null;
    }

    return <IonText color="medium" className="ion-padding-start">{formatDate(completedDate, language)}</IonText>;
};

TimeAgo.addLocale(de);
TimeAgo.addDefaultLocale(en);

const formatDate = (date: string, language: string) => new TimeAgo(language).format(new Date(date));

export default CompletedDate;
