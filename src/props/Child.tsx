import { FC } from "react"


interface ChildProps 
{
    color: string,
    onClick: () => void,
    children: React.ReactNode
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