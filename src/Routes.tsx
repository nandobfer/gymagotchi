import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./Screens/Home"
import { TrainingForm } from "./Screens/Form/Training"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {

    return (

        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/form/training/*" element={<TrainingForm />} />
            <Route path="*" element={<Home />} />
        </ReactRoutes>
            )
}
