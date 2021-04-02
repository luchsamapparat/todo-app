import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import AddTaskForm from '../components/add-task-form/add-task-form';
import EmptyTaskList from '../components/task-list/empty-list-alert';
import TaskList from '../components/task-list/task-list';
import { get, submit } from '../lib/http';
import { LanguageContext } from '../lib/language';
import { NewTask, Task } from '../lib/task';
import { ValidationError } from '../lib/validation';

const Tasks = () => {
    const [tasks, setTasks] = useState<Task[] | null>(null);

    useEffect(
        () => {
            get('/tasks')
                .then(tasks => setTasks(tasks));
        },
        []
    );

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

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tasks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <LanguageContext.Provider value={navigator.language}>
                    <div className="ion-padding">
                        {(tasks === null) ? null :
                            (tasks.length === 0) ?
                                <EmptyTaskList text="All done!" /> :
                                <TaskList tasks={tasks} onCompleteTask={handleCompleteTask} />
                        }
                        <div className="ion-margin-top">
                            <AddTaskForm onAddTask={handleAddTask} />
                        </div>
                    </div>
                </LanguageContext.Provider>
            </IonContent>
        </IonPage>
    );
};

export default Tasks;
