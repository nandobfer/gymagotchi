import React from 'react'
import { Box } from "@mui/material"
import { Title } from "../../components/Title"
import { TrainingList } from "./TrainingList"
import { Stopwatch } from "../../components/Stopwatch"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", width: "100vw", alignItems: "center", padding: "10vw 0", gap: "5vw" }}>
            <Title />
            <TrainingList />
            <Stopwatch />
        </Box>
    )
}