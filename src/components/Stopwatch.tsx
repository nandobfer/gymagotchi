import React, { useCallback, useEffect, useState } from "react"
import { Box, Button } from "@mui/material"
import { useStopwatch } from "../hooks/useStopwatch"

interface StopwatchProps {}

export const Stopwatch: React.FC<StopwatchProps> = ({}) => {
    const { clocking, setClocking } = useStopwatch()
    const [time, setTime] = useState(60)

    const resetClock = () => {
        setTime(60)
        setClocking(false)
    }

    const decreaseTime = useCallback(() => {
        if (time > 0) {
            setTime((time) => time - 1)
        } else {
            resetClock()
        }
    }, [time])

    useEffect(() => {
        if (clocking) {
            const interval = setInterval(() => decreaseTime(), 1000)

            return () => {
                clearInterval(interval)
            }
        } else {
            resetClock()
        }
    }, [clocking, time])

    return (
        <Box sx={{ flexDirection: "column", gap: "5vw", alignItems: "center" }}>
            <Button
                variant="outlined"
                color={time > 25 ? (clocking ? "success" : "primary") : time > 10 ? "warning" : "error"}
                onClick={() => setClocking((clocking) => !clocking)}
                sx={{
                    border: "1px solid",
                    borderColor: "primary.main",
                    borderRadius: "2vw",
                    padding: "5vw",
                    fontSize: "4rem",
                    width: "80vw",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {time}
            </Button>
        </Box>
    )
}
