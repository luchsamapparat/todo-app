import { IonButton, IonList } from '@ionic/react';
import React, { FormEvent, FunctionComponent, useState } from 'react';
import { NewTask } from '../../lib/task';
import { ValidationError } from '../../lib/validation';
import DescriptionInput from './description-input';
import DueDateInput from './due-date-input';

type AddTaskFormProps = {
    onAddTask: (newTask: NewTask) => Promise<void>
};

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onAddTask }) => {
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<ValidationError | null>(null);
    const [isDirty, setIsDirty] = useState(false);

    const clearForm = () => {
        setDescription('');
        setDueDate(null);
        setValidationError(null);
        setIsDirty(false);
    };

    const handleChange = () => {
        setIsDirty(true);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await onAddTask({ description, dueDate });
            clearForm();
        } catch (error) {
            if (error instanceof ValidationError) {
                setValidationError(error);
            }
        }
    };

    return (
        <form noValidate onChange={handleChange} onSubmit={handleSubmit}>
            <IonList>
                <DescriptionInput
                    value={description}
                    violations={getViolations(validationError, 'description')}
                    onChange={setDescription} />

                <DueDateInput
                    value={dueDate}
                    violations={getViolations(validationError, 'dueDate')}
                    onChange={setDueDate} />
            </IonList>

            <IonButton className="ion-margin-top" type="submit" expand="block">Add Task</IonButton>
        </form>
    );
};

const getViolations = (validationError: ValidationError | null, formControlName: string) => {
    return validationError?.violations.filter(error => error.field === formControlName);
};

export default AddTaskForm;
