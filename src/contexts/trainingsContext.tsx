import { createContext, useState } from 'react';
import React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface TrainingContextValue {
    trainings: Training[];
    setTrainings: React.Dispatch<React.SetStateAction<Training[]>>
}

interface TrainingProviderProps {
    children: React.ReactNode
}

const TrainingContext = createContext<TrainingContextValue>({} as TrainingContextValue);

export default TrainingContext;

export const TrainingProvider: React.FC<TrainingProviderProps> = ({ children }) => {
    const storage = useLocalStorage()

    const [trainings, setTrainings] = useState<Training[]>(storage.get('gymagutchi:trainings') || [])

    React.useEffect(() => {
        storage.set('gymagutchi:trainings', trainings)
        console.log(trainings)
    }, [trainings])

    return (
         <TrainingContext.Provider value={{trainings, setTrainings}}>
              {children}
         </TrainingContext.Provider>
    )
}