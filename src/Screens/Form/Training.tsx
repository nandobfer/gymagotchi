import React from 'react'
import {Box, TextField, Paper, Button} from '@mui/material'
import { useFormik } from "formik"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { ExerciseForm } from "./ExerciseForm"
import { useTrainings } from "../../hooks/useTrainings"
import { useSnackbar } from "burgos-snackbar"
import { ExerciseContainer } from "../../components/ExerciseContainer"
import { useConfirmDialog } from "burgos-confirm"

interface TrainingFormProps {}

export const TrainingForm: React.FC<TrainingFormProps> = ({}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { add } = useTrainings()
    const { snackbar } = useSnackbar()
    const { confirm } = useConfirmDialog()

    const pathname = location.pathname
    const training: Training | undefined = location.state?.training

    const addingExercise = !!pathname.split("training/")[1]

    const initialValues: Training = training || {
        id: new Date().getTime(),
        name: "",
        exercises: [],
    }

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            if (!values.name) {
                snackbar({ severity: "error", text: "training name is required" })
                return
            }

            if (!values.exercises.length) {
                snackbar({ severity: "error", text: "add at least one exercise" })
                return
            }

            add(values)
            console.log(values)
            navigate("/")
            training ? snackbar({ severity: "info", text: "training updated" }) : snackbar({ severity: "success", text: "training created" })
        },
    })

    const addExercise = (exercise: Exercise) => {
        formik.setFieldValue("exercises", [...formik.values.exercises.filter((item) => item.id != exercise.id), exercise])
    }

    const removeExercise = (exercise: Exercise) => {
        confirm({
            title: "remove exercise",
            content: "are you sure?",
            onConfirm: () =>
                formik.setFieldValue(
                    "exercises",
                    formik.values.exercises.filter((item) => item.id != exercise.id)
                ),
        })
    }

    return (
        <Box sx={{ width: "100vw", color: "text.secondary", padding: "10vw", flexDirection: "column", gap: "5vw" }}>
            <form onSubmit={formik.handleSubmit}>
                <p style={{ fontSize: "2rem" }}>{training ? "edit training" : "new training"}</p>

                <TextField label="name" name="name" value={formik.values.name} onChange={formik.handleChange} />

                <Routes>
                    <Route
                        index
                        element={
                            <Paper sx={{ flexDirection: "column", width: "80vw", padding: "5vw", gap: "3vw", height: "70vh", overflowY: "auto" }}>
                                <Button variant="outlined" onClick={() => navigate("exercise")}>
                                    new exercise
                                </Button>
                                {formik.values.exercises
                                    .sort((a, b) => a.id - b.id)
                                    .map((exercise) => (
                                        <ExerciseContainer key={exercise.id} exercise={exercise} removeExercise={removeExercise} edit />
                                    ))}
                            </Paper>
                        }
                    />
                    <Route path="exercise" element={<ExerciseForm addExercise={addExercise} />} />
                </Routes>

                {!addingExercise && (
                    <Box sx={{ gap: "5vw", paddingBottom: "5vw" }}>
                        <Button variant="outlined" color="error" onClick={() => navigate("/")} fullWidth>
                            cancel
                        </Button>
                        <Button variant="outlined" onClick={() => formik.handleSubmit()} fullWidth>
                            done
                        </Button>
                    </Box>
                )}
            </form>
        </Box>
    )
}