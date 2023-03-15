import ReactDOM from 'react-dom';
import EventComponentWithRefs from './events/EventComponentWithRefs';

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            {/* <UserSearch /> */}
            <EventComponentWithRefs />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))