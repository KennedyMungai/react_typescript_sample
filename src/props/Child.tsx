import { FC, ReactNode } from "react"


interface ChildProps 
{
    color: string,
    onClick: () => void,
    children: ReactNode
}

const Child: FC<ChildProps> = ({ color, onClick, children }) =>
{
    return (
        <>
            {children}
            <button onClick={onClick}> Click Me</button>
        </>
    )
}

export default Child