import React from 'react'
import {Box, Paper} from '@mui/material'
import { Title } from '../../components/Title'
import { NewButton } from '../../components/NewButton'
import { useNavigate } from 'react-router-dom'
import { TrainingList } from './TrainingList'

interface HomeProps {
    
}

export const Home: React.FC<HomeProps> = ({ }) => {
    const navigate = useNavigate()
    
    const newTraining = () => {
        navigate('/form/training')
    }
    
    return (
        <Box sx={{flexDirection: 'column', width: '100vw', alignItems: 'center', padding: '10vw 0', gap: '5vw'}}>
            <Title />
            <TrainingList />
            <NewButton onClick={newTraining} />
        </Box>
    )
}