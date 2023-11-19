import React, { useEffect, useState } from "react"
import { Box, Button, Checkbox } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useNavigate } from "react-router-dom"
import { useArray } from "burgos-array"
import { useStopwatch } from "../hooks/useStopwatch"
import { DeleteForever } from "@mui/icons-material"

interface ExerciseContainerProps {
    exercise: Exercise
    removeExercise: (exercise: Exercise) => void
    edit?: boolean
}

export const ExerciseContainer: React.FC<ExerciseContainerProps> = ({ exercise, edit, removeExercise }) => {
    const navigate = useNavigate()
    const seriesArray = useArray().newArray(Number(exercise.series))
    const { clocking, setClocking } = useStopwatch()

    const seriesDone = seriesArray.map((index) => useState(false))
    const [done, setDone] = useState(false)

    useEffect(() => {
        const finishedQuantity = seriesDone.reduce((done, series) => (series[0] ? done + 1 : done), 0)
        setDone(finishedQuantity == seriesArray.length)
    }, [seriesDone])

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
                <p>
                    {exercise.series || 0}x {exercise.weight.text} {exercise.weight.unit}
                </p>
                <Box sx={{ color: done ? "success.main" : "warning.main" }}>
                    <p style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", width: "50vw" }}>{exercise.note}</p>
                </Box>

                {!edit && (
                    <Box sx={{ gap: "3vw", marginLeft: "-3vw" }}>
                        {seriesArray.map((index) => (
                            <Checkbox
                                edge="end"
                                color={done ? "success" : "primary"}
                                checked={seriesDone[index - 1][0]}
                                onChange={(_, checked) => {
                                    seriesDone[index - 1][1](checked)
                                    if (checked) setClocking(true)
                                }}
                            />
                        ))}
                    </Box>
                )}
            </Box>

            <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                {edit && (
                    <Box sx={{ gap: "3vw" }}>
                        <Button
                            variant="outlined"
                            sx={{ width: "7vw", minWidth: "7vw" }}
                            onClick={() => navigate("exercise", { state: { exercise } })}
                        >
                            <EditIcon sx={{ width: "5vw", height: "5vw" }} />
                        </Button>
                        <Button variant="outlined" color="error" sx={{ width: "7vw", minWidth: "7vw" }} onClick={() => removeExercise(exercise)}>
                            <DeleteForever sx={{ width: "5vw", height: "5vw" }} />
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    )
}
