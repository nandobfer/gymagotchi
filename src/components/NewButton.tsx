import React from 'react'
import { Button } from "@mui/material"

interface NewButtonProps {
    onClick: () => void
}

export const NewButton:React.FC<NewButtonProps> = ({ onClick }) => {
    
    return (
        <Button
            onClick={onClick}
            variant="outlined"
            sx={{ fontSize: "3rem", width: "15vw", height: "15vw", position: "absolute", bottom: "5vw", right: "5vw" }}
        >
            +
        </Button>
    )
}