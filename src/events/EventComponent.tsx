import { ChangeEvent } from "react"

const EventComponent: React.FC = () =>
{
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    {
        console.log(e)
    }

    return (
        <input
            type="text"
            onChange={onChangeHandler}
        />
    )
}

export default EventComponent