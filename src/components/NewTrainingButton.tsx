import React from "react"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface NewTrainingButtonProps {}

export const NewTrainingButton: React.FC<NewTrainingButtonProps> = ({}) => {
    const navigate = useNavigate()

    return (
        <Button
            variant="outlined"
            color="success"
            sx={{
                width: "80vw",
                height: "auto",
                flexShrink: 0,
                borderWidth: "2px",
                fontSize: "1.7rem",
                borderStyle: "dashed",
            }}
            onClick={() => navigate("/form/training")}
        >
            Add training
        </Button>
    )
}
