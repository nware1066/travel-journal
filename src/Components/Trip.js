import { Link } from 'react-router-dom';

function Trip(props) {

return (
    <div className="trip-card" >
        <h3>{props.name}</h3>
        <Link to='/createEntry'><button>edit</button></Link>
    </div>
    )

}

export default Trip;