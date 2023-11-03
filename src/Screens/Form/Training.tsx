import React from 'react'
import {Box, TextField, Paper, Button} from '@mui/material'
import { useFormik } from 'formik'
import { ExerciseContainer } from './ExerciseContainer'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ExerciseForm } from './ExerciseForm'
import { useTrainings } from '../../hooks/useTrainings'
import { useSnackbar } from 'burgos-snackbar'

interface TrainingFormProps {
    
}

export const TrainingForm: React.FC<TrainingFormProps> = ({ }) => {
    const navigate = useNavigate()
    const pathname = useLocation().pathname
    const { add } = useTrainings()
    const {snackbar} = useSnackbar()

    const addingExercise = !!pathname.split('training/')[1]

    const initialValues: Training = {
        id: new Date().getTime(),
        name: '',
        exercises: []
    }

    const formik = useFormik({
        initialValues, onSubmit: (values) => {
            if (!values.name) {
                snackbar({severity: 'error', text: 'training name is required'})
                return
            }

            if (!values.exercises.length) {
                snackbar({severity: 'error', text: 'add at least one exercise'})
                return
            }

            add(values)
            console.log(values)
            navigate('/')
            snackbar({severity: 'success', text: 'training created'})
        } })
    
    const addExercise = (exercise: Exercise) => {
        formik.setFieldValue('exercises', [...formik.values.exercises, exercise])
    }
    
    return (
        <Box sx={{width: '100vw', color: 'text.secondary', padding: '10vw', flexDirection: 'column', gap: '5vw'}}>
            <form onSubmit={formik.handleSubmit}>
                <p style={{fontSize: '2rem'}}>new training</p>

                <TextField label='name' name='name' value={formik.values.name} onChange={formik.handleChange} />

                <Routes>
                    <Route index element={
                        <Paper sx={{ flexDirection: 'column', width: '80vw', padding: '3vw', gap: '3vw' }}>
                            <Button variant='outlined' onClick={() => navigate('exercise')}>new exercise</Button>
                            {formik.values.exercises.map(exercise => <ExerciseContainer key={exercise.id} exercise={exercise} />)}
                        </Paper>}
                    />
                    <Route path='exercise' element={<ExerciseForm addExercise={addExercise} />} />
                </Routes>

                {!addingExercise && <Box sx={{gap: '5vw'}}>
                    <Button variant='outlined' color='error' onClick={() => navigate('/')} fullWidth>cancel</Button>
                    <Button variant='outlined' onClick={() => formik.handleSubmit()} fullWidth>done</Button>
                </Box>}
            </form>
        </Box>
    )
}