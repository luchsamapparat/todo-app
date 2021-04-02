import { RefresherEventDetail } from '@ionic/core';
import { IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import CompletedTasksList from '../../components/task-list/completed-tasks-list';
import EmptyListAlert from '../../components/task-list/empty-list-alert';
import { get } from '../../lib/http';
import { LanguageContext } from '../../lib/language';
import { Task } from '../../lib/task';

const CompletedTasks = () => {
    const [tasks, setTasks] = useState<Task[] | null>(null);

    const loadTasks = () => get('/tasks/completed')
        .then(tasks => setTasks(tasks));

    useEffect(
        () => { loadTasks() },
        []
    );

    const handleRefresh = async (event: CustomEvent<RefresherEventDetail>) => {
        await loadTasks();
        event.detail.complete();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Completed Tasks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <LanguageContext.Provider value={navigator.language}>
                    <div className="ion-padding">
                        {(tasks === null) ? null :
                            (tasks.length === 0) ?
                                <EmptyListAlert text="No tasks have been completed yet." /> :
                                <CompletedTasksList tasks={tasks} />
                        }
                    </div>
                </LanguageContext.Provider>
            </IonContent>
        </IonPage>
    );
};

export default CompletedTasks;
