import React from 'react'
import {Box} from '@mui/material'
import { useTrainings } from '../../hooks/useTrainings'
import { TrainingComponent } from './TrainingComponent'

interface TrainingListProps {
    
}

export const TrainingList:React.FC<TrainingListProps> = ({  }) => {
    const {trainings} = useTrainings()
    
    return (
        <Box sx={{ color: "text.secondary", width: "100vw", overflowX: "auto", gap: "5vw", padding: "0 10vw" }}>
            {trainings
                .sort((a, b) => b.id - a.id)
                .map((training) => (
                    <TrainingComponent key={training.id} training={training} />
                ))}
        </Box>
    )
}