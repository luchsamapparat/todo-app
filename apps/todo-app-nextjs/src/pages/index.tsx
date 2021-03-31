import React, { FunctionComponent, useEffect, useState } from 'react';
import AddTaskForm from '../components/add-task-form/add-task-form';
import EmptyTaskList from '../components/task-list/empty-list-alert';
import TaskList from '../components/task-list/task-list';
import { get, submit } from '../lib/http';
import { NewTask, Task } from '../lib/task';
import { ValidationError } from '../lib/validation';

const Tasks: FunctionComponent = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        (async () => {
            const tasks = await get('/tasks');
            setTasks(tasks)
        })();
    }, []);

    const handleAddTask = async (newTask: NewTask) => {
        try {
            setTasks(await submit('/tasks', 'POST', newTask));
        } catch (error) {
            if (error.status === 422) {
                throw new ValidationError(error.violations);
            }
        }
    };

    const handleCompleteTask = async (taskId: string) => setTasks(
        await submit('/tasks/completed', 'POST', {
            completedTasks: [taskId]
        })
    );

    return <>
        {(tasks === null) ? null :
            (tasks.length === 0) ?
                <EmptyTaskList text="All done!" /> :
                <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />}

        <AddTaskForm onAddTask={handleAddTask} />
    </>;
};

export default Tasks;
