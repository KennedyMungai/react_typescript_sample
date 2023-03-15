import { ChangeEvent, DragEvent } from "react"

const EventComponent: React.FC = () =>
{
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    {
        console.log(e.target.value)
    }

    const onDragStart = (event: DragEvent<HTMLDivElement>) =>
    {
        console.log(event.target)
    }

    return (
        <>
            <input
                type="text"
                onChange={onChangeHandler}
            />
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </>

    )
}

export default EventComponent