import { useContext } from "react"
import StopwatchContext from "../contexts/stopwatchContext"

export const useStopwatch = () => {
    const stopwatchContext = useContext(StopwatchContext)

    return { ...stopwatchContext }
}
