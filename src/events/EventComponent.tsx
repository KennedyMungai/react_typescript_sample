import { ChangeEvent } from "react"

const EventComponent: React.FC = () =>
{
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    {
        console.log(e.target.value)
    }

    const onDragStart = () =>
    {

    }

    return (
        <>
            <input
                type="text"
                onChange={onChangeHandler}
            />
            <div className="" draggable onDragStart={onDragStart}>Drag Me</div>
        </>

    )
}

export default EventComponent