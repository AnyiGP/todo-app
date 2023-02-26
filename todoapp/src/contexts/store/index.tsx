import { createContext, FC, ReactNode, useState  } from "react";
import { Task } from "../../types";

type ContextType = {
    tasks: Task[],
    loadTasks: (t: Task[]) => void
}

const StoreContext = createContext<ContextType>({
    tasks: [],
    loadTasks: (t: Task[]) => undefined
})

type Props = {
    children: ReactNode
}

const StoreProvider: FC<Props> = ({ children }) => {

    const [tasks, setTasks] = useState<Task[]>([])

    const loadTasks = (t: Task[]) => {
        setTasks(t)
    }

return(
    <>
    <StoreContext.Provider value={{ tasks, loadTasks }}>
    {children}
    </StoreContext.Provider>
    </>
)

}

export { StoreContext, StoreProvider}