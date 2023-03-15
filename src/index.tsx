import ReactDOM from 'react-dom';
import EventComponent from './events/EventComponent';

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            {/* <UserSearch /> */}
            <EventComponent />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))