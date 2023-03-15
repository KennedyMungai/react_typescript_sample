import ReactDOM from 'react-dom';
import GuestList from './state/GuestList';

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            <GuestList />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))