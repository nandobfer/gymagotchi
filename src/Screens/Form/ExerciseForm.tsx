import React from 'react'
import {Box, TextField, Button} from '@mui/material'
import { useFormik } from 'formik'
import { useLocation, useNavigate } from "react-router-dom"

interface ExerciseFormProps {
    addExercise: (exercise: Exercise) => void
}

export const ExerciseForm: React.FC<ExerciseFormProps> = ({ addExercise }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const exercise: Exercise | undefined = location.state?.exercise

    const initialValues: Exercise = exercise || {
        id: new Date().getTime(),
        name: "",
        note: "",
        weight: {
            date: new Date().getTime(),
            history: [],
            text: "",
        },
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            addExercise(values)
            navigate(-1)
            console.log(values)
        },
    })

    return (
        <Box sx={{ flexDirection: "column", gap: "5vw" }}>
            <p style={{ fontSize: "1.5rem" }}>{exercise ? "edit exercise" : "new exercise"}</p>
            <TextField label="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
            <TextField
                label="weight"
                name="weight.text"
                value={formik.values.weight.text}
                onChange={formik.handleChange}
                InputProps={{ endAdornment: <>kg</> }}
            />
            <TextField label="note" name="note" value={formik.values.note} onChange={formik.handleChange} />

            <Box sx={{ gap: "5vw" }}>
                <Button variant="outlined" color="error" onClick={() => navigate(-1)} fullWidth>
                    cancel
                </Button>
                <Button variant="outlined" onClick={() => formik.handleSubmit()} fullWidth>
                    done
                </Button>
            </Box>
        </Box>
    )
}