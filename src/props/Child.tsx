interface ChildProps 
{
    color: string
}

const Child = ({ color }: ChildProps) =>
{
    return (
        <div>
            <h1>I am the child component. I am a {color} colored individual</h1>
        </div>
    )
}

export default Child