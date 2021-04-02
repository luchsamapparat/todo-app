import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { checkboxOutline, listOutline } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router-dom';
import Tasks from './index';
import CompletedTasks from './tasks/completed';

const App = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet id="main">
                    <Route exact path="/">
                        <Tasks />
                    </Route>
                    <Route exact path="/tasks/completed">
                        <CompletedTasks />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="tasks" href="/">
                        <IonIcon icon={listOutline} />
                        <IonLabel>Tasks</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="completedTasks" href="/tasks/completed">
                        <IonIcon icon={checkboxOutline} />
                        <IonLabel>Completed</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
