import { IonList } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Task } from '../../lib/task';
import CompletedTasksListItem from './completed-tasks-list-item';

type CompletedTasksListProps = {
    tasks: Task[]
}

const CompletedTasksList: FunctionComponent<CompletedTasksListProps> = ({ tasks }) => (
    <IonList>
        {tasks.map(task => <CompletedTasksListItem task={task} key={task.id} />)}
    </IonList>
);

export default CompletedTasksList;
