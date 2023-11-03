import React from 'react'
import { Box, Paper, IconButton, Button } from "@mui/material"
import { DeleteForever } from "@mui/icons-material"
import { useConfirmDialog } from "burgos-confirm"
import { useTrainings } from "../../hooks/useTrainings"

interface TrainingComponentProps {
    training: Training
}

export const TrainingComponent: React.FC<TrainingComponentProps> = ({ training }) => {
    const { confirm } = useConfirmDialog()
    const { remove } = useTrainings()

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
        <Paper sx={{ flexDirection: "column", width: "70vw", padding: "5vw", gap: "3vw", height: "50vh" }}>
            <Box sx={{ justifyContent: "space-between", gap: "5vw" }}>
                <p
                    style={{
                        fontSize: "1.5rem",
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
            {training.exercises.map((exercise) => (
                <Box key={exercise.id} sx={{ color: "text.secondary", justifyContent: "space-between" }}>
                    <p>{exercise.name}</p>
                    <p>{exercise.weight.text} kg</p>
                </Box>
            ))}
        </Paper>
    )
}