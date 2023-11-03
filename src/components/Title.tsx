import React from 'react'
import {Box} from '@mui/material'

interface TitleProps {
    
}

export const Title:React.FC<TitleProps> = ({  }) => {
    
    return (
        <Box sx={{ color: "primary.main", fontSize: "2.5rem" }}>
            <p>Gymagotchi</p>
        </Box>
    )
}