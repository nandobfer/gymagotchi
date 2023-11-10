import { createContext, useState } from "react"
import React from "react"

interface StopwatchContextValue {
    clocking: boolean
    setClocking: React.Dispatch<React.SetStateAction<boolean>>
}

interface StopwatchProviderProps {
    children: React.ReactNode
}

const StopwatchContext = createContext<StopwatchContextValue>({} as StopwatchContextValue)

export default StopwatchContext

export const StopwatchProvider: React.FC<StopwatchProviderProps> = ({ children }) => {
    const [clocking, setClocking] = useState(false)

    return <StopwatchContext.Provider value={{ clocking, setClocking }}>{children}</StopwatchContext.Provider>
}
