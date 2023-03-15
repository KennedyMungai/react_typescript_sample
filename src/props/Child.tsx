import { FC } from "react"

interface ChildProps 
{
    color: string,
    onClick: () => void
}

const Child: FC<ChildProps> = ({ color, onClick }) =>
{
    return (
        <button onClick={onClick}> Click Me</button>
    )
}

export default Child