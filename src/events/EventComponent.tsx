const EventComponent: React.FC = () =>
{
    const onChangeHandler = (e) =>
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