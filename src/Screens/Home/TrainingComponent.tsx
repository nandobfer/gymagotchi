import React from 'react'
import { Box, Paper, Button } from "@mui/material"
import { DeleteForever } from "@mui/icons-material"
import { useConfirmDialog } from "burgos-confirm"
import { useTrainings } from "../../hooks/useTrainings"
import { useNavigate } from "react-router-dom"
import { ExerciseContainer } from "../../components/ExerciseContainer"

interface TrainingComponentProps {
    training: Training
}

export const TrainingComponent: React.FC<TrainingComponentProps> = ({ training }) => {
    const { confirm } = useConfirmDialog()
    const { remove } = useTrainings()
    const navigate = useNavigate()

    const deleteTraining = () => {
        confirm({
            title: "delete training",
            content: "confirm deletion of training?",
            button: "delete",
            onConfirm: () => {
                remove(training)
            },
        })
    }

    return (
        <Paper sx={{ flexDirection: "column", width: "80vw", padding: "5vw", gap: "3vw", minHeight: "100vw" }}>
            <Box sx={{ justifyContent: "space-between", gap: "5vw" }}>
                <p
                    style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                    }}
                >
                    {training.name}
                </p>
                <Button
                    variant="outlined"
                    color="error"
                    sx={{ minWidth: "8vw", padding: "1vw", width: "8vw", height: "8vw" }}
                    onClick={deleteTraining}
                >
                    <DeleteForever sx={{ width: "5vw" }} />
                </Button>
            </Box>
            <Box sx={{ flexDirection: "column", gap: "3vw", overflowY: "auto", height: "75vw", overflowX: "hidden" }}>
                {training.exercises
                    .sort((a, b) => a.id - b.id)
                    .map((exercise) => (
                        <ExerciseContainer key={exercise.id} exercise={exercise} />
                    ))}
            </Box>

            <Button variant="outlined" onClick={() => navigate("/form/training", { state: { training } })}>
                edit
            </Button>
        </Paper>
    )
}