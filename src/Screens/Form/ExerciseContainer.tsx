import React from 'react'
import {Box} from '@mui/material'

interface ExerciseContainerProps {
    exercise: Exercise
}

export const ExerciseContainer:React.FC<ExerciseContainerProps> = ({ exercise }) => {
    
    return (
        <Box sx={{}}>
            <p>{ exercise.name }</p>
        </Box>
    )
}