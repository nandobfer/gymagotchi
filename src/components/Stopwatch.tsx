import React from "react"
import { Box, Button } from "@mui/material"

interface StopwatchProps {}

export const Stopwatch: React.FC<StopwatchProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            {/* aqui vai ter o relogio */}
            <Button variant="outlined">{"|>"}</Button>
        </Box>
    )
}
