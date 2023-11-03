import React from "react"
import { Box, Button } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from "react-router-dom"

interface ExerciseContainerProps {
    exercise: Exercise
    edit?: boolean
}

export const ExerciseContainer: React.FC<ExerciseContainerProps> = ({ exercise, edit }) => {
    const navigate = useNavigate()

    return (
        <Box sx={{ color: "text.secondary", justifyContent: "space-between", alignItems: "center" }}>
            <p>{exercise.name}</p>
            <Box sx={{ gap: "3vw", alignItems: "center" }}>
                <p>{exercise.weight.text} kg</p>
                {edit && (
                    <Button variant="outlined" sx={{ width: "7vw", minWidth: "7vw" }} onClick={() => navigate("exercise", { state: { exercise } })}>
                        <EditIcon sx={{ width: "5vw", height: "5vw" }} />
                    </Button>
                )}
            </Box>
        </Box>
    )
}
