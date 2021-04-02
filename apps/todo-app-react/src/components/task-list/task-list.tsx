import { IonList } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Task } from '../../lib/task';
import TaskListItem from './task-list-item';

type TaskListProps = {
    tasks: Task[],
    onCompleteTask: (taskId: string) => void
}

const TaskList: FunctionComponent<TaskListProps> = ({ tasks, onCompleteTask }) => (
    <IonList>
        {tasks.map(task => <TaskListItem task={task} onComplete={onCompleteTask} key={task.id} />)}
    </IonList>
);

export default TaskList;
