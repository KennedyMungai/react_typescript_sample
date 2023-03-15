import { FC } from "react"

interface ChildProps 
{
    color: string
}

const clickHandler = () => 
{
    console.log("I'm being clicked!!!")
}

const Child: FC<ChildProps> = ({ color }) =>
{
    return (
        <button onClick={clickHandler}> Click Me</button>
    )
}

export default Child