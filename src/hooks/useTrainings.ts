import { useContext } from 'react'
import TrainingsContext from '../contexts/trainingsContext'

export const useTrainings = () => {
    const {trainings, setTrainings} = useContext(TrainingsContext);

    const add = (training: Training) => {
        setTrainings(list => [...list.filter(item => item.id != training.id), training])
    }

    return {trainings, add}
}