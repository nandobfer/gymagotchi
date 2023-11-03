import React from 'react'
import {Box, Paper} from '@mui/material'

interface TrainingComponentProps {
    training: Training
}

export const TrainingComponent:React.FC<TrainingComponentProps> = ({ training }) => {
    
    return (
        <Paper sx={{flexDirection: 'column', width: '70vw', padding: '5vw', gap: '3vw'}}>
            <p style={{fontSize: '1.5rem', fontWeight: 'bold'}}>{ training.name }</p>
            {training.exercises.map(exercise => <Box key={exercise.id} sx={{color: 'text.secondary', justifyContent: 'space-between'}}>
                <p>{ exercise.name }</p>
                <p>{ exercise.weight.text } kg</p>
            </Box>)}
        </Paper>
    )
}