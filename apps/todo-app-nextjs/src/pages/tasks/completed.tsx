import React, { FunctionComponent, useEffect, useState } from 'react';
import CompletedTasksList from '../../components/task-list/completed-tasks-list';
import EmptyListAlert from '../../components/task-list/empty-list-alert';
import { get } from '../../lib/http';
import { Task } from '../../lib/task';

const CompletedTasks: FunctionComponent = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        (async () => {
            const tasks = await get('/tasks/completed');
            setTasks(tasks)
        })();
    }, []);

    return (tasks === null) ? null :
        (tasks.length === 0) ?
            <EmptyListAlert text="No tasks have been completed yet." /> :
            <CompletedTasksList tasks={tasks} />;
};

export default CompletedTasks;
