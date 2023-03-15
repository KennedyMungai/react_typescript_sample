import ReactDOM from 'react-dom';
import UserSearch from './state/UserSearch';

type Props = {}

const App = (props: Props) =>
{
    return (
        <div>
            <UserSearch />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))