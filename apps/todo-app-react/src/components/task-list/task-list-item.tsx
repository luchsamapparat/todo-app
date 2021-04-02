import { IonCheckbox, IonItem, IonLabel } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Task } from '../../lib/task';
import DueDate from './due-date';

type TaskListItemProps = {
    task: Task,
    onComplete: (taskId: string) => void
}

const TaskListItem: FunctionComponent<TaskListItemProps> = ({ task, onComplete }) => {
    return (
        <IonItem lines="full">
            <IonLabel>
                <span>{task.description}</span>
                <DueDate dueDate={task.dueDate} />
            </IonLabel>
            <IonCheckbox slot="start" onIonChange={() => onComplete(task.id)} />
        </IonItem>
    );
};

export default TaskListItem;
