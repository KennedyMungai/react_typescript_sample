import { FC } from "react"

interface ChildProps 
{
    color: string
}

const Child: FC<ChildProps> = ({ color }) =>
{
    return (
        <button onClick={clickHandler}> Click Me</button>
    )
}

export default Child