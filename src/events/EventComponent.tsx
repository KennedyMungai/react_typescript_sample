const EventComponent: React.FC = () =>
{
    return (
        <input
            type="text"
            onChange={e => console.log(e.target.value)}
        />
    )
}

export default EventComponent