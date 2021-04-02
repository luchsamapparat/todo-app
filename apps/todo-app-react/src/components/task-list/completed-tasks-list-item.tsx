import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { checkboxOutline } from 'ionicons/icons';
import React, { FunctionComponent } from 'react';
import { Task } from '../../lib/task';
import CompletedDate from './completed-date';

type CompletedTasksListItemProps = {
    task: Task
}

const CompletedTasksListItem: FunctionComponent<CompletedTasksListItemProps> = ({ task }) => {
    return (
        <IonItem lines="full">
            <IonIcon slot="start" icon={checkboxOutline} />
            <IonLabel>
                <span>{task.description}</span>
                <CompletedDate completedDate={task.completedDate} />
            </IonLabel>
        </IonItem>
    );
};

export default CompletedTasksListItem;
