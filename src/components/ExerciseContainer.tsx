import React from "react"
import { Box, Button, Checkbox } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from "react-router-dom"

interface ExerciseContainerProps {
    exercise: Exercise
    edit?: boolean
}

export const ExerciseContainer: React.FC<ExerciseContainerProps> = ({ exercise, edit }) => {
    const navigate = useNavigate()

    return (
        <Box
            sx={{
                color: "text.secondary",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid",
                borderColor: "primary.main",
                padding: "2vw 0",
            }}
        >
            <Box sx={{ gap: "0vw", flexDirection: "column" }}>
                <p>{exercise.name}</p>
                <p>{exercise.weight.text} kg</p>
                <Box sx={{ color: "warning.main" }}>
                    <p>{exercise.note}</p>
                </Box>
            </Box>

            <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                {edit ? (
                    <Button variant="outlined" sx={{ width: "7vw", minWidth: "7vw" }} onClick={() => navigate("exercise", { state: { exercise } })}>
                        <EditIcon sx={{ width: "5vw", height: "5vw" }} />
                    </Button>
                ) : (
                    <Checkbox />
                )}
            </Box>
        </Box>
    )
}
