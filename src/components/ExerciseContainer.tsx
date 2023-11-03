import React, { useState } from "react"
import { Box, Button, Checkbox } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from "react-router-dom"

interface ExerciseContainerProps {
    exercise: Exercise
    edit?: boolean
}

export const ExerciseContainer: React.FC<ExerciseContainerProps> = ({ exercise, edit }) => {
    const navigate = useNavigate()

    const [done, setDone] = useState(false)

    return (
        <Box
            sx={{
                color: done ? "success.main" : "text.secondary",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid",
                borderColor: done ? "success.main" : "primary.main",
                padding: "2vw 0",
                textDecoration: done ? "line-through" : "",
            }}
        >
            <Box sx={{ gap: "0vw", flexDirection: "column" }}>
                <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "50vw" }}>{exercise.name}</p>
                <p>{exercise.weight.text} kg</p>
                <Box sx={{ color: done ? "success.main" : "warning.main" }}>
                    <p>{exercise.note}</p>
                </Box>
            </Box>

            <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                {edit ? (
                    <Button variant="outlined" sx={{ width: "7vw", minWidth: "7vw" }} onClick={() => navigate("exercise", { state: { exercise } })}>
                        <EditIcon sx={{ width: "5vw", height: "5vw" }} />
                    </Button>
                ) : (
                    <Checkbox checked={done} onChange={(_, checked) => setDone(checked)} />
                )}
            </Box>
        </Box>
    )
}
